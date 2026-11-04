import { setRequestLocale, getTranslations } from "next-intl/server";
import { Process } from "@/components/Process";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
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
    path: "/process",
    title:
      locale === "bn"
        ? "আমাদের প্রক্রিয়া — পরামর্শ থেকে হস্তান্তর | এসবি স্পেস"
        : "Our Process — Consultation to Handover | SB Space",
    description:
      locale === "bn"
        ? "এসবি স্পেসের স্বচ্ছ পাঁচ ধাপ: পরামর্শ, ধারণা ও থ্রিডি, উপকরণ ও বাজেট, নির্মাণ, হস্তান্তর।"
        : "SB Space’s transparent five steps: consultation, concept & 3D, materials & budget, build, handover.",
  });
}

export default async function ProcessPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const tn = await getTranslations("nav");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("home"), path: "/" },
          { name: tn("process"), path: "/process" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("process") },
        ]}
      />
      <section className="bg-background pb-8 pt-8">
        <div className="container-media">
          <h1 className="headline-section max-w-4xl">
            {locale === "bn"
              ? "পরামর্শ থেকে হস্তান্তর—স্বচ্ছ প্রক্রিয়া"
              : "From consultation to handover—a transparent process"}
          </h1>
          <p className="body-lg mt-4 max-w-3xl">
            {locale === "bn"
              ? "সময়সীমা প্রজেক্টের স্কোপের উপর নির্ভর করে; আমরা নির্দিষ্ট দিনের প্রতিশ্রুতি স্কোপ না বুঝে দিই না।"
              : "Timelines depend on scope; we do not invent fixed day counts before understanding your project."}
          </p>
        </div>
      </section>
      <Process />
      <CTA />
    </>
  );
}
