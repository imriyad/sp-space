import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site, telHref } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { ArrowRight, PhoneIcon } from "./Icons";

export async function CTA() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad relative bg-background text-white">
      <div className="container-media">
        <div className="glow-border relative overflow-hidden rounded-[32px] px-6 py-16 text-center sm:px-12 md:py-24">
          <div className="absolute inset-0 atmosphere" aria-hidden />
          <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
          <div
            className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[100px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="headline-section text-balance">
              {locale === "bn" ? site.ctaBn : site.ctaEn}
            </h2>
            <p className="body-lg mx-auto mt-5 max-w-xl text-balance !text-white/65">
              {locale === "bn" ? site.differentiatorBn : site.differentiatorEn}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/contact" className="btn-pill btn-pill-primary w-full sm:w-auto sm:min-w-[210px]">
                {t("getQuote")}
                <ArrowRight size={16} />
              </Link>
              <a href={telHref(site.phone)} aria-label={`${t("call")} ${site.phoneDisplay}`} className="btn-pill btn-pill-secondary w-full sm:w-auto sm:min-w-[210px]">
                <PhoneIcon size={16} />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
