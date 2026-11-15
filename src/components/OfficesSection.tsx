import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site, formatOfficeAddress, googleMapsLink } from "@/content/site";
import { areas } from "@/content/areas";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";
import { ArrowUpRight, MapPinIcon } from "./Icons";

export async function OfficesSection() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad relative bg-bg-alt" aria-labelledby="offices-heading">
      <div className="section-divider absolute inset-x-0 top-0" aria-hidden />
      <div className="container-media">
        <Reveal>
          <p className="eyebrow">{t("offices")}</p>
          <h2 id="offices-heading" className="headline-section mt-4 text-balance">
            {locale === "bn"
              ? "মাধবদী ও মোহাম্মদপুর—দুই অফিস"
              : "Two offices — Madhabdi & Mohammadpur"}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {site.offices.map((office, i) => (
            <Reveal key={office.id} delay={i * 0.08}>
              <a
                href={googleMapsLink(office)}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-surface relative flex h-full flex-col p-7 sm:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2f8bff]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#2f8bff]/20 to-transparent text-[#8ec5ff]">
                    <MapPinIcon size={22} />
                  </span>
                  <span className="icon-circle">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3 className="relative mt-8 text-2xl font-semibold tracking-tight">
                  {locale === "bn" ? office.labelBn : office.label}
                </h3>
                <p className="relative mt-3 max-w-md text-pretty leading-relaxed text-secondary">
                  {formatOfficeAddress(office, locale)}
                </p>
                <span className="link-chevron relative mt-6 text-sm">{t("openInMaps")}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center">
          <p className="eyebrow shrink-0">{t("areasServed")}</p>
          <ul className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
                >
                  {area.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
