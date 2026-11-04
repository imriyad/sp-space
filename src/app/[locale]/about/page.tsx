import { setRequestLocale, getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema, personSchemas } from "@/lib/schema";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  return buildMetadataWithPublicOg({
    locale,
    path: "/about",
    title:
      locale === "bn"
        ? "আমাদের কথা — ডিজাইন ও নির্মাণ এক ছাদে | এসবি স্পেস"
        : "About SB Space — Design & Construction Under One Roof",
    description:
      locale === "bn"
        ? "এসবি স্পেস—মাধবদী ও মোহাম্মদপুর অফিসসহ স্থপতি (MIAB) ও প্রকৌশলী (MIEB) ইন-হাউস।"
        : "SB Space — Madhabdi and Mohammadpur offices with in-house architect (MIAB) and engineer (MIEB).",
  });
}

export default async function AboutPage({ params }: Props) {
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
            { name: tn("about"), path: "/about" },
          ]),
          ...personSchemas(),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("about") },
        ]}
      />

      <section className="section-pad !pt-8 bg-background">
        <div className="container-text">
          <h1 className="headline-section">
            {locale === "bn" ? site.taglineBn : site.taglineEn}
          </h1>
          <p className="body-lg mt-6 !text-primary">{site.description}</p>
          <p className="body-lg mt-4">
            {locale === "bn" ? site.differentiatorBn : site.differentiatorEn}
          </p>
          <p className="body-lg mt-4">
            {locale === "bn"
              ? "পরিচালক রোমান পাঠানের নেতৃত্বে আমরা নরসিংদী/মাধবদী ও ঢাকা/মোহাম্মদপুরে ক্লায়েন্টদের সাথে কাজ করি—নকশা থেকে নির্মাণ পর্যন্ত স্পষ্ট যোগাযোগ রেখে।"
              : "Led by Director Roman Pathan, we work with clients across Narsingdi/Madhabdi and Dhaka/Mohammadpur—keeping communication clear from design through construction."}
          </p>
        </div>
      </section>

      <section className="section-pad bg-bg-alt">
        <div className="container-media">
          <h2 className="headline-section !text-4xl">{t("teamTitle")}</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            <li className="card-surface p-6">
              <p className="text-xl font-semibold">{site.director.name}</p>
              <p className="mt-1 text-secondary">
                {locale === "bn" ? site.director.roleBn : site.director.role}
              </p>
              <a href={`tel:${site.director.phone}`} className="link-chevron mt-4 inline-block">
                {site.director.phoneDisplay}
              </a>
            </li>
            {site.team.map((member) => (
              <li key={member.name} className="card-surface p-6">
                <p className="text-xl font-semibold">{member.name}</p>
                <p className="mt-1 text-secondary">
                  {locale === "bn" ? member.roleBn : member.role}
                  {member.credential ? ` · ${member.credential}` : ""}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-secondary">
            {locale === "bn"
              ? "{{LICENCE_PROOF — IAB/IEB সদস্যপদ প্রমাণ মালিক সরবরাহ করবেন}}"
              : "{{LICENCE_PROOF — owner to supply IAB/IEB membership proof}}"}
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-text">
          <h2 className="headline-section !text-4xl">
            {locale === "bn" ? "মূল্যবোধ" : "Values"}
          </h2>
          <ul className="mt-8 space-y-4 text-secondary md:text-[19px]">
            <li>
              {locale === "bn"
                ? "সততা — দাম, পর্যালোচনা বা অভিজ্ঞতার বছর বানিয়ে বলি না।"
                : "Honesty — we do not invent prices, reviews or years of experience."}
            </li>
            <li>
              {locale === "bn"
                ? "সমন্বয় — স্থপতি, প্রকৌশলী ও নির্মাণ এক দলে।"
                : "Coordination — architect, engineer and construction in one team."}
            </li>
            <li>
              {locale === "bn"
                ? "স্পষ্টতা — থ্রিডি দিয়ে সিদ্ধান্ত সহজ করি।"
                : "Clarity — 3D visualization to make decisions easier."}
            </li>
          </ul>
        </div>
      </section>
      <CTA />
    </>
  );
}
