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
    path: "/terms",
    title: locale === "bn" ? "ব্যবহারের শর্তাবলি | এসবি স্পেস" : "Terms of Use | SB Space",
    description:
      locale === "bn"
        ? "এসবি স্পেস ওয়েবসাইট ব্যবহারের সাধারণ শর্তাবলি।"
        : "General terms for using the SB Space website.",
  });
}

export default async function TermsPage({ params }: Props) {
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
          { label: t("terms") },
        ]}
      />
      <section className="section-pad !pt-8 bg-background">
        <div className="container-text space-y-5">
          <h1 className="headline-section">{t("terms")}</h1>
          <p className="text-secondary md:text-[19px]">
            {locale === "bn"
              ? `এই ওয়েবসাইটের কন্টেন্ট ${site.name}-এর তথ্য প্রদানের জন্য। প্রজেক্টের দাম, সময়সীমা ও ওয়ারেন্টি লিখিত প্রস্তাবনায় নিশ্চিত হয়—ওয়েবসাইটের সাধারণ বর্ণনা চুক্তি নয়।`
              : `Content on this website is for information about ${site.name}. Project prices, timelines and warranties are confirmed in written proposals—general website copy is not a contract.`}
          </p>
          <p className="text-secondary md:text-[19px]">
            {locale === "bn"
              ? "প্লেসহোল্ডার ছবি ও চিহ্নিত {{PLACEHOLDER}} ক্ষেত্র মালিকের ইনপুটের অপেক্ষায় আছে।"
              : "Placeholder images and labelled {{PLACEHOLDER}} fields await owner input."}
          </p>
        </div>
      </section>
    </>
  );
}
