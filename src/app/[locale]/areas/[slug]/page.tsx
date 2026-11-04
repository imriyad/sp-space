import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getAllAreaSlugs, getAreaBySlug } from "@/content/areas";
import { getOfficeById, formatOfficeAddress, googleMapsLink, site } from "@/content/site";
import { getProjectBySlug } from "@/content/projects";
import { getServiceBySlug } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { routing, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllAreaSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return buildMetadataWithPublicOg({
    locale,
    path: `/areas/${slug}`,
    title: area.seo.title[locale],
    description: area.seo.description[locale],
  });
}

export default async function AreaPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const t = await getTranslations("common");
  const tn = await getTranslations("nav");
  const office = getOfficeById(area.nearestOfficeId);
  const bodyParts = area.body[locale].split(/\n\n+/);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("home"), path: "/" },
          { name: area.name[locale], path: `/areas/${slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: area.name[locale] },
        ]}
      />

      <section className="section-pad !pt-8 bg-background">
        <div className="container-text">
          <h1 className="headline-section">{area.seo.title[locale].split("|")[0].trim()}</h1>
          <p className="body-lg mt-5 !text-primary">{area.intro[locale]}</p>
          <div className="mt-8 space-y-5">
            {bodyParts.map((p) => (
              <p key={p.slice(0, 40)} className="text-secondary md:text-[19px] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-alt">
        <div className="container-media grid gap-10 lg:grid-cols-2">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold">{t("nearestOffice")}</h2>
            <p className="mt-2 font-medium">
              {locale === "bn" ? office.labelBn : office.label}
            </p>
            <p className="mt-2 text-secondary">{formatOfficeAddress(office, locale)}</p>
            <p className="mt-2">
              <a href={`tel:${site.phone}`} className="link-chevron">
                {site.phoneDisplay}
              </a>
            </p>
            <a
              href={googleMapsLink(office)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-chevron mt-4 inline-block"
            >
              {t("openInMaps")}
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t("relatedServices")}</h2>
            <ul className="mt-4 space-y-3">
              {area.relatedServiceSlugs.map((s) => {
                const service = getServiceBySlug(s);
                if (!service) return null;
                return (
                  <li key={s}>
                    <Link href={`/services/${s}`} className="link-chevron">
                      {service.title[locale]}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <h2 className="mt-10 text-2xl font-semibold">{t("relatedProjects")}</h2>
            <ul className="mt-4 space-y-3">
              {area.relatedProjectSlugs.map((s) => {
                const project = getProjectBySlug(s);
                if (!project) return null;
                return (
                  <li key={s}>
                    <Link href={`/projects/${s}`} className="link-chevron">
                      {project.title[locale]}
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
