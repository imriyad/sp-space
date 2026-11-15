import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { services } from "@/content/services";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

export async function Intro() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad relative bg-background">
      <div className="container-media grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">{t("introTitle")}</p>
          <h2 className="headline-section mt-5 text-balance">
            {locale === "bn" ? (
              site.differentiatorBn
            ) : (
              <>
                Design, engineering and construction{" "}
                <span className="text-white/40">under one roof.</span>
              </>
            )}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:pt-12">
          <p className="body-lg text-pretty">
            {locale === "bn"
              ? `${site.shortName} একটি স্থাপত্য নকশা, কাঠামো নকশা, ইন্টেরিয়র ডিজাইন, নির্মাণ, অ্যানিমেশন, স্টিল স্ট্রাকচার ও থ্রিডি ভিজুয়ালাইজেশন ফার্ম—মাধবদী (নরসিংদী) ও মোহাম্মদপুর (ঢাকা) অফিসসহ।`
              : site.description}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {services.map((s) => (
              <li
                key={s.slug}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-white/70"
              >
                {s.title[locale]}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
