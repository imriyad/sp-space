import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

/** Hidden when testimonials array is empty — never invent reviews. */
export async function Testimonials() {
  if (!site.testimonials.length) return null;
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad bg-background" aria-labelledby="testimonials-heading">
      <div className="container-media">
        <h2 id="testimonials-heading" className="headline-section">
          {locale === "bn" ? "ক্লায়েন্টদের কথা" : "What clients say"}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.testimonials.map((item) => (
            <blockquote key={item.author} className="card-surface bg-bg-alt p-8">
              <p className="text-xl leading-relaxed text-primary">
                “{locale === "bn" ? item.quoteBn : item.quoteEn}”
              </p>
              <footer className="mt-6 text-secondary">
                <cite className="not-italic font-semibold text-primary">{item.author}</cite>
                {item.role ? ` — ${item.role}` : null}
              </footer>
            </blockquote>
          ))}
        </div>
        {site.social.facebook ? (
          <p className="mt-8">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="link-chevron"
            >
              {locale === "bn" ? "ফেসবুকে আরও দেখুন" : "See more on Facebook"}
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
