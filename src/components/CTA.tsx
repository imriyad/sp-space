import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site, telHref } from "@/content/site";
import type { Locale } from "@/i18n/routing";

export async function CTA() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad relative overflow-hidden text-white">
      <div className="absolute inset-0 atmosphere" aria-hidden />
      <div className="container-text relative text-center">
        <h2 className="headline-section text-balance">
          {locale === "bn" ? site.ctaBn : site.ctaEn}
        </h2>
        <p className="body-lg mx-auto mt-5 max-w-2xl !text-white/65">
          {locale === "bn" ? site.differentiatorBn : site.differentiatorEn}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/contact" className="btn-pill btn-pill-primary min-w-[200px]">
            {t("getQuote")} →
          </Link>
          <a href={telHref(site.phone)} className="btn-pill btn-pill-secondary min-w-[200px]">
            {t("call")} {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
