import { setRequestLocale, getTranslations } from "next-intl/server";
import { faqs } from "@/content/faqs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  return buildMetadataWithPublicOg({
    locale,
    path: "/faq",
    title:
      locale === "bn"
        ? "প্রশ্নোত্তর — ইন্টেরিয়র ও নির্মাণ | এসবি স্পেস"
        : "FAQ — Interior Design & Construction | SB Space",
    description:
      locale === "bn"
        ? "ইন্টেরিয়র খরচ, সময়সীমা, থ্রিডি, স্টিল স্ট্রাকচার ও সেবা এলাকা নিয়ে সাধারণ প্রশ্নের উত্তর।"
        : "Answers about interior cost, timelines, 3D, steel structure and service areas.",
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("common");
  const tn = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, [
            { name: tn("home"), path: "/" },
            { name: tn("faq"), path: "/faq" },
          ]),
          faqPageSchema(faqs, locale),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("faq") },
        ]}
      />
      <div className="container-media pt-8">
        <h1 className="headline-section">{t("faqTitle")}</h1>
      </div>
      <FAQ items={faqs} locale={locale} title={t("faqTitle")} />
      <CTA />
    </>
  );
}
