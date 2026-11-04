import { setRequestLocale, getTranslations } from "next-intl/server";
import { site, telHref } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OfficeSwitcher } from "@/components/OfficeSwitcher";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  return buildMetadataWithPublicOg({
    locale,
    path: "/contact",
    title:
      locale === "bn"
        ? "যোগাযোগ — মাধবদী ও মোহাম্মদপুর অফিস | এসবি স্পেস"
        : "Contact — Madhabdi & Mohammadpur Offices | SB Space",
    description:
      locale === "bn"
        ? "ফ্রি পরামর্শের জন্য কল, হোয়াটসঅ্যাপ বা ফর্ম পাঠান। মাধবদী (নরসিংদী) ও মোহাম্মদপুর (ঢাকা) অফিস।"
        : "Call, WhatsApp or send a form for a free consultation. Offices in Madhabdi (Narsingdi) and Mohammadpur (Dhaka).",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("common");
  const tn = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("home"), path: "/" },
          { name: tn("contact"), path: "/contact" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("contact") },
        ]}
      />

      <section className="section-pad !pt-8 bg-background">
        <div className="container-media grid gap-14 lg:grid-cols-2">
          <div>
            <h1 className="headline-section">
              {locale === "bn" ? "যোগাযোগ করুন" : "Get in touch"}
            </h1>
            <p className="body-lg mt-4">
              {locale === "bn" ? site.ctaBn : site.ctaEn}
            </p>

            <div className="mt-8 space-y-3 text-lg">
              <p>
                <a href={telHref(site.phone)} className="link-chevron">
                  {t("call")} {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-chevron"
                >
                  {t("whatsapp")}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-chevron">
                  {site.email}
                </a>
              </p>
              <p className="pt-4 text-secondary">
                {t("director")}: {site.director.name} —{" "}
                <a href={telHref(site.director.phone)} className="text-accent hover:underline">
                  {site.director.phoneDisplay}
                </a>
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold">{t("offices")}</h2>
              <div className="mt-4">
                <OfficeSwitcher locale={locale} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t("getQuote")}</h2>
            <div className="mt-6">
              <QuoteForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
