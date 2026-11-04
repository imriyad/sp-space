import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site, formatOfficeAddress, googleMapsLink } from "@/content/site";
import { areas } from "@/content/areas";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

export async function OfficesSection() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad bg-bg-alt" aria-labelledby="offices-heading">
      <div className="container-media">
        <Reveal>
          <p className="eyebrow">{t("offices")}</p>
          <h2 id="offices-heading" className="headline-section mt-3">
            {locale === "bn"
              ? "মাধবদী ও মোহাম্মদপুর—দুই অফিস"
              : "Two offices — Madhabdi & Mohammadpur"}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {site.offices.map((office) => (
            <Reveal key={office.id}>
              <article className="card-surface p-8">
                <h3 className="text-2xl font-semibold">
                  {locale === "bn" ? office.labelBn : office.label}
                </h3>
                <p className="mt-3 text-secondary">{formatOfficeAddress(office, locale)}</p>
                <a
                  href={googleMapsLink(office)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-chevron mt-4 inline-block"
                >
                  {t("openInMaps")}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <p className="eyebrow">{t("areasServed")}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="btn-pill btn-pill-secondary text-sm"
                >
                  {area.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
