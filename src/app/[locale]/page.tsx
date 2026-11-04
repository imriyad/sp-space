import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { BentoGrid } from "@/components/BentoGrid";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { UnderOneRoof } from "@/components/UnderOneRoof";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { OfficesSection } from "@/components/OfficesSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { homeFaqs } from "@/content/faqs";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { faqPageSchema } from "@/lib/schema";
import type { Locale } from "@/i18n/routing";
import { site } from "@/content/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  const title =
    locale === "bn"
      ? "ঢাকা ও নরসিংদীতে ইন্টেরিয়র ও নির্মাণ | এসবি স্পেস"
      : "Interior Design & Construction Company in Dhaka | SB Space";
  const description =
    locale === "bn"
      ? site.description
      : "Architectural design, structural engineering, interior design and construction in Madhabdi (Narsingdi) and Mohammadpur (Dhaka).";
  return buildMetadataWithPublicOg({
    locale,
    path: "/",
    title,
    description,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("common");

  return (
    <>
      <JsonLd data={faqPageSchema(homeFaqs, locale)} />
      <Hero />
      <Intro />
      <BentoGrid />
      <ProjectCarousel />
      <UnderOneRoof />
      <Process compact />
      <Stats />
      <Testimonials />
      <OfficesSection />
      <FAQ
        items={homeFaqs}
        locale={locale}
        title={t("faqTitle")}
        eyebrow="FAQ"
      />
      <CTA />
    </>
  );
}
