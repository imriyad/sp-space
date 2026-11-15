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

  return (
    <section
      className={`section-pad relative ${compact ? "bg-background" : "bg-bg-alt"}`}
      aria-labelledby="process-heading"
    >
      <div className="container-media">
        <Reveal>
          <p className="eyebrow">{t("ourProcess")}</p>
          <h2 id="process-heading" className="headline-section mt-4 max-w-3xl text-balance">
            {locale === "bn" ? "স্বচ্ছ ধাপে ধাপে কাজ" : "A clear path from brief to handover"}
          </h2>
        </Reveal>

        <div className="relative mt-14">
        {/* Connecting rail behind the step markers on wide screens */}
        <span
          className="pointer-events-none absolute left-6 right-[10%] top-6 hidden h-px bg-gradient-to-r from-[#4c9dff]/60 via-white/15 to-transparent lg:block"
          aria-hidden
        />
        <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {processSteps.map((step, i) => (
            <li key={step.id} className="relative">
              <Reveal delay={i * 0.07} className="h-full">
                <div className="card-surface-sm h-full p-6 lg:border-0 lg:bg-none lg:bg-transparent lg:p-0 lg:pr-8">
                  <span className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0d0d10] font-mono text-sm font-semibold text-white ${compact ? "shadow-[0_0_0_6px_var(--bg-light)]" : "shadow-[0_0_0_6px_var(--bg-alt)]"}`}>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2f8bff]/25 to-transparent" aria-hidden />
                    <span className="relative">{step.number}</span>
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title[locale]}</h3>
                  <p className="mt-3 text-pretty text-[15px] leading-relaxed text-secondary">
                    {step.description[locale]}
                  </p>
                  {!compact ? (
                    <p className="mt-4 border-t border-white/[0.08] pt-4 text-sm text-white/45">
                      {step.timingNote[locale]}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
