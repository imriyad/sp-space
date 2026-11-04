import { MediaImage as Image } from "@/components/MediaImage";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import { getServiceBySlug } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubNav } from "@/components/SubNav";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { routing, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadataWithPublicOg({
    locale,
    path: `/projects/${slug}`,
    title: `${project.title[locale]} | ${project.location[locale]}`,
    description: project.overview[locale].slice(0, 155),
    ogImage: project.coverImage,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("common");
  const tn = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("home"), path: "/" },
          { name: tn("projects"), path: "/projects" },
          { name: project.title[locale], path: `/projects/${slug}` },
        ])}
      />
      <SubNav title={project.title[locale]} ctaLabel={t("getQuote")} />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("projects"), href: "/projects" },
          { label: project.title[locale] },
        ]}
      />

      <section className="bg-background pb-16">
        <div className="container-media pt-6">
          <h1 className="headline-section max-w-4xl">{project.title[locale]}</h1>
          <p className="mt-3 text-lg text-secondary">
            {project.location[locale]} · {project.type[locale]}
          </p>
          {project.isPlaceholder ? (
            <p className="mt-2 text-sm text-secondary">{t("placeholderProject")}</p>
          ) : null}

          <div className="card-surface relative mt-8 aspect-[16/9] overflow-hidden bg-bg-alt">
            <Image
              src={project.coverImage}
              alt={`${project.title[locale]} — ${project.location[locale]}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-alt">
        <div className="container-media grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">
                {locale === "bn" ? "ওভারভিউ" : "Overview"}
              </h2>
              <p className="mt-3 text-secondary md:text-[19px]">{project.overview[locale]}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                {locale === "bn" ? "ক্লায়েন্টের প্রয়োজন" : "Client need"}
              </h2>
              <p className="mt-3 text-secondary md:text-[19px]">{project.clientNeed[locale]}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                {locale === "bn" ? "সমাধান" : "Solution"}
              </h2>
              <p className="mt-3 text-secondary md:text-[19px]">{project.solution[locale]}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                {locale === "bn" ? "ফলাফল" : "Result"}
              </h2>
              <p className="mt-3 text-secondary md:text-[19px]">{project.result[locale]}</p>
            </div>
          </div>

          <aside className="card-surface h-fit p-6">
            <h2 className="text-lg font-semibold">
              {locale === "bn" ? "প্রজেক্ট তথ্য" : "Project facts"}
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <Fact label={locale === "bn" ? "লোকেশন" : "Location"} value={project.location[locale]} />
              <Fact
                label={locale === "bn" ? "আয়তন" : "Area"}
                value={project.areaSqFt ? `${project.areaSqFt} sq ft` : "{{AREA_SQ_FT}}"}
              />
              <Fact label={locale === "bn" ? "বছর" : "Year"} value={project.year || "{{YEAR}}"} />
              <Fact
                label={locale === "bn" ? "সময়কাল" : "Duration"}
                value={project.duration || "{{DURATION}}"}
              />
              <Fact label={locale === "bn" ? "ধরন" : "Type"} value={project.type[locale]} />
            </dl>
            <Link href="/contact" className="btn-pill btn-pill-primary mt-6 inline-flex">
              {t("startSimilar")}
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-media">
          <h2 className="headline-section !text-4xl">
            {locale === "bn" ? "গ্যালারি" : "Gallery"}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((src, i) => (
              <div key={`${src}-${i}`} className="card-surface-sm relative aspect-[4/3] overflow-hidden bg-bg-alt">
                <Image
                  src={src}
                  alt={`${project.title[locale]} gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">{t("relatedServices")}</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {project.relatedServices.map((slug) => {
                const service = getServiceBySlug(slug);
                if (!service) return null;
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="link-chevron">
                      {service.title[locale]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-[var(--divider)] pb-2">
      <dt className="text-secondary">{label}</dt>
      <dd className="text-right font-medium text-primary">{value}</dd>
    </div>
  );
}
