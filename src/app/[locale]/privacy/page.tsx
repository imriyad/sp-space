import { setRequestLocale, getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  return buildMetadataWithPublicOg({
    locale,
    path: "/privacy",
    title: locale === "bn" ? "গোপনীয়তা নীতি | এসবি স্পেস" : "Privacy Policy | SB Space",
    description:
      locale === "bn"
        ? "এসবি স্পেস কীভাবে যোগাযোগ ফর্ম ও ওয়েবসাইট ডেটা ব্যবহার করে।"
        : "How SB Space uses contact form and website data.",
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const tn = await getTranslations("nav");
  const t = await getTranslations("common");

  return (
    <>
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("privacy") },
        ]}
      />
      <section className="section-pad !pt-8 bg-background">
        <div className="container-text space-y-5">
          <h1 className="headline-section">{t("privacy")}</h1>
          <p className="text-secondary md:text-[19px]">
            {locale === "bn"
              ? `${site.name} ওয়েবসাইট ও যোগাযোগ ফর্মের মাধ্যমে আপনার নাম, ফোন, ইমেইল ও বার্তা সংগ্রহ করতে পারে যাতে আমরা আপনার অনুরোধের জবাব দিতে পারি। আমরা এই তথ্য স্প্যাম বা অসম্পর্কিত মার্কেটিংয়ের জন্য বিক্রি করি না।`
              : `${site.name} may collect your name, phone, email and message through the website contact form so we can respond to your request. We do not sell this information for spam or unrelated marketing.`}
          </p>
          <p className="text-secondary md:text-[19px]">
            {locale === "bn"
              ? "অ্যানালিটিক্স (যেমন GA4) সক্রিয় থাকলে বেনামি ব্যবহারের পরিসংখ্যান সংগ্রহ হতে পারে। প্রশ্ন থাকলে ইমেইল করুন: "
              : "If analytics (such as GA4) is enabled, anonymized usage statistics may be collected. Questions: "}
            <a href={`mailto:${site.email}`} className="link-chevron">
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
