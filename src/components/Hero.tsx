import { MediaImage as Image } from "@/components/MediaImage";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 atmosphere" aria-hidden />
      <div className="absolute inset-0">
        <Image
          src="/images/placeholder-hero.svg"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.35)_55%,rgba(5,5,5,0.92)_100%)]"
        aria-hidden
      />

      <div className="container-media relative flex min-h-[min(88vh,880px)] flex-col items-center justify-center px-5 pb-28 pt-24 text-center md:pb-24">
        <p className="hero-badge">
          <span className="hero-badge-dot" aria-hidden />
          <span>{t("badge")}</span>
        </p>

        <h1 className="headline-hero mt-8 max-w-5xl text-balance">
          <span className="block">{t("line1")}</span>
          <span className="text-gradient block">{t("line2")}</span>
        </h1>

        <p className="body-lg mt-6 max-w-2xl text-balance !text-white/70">
          {locale === "bn" ? site.differentiatorBn : site.differentiatorEn}{" "}
          {locale === "bn"
            ? "ইন-হাউস স্থপতি ও প্রকৌশলী—ডিজাইন থেকে নির্মাণ পর্যন্ত এক দল।"
            : "In-house architect and engineer—from design through build, one coordinated team."}
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link href="/contact" className="btn-pill btn-pill-primary w-full sm:w-auto sm:min-w-[220px]">
            {t("ctaPrimary")} →
          </Link>
          <Link href="/projects" className="btn-pill btn-pill-secondary w-full sm:w-auto sm:min-w-[220px]">
            {t("ctaSecondary")}
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-sm text-white/45 sm:mt-12 sm:flex-row sm:gap-4">
          <p>{t("proofTeam")}</p>
          <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
          <p>{t("proofOffices")}</p>
        </div>
      </div>
    </section>
  );
}
