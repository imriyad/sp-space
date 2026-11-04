import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

/** Renders nothing when stats are empty — never invent numbers. */
export async function Stats() {
  if (!site.stats.length) return null;
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad bg-bg-alt" aria-label="Statistics">
      <div className="container-media grid gap-10 sm:grid-cols-3">
        {site.stats.map((stat) => (
          <div key={stat.value} className="text-center">
            <p className="text-5xl font-semibold tracking-tight md:text-6xl">{stat.value}</p>
            <p className="mt-2 text-secondary">
              {locale === "bn" ? stat.labelBn : stat.labelEn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
