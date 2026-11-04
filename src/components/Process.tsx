import { getLocale, getTranslations } from "next-intl/server";
import { processSteps } from "@/content/process";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

type ProcessProps = {
  compact?: boolean;
};

export async function Process({ compact = false }: ProcessProps) {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;
  const steps = compact ? processSteps : processSteps;

  return (
    <section className={`section-pad ${compact ? "bg-background" : "bg-bg-alt"}`} aria-labelledby="process-heading">
      <div className="container-media">
        <Reveal>
          <p className="eyebrow">{t("ourProcess")}</p>
          <h2 id="process-heading" className="headline-section mt-3 max-w-3xl">
            {locale === "bn"
              ? "স্বচ্ছ ধাপে ধাপে কাজ"
              : "A clear path from brief to handover"}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.06}>
              <li>
                <p className="text-sm font-semibold text-secondary">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {step.title[locale]}
                </h3>
                <p className="mt-3 text-secondary">{step.description[locale]}</p>
                {!compact ? (
                  <p className="mt-3 text-sm text-secondary/80">{step.timingNote[locale]}</p>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
