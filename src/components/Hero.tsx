import { MediaImage as Image } from "@/components/MediaImage";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { getFeaturedProjects } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { ArrowRight } from "./Icons";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = (await getLocale()) as Locale;
  const [first, second] = getFeaturedProjects();

  // Real project photography — side frames hide on small screens.
  const showcase = [
    first && {
      src: first.gallery[3] ?? first.coverImage,
      project: first,
      className: "hidden md:block md:translate-y-10 md:-rotate-[2deg]",
    },
    first && {
      src: first.coverImage,
      project: first,
      className: "md:z-10",
    },
    second && {
      src: second.coverImage,
      project: second,
      className: "hidden md:block md:translate-y-10 md:rotate-[2deg]",
    },
  ].filter(Boolean) as { src: string; project: NonNullable<typeof first>; className: string }[];

  return (
    <section className="relative -mt-16 overflow-hidden pt-16 text-white">
      <div className="absolute inset-0 atmosphere" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-[#2f8bff]/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-media relative flex flex-col items-center px-5 pb-10 pt-20 text-center md:pt-28">
        <p className="hero-badge animate-fade-up">
          <span className="hero-badge-dot" aria-hidden />
          <span>{t("badge")}</span>
        </p>

        <h1 className="headline-hero mt-8 max-w-5xl text-balance">
          <span className="block animate-fade-up [animation-delay:100ms]">{t("line1")}</span>
          <span className="text-gradient block animate-fade-up pb-[0.08em] [animation-delay:200ms]">
            {t("line2")}
          </span>
        </h1>

        <p className="body-lg mt-6 max-w-2xl animate-fade-up text-balance !text-white/65 [animation-delay:300ms]">
          {locale === "bn" ? site.differentiatorBn : site.differentiatorEn}{" "}
          {locale === "bn"
            ? "ইন-হাউস স্থপতি ও প্রকৌশলী—ডিজাইন থেকে নির্মাণ পর্যন্ত এক দল।"
            : "In-house architect and engineer—from design through build, one coordinated team."}
        </p>

        <div className="mt-9 flex w-full max-w-md animate-fade-up flex-col items-center gap-3 [animation-delay:400ms] sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link href="/contact" className="btn-pill btn-pill-primary w-full sm:w-auto sm:min-w-[220px]">
            {t("ctaPrimary")}
            <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="btn-pill btn-pill-secondary w-full sm:w-auto sm:min-w-[220px]">
            {t("ctaSecondary")}
          </Link>
        </div>

        <ul className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/45 [animation-delay:500ms]">
          <li>{t("proofTeam")}</li>
          <li className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" aria-hidden />
          <li>{t("proofOffices")}</li>
        </ul>

        {showcase.length > 0 ? (
          <div className="relative mt-16 grid w-full animate-fade-up grid-cols-1 gap-5 [animation-delay:650ms] md:mt-20 md:grid-cols-[1fr_1.35fr_1fr] md:items-start">
            {showcase.map((item, i) => (
              <Link
                key={`${item.src}-${i}`}
                href={`/projects/${item.project.slug}`}
                className={`group glow-border relative block aspect-[4/3] overflow-hidden rounded-[28px] bg-bg-card shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] md:aspect-[4/5] ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={`${item.project.title[locale]} — ${item.project.location[locale]}`}
                  fill
                  priority={i === 1}
                  className="img-zoom object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" aria-hidden />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-left">
                  <div>
                    <p className="text-[15px] font-semibold leading-tight">{item.project.title[locale]}</p>
                    <p className="mt-0.5 text-xs text-white/65">{item.project.location[locale]}</p>
                  </div>
                  <span className="chip shrink-0">{item.project.type[locale].replace(/^.*\((.*)\)$/, "$1")}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
