import { MediaImage as Image } from "@/components/MediaImage";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./Icons";

export async function BentoGrid() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad relative bg-bg-alt" aria-labelledby="services-heading">
      <div className="section-divider absolute inset-x-0 top-0" aria-hidden />
      <div className="container-media">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{t("ourServices")}</p>
            <h2 id="services-heading" className="headline-section mt-4 max-w-3xl text-balance">
              {locale === "bn"
                ? "ডিজাইন থেকে নির্মাণ—সম্পূর্ণ সেবা"
                : "From design to build⁠—complete services"}
            </h2>
          </div>
          <Link href="/services" className="link-chevron">
            {locale === "bn" ? "সব সেবা" : "All services"}
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const featured = index === 0 || index === 3;
            return (
              <Reveal key={service.slug} delay={(index % 3) * 0.06} className={featured ? "lg:col-span-2" : ""}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-surface relative flex h-full flex-col"
                >
                  <div className={`relative ${featured ? "h-64" : "h-48"} w-full overflow-hidden`}>
                    <Image
                      src={service.heroImage}
                      alt={service.title[locale]}
                      fill
                      className="img-zoom object-cover"
                      sizes={featured ? "(max-width:1024px) 100vw, 66vw" : "(max-width:1024px) 100vw, 33vw"}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"
                      aria-hidden
                    />
                    <span className="chip absolute left-5 top-5 font-mono tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="icon-circle absolute right-5 top-5">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-2">
                    <h3 className="text-[1.375rem] font-semibold tracking-tight">{service.title[locale]}</h3>
                    <p className="mt-2 text-pretty leading-relaxed text-secondary">
                      {service.shortDescription[locale]}
                    </p>
                    <span className="link-chevron mt-auto pt-5 text-sm">{t("learnMore")}</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
