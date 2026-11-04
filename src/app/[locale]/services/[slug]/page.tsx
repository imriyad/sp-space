import { MediaImage as Image } from "@/components/MediaImage";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getAllServiceSlugs, getServiceBySlug } from "@/content/services";
import { getProjectBySlug } from "@/content/projects";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubNav } from "@/components/SubNav";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { routing, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllServiceSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadataWithPublicOg({
    locale,
    path: `/services/${slug}`,
    title: service.seo.title[locale],
    description: service.seo.description[locale],
    ogImage: service.heroImage,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const t = await getTranslations("common");
  const tn = await getTranslations("nav");
  const related = service.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  const paragraphs = service.longDescription[locale].split(/\n\n+/);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, [
            { name: tn("home"), path: "/" },
            { name: tn("services"), path: "/services" },
            { name: service.title[locale], path: `/services/${slug}` },
          ]),
          serviceSchema({
            name: service.title[locale],
            description: service.shortDescription[locale],
            path: `/services/${slug}`,
            locale,
            serviceType: service.title.en,
          }),
          ...(service.faqs.length
            ? [faqPageSchema(service.faqs.map((f, i) => ({ id: `${slug}-${i}`, ...f })), locale)]
            : []),
        ]}
      />
      <SubNav title={service.title[locale]} ctaLabel={t("getQuote")} />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("services"), href: "/services" },
          { label: service.title[locale] },
        ]}
      />

      <section className="bg-background">
        <div className="container-media pb-16 pt-6">
          <h1 className="headline-section max-w-4xl">{service.title[locale]}</h1>
          <p className="body-lg mt-4 max-w-3xl">{service.shortDescription[locale]}</p>
          <div className="card-surface relative mt-10 aspect-[16/9] overflow-hidden bg-bg-alt">
            <Image
              src={service.heroImage}
              alt={service.title[locale]}
              fill
              className="object-cover"
              sizes="(max-width:1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-alt">
        <div className="container-text prose-like space-y-5">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="body-lg !text-primary">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-media grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">
              {locale === "bn" ? "সুবিধা" : "Benefits"}
            </h2>
            <ul className="mt-4 space-y-3 text-secondary">
              {service.benefits.map((b) => (
                <li key={b.en}>• {b[locale]}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {locale === "bn" ? "ডেলিভারেবল" : "Deliverables"}
            </h2>
            <ul className="mt-4 space-y-3 text-secondary">
              {service.deliverables.map((b) => (
                <li key={b.en}>• {b[locale]}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {locale === "bn" ? "প্রক্রিয়া" : "Process"}
            </h2>
            <ol className="mt-4 space-y-3 text-secondary">
              {service.processSteps.map((b, i) => (
                <li key={b.en}>
                  {i + 1}. {b[locale]}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-pad bg-bg-alt">
          <div className="container-media">
            <h2 className="headline-section !text-4xl">{t("relatedProjects")}</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((project) =>
                project ? (
                  <li key={project.slug}>
                    <Link href={`/projects/${project.slug}`} className="link-chevron text-lg">
                      {project.title[locale]} — {project.location[locale]}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </section>
      ) : null}

      {service.faqs.length > 0 ? (
        <FAQ
          items={service.faqs.map((f, i) => ({ id: `${slug}-${i}`, ...f }))}
          locale={locale}
          title={t("faqTitle")}
        />
      ) : null}
      <CTA />
    </>
  );
}
