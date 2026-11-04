import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

export async function Intro() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad bg-bg-alt">
      <div className="container-text text-center">
        <Reveal>
          <p className="eyebrow">{t("introTitle")}</p>
          <h2 className="headline-section mt-4 text-balance">
            {locale === "bn" ? site.differentiatorBn : site.differentiatorEn}
          </h2>
          <p className="body-lg mt-6 text-balance">
            {locale === "bn"
              ? `${site.shortName} একটি স্থাপত্য নকশা, কাঠামো নকশা, ইন্টেরিয়র ডিজাইন, নির্মাণ, অ্যানিমেশন, স্টিল স্ট্রাকচার ও থ্রিডি ভিজুয়ালাইজেশন ফার্ম—মাধবদী (নরসিংদী) ও মোহাম্মদপুর (ঢাকা) অফিসসহ।`
              : site.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
