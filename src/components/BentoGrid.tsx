import { MediaImage as Image } from "@/components/MediaImage";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

export async function BentoGrid() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad bg-background" aria-labelledby="services-heading">
      <div className="container-media">
        <Reveal>
          <p className="eyebrow">{t("ourServices")}</p>
          <h2 id="services-heading" className="headline-section mt-3 max-w-3xl">
            {locale === "bn"
              ? "ডিজাইন থেকে নির্মাণ—সম্পূর্ণ সেবা"
              : "From design to build—complete services"}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const featured = index === 0 || index === 3;
            return (
              <Reveal key={service.slug} delay={index * 0.05} className={featured ? "lg:col-span-2" : ""}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-surface relative block min-h-[280px] transition hover:border-white/20"
                >
                  <div className={`relative ${featured ? "h-64" : "h-44"} w-full overflow-hidden`}>
                    <Image
                      src={service.heroImage}
                      alt={service.title[locale]}
                      fill
                      className="img-zoom object-cover"
                      sizes={featured ? "(max-width:1024px) 100vw, 66vw" : "(max-width:1024px) 100vw, 33vw"}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold tracking-tight">{service.title[locale]}</h3>
                    <p className="mt-2 text-secondary">{service.shortDescription[locale]}</p>
                    <span className="link-chevron mt-4 inline-block">{t("learnMore")}</span>
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
