import { MediaImage as Image } from "@/components/MediaImage";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
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
    path: "/services",
    title:
      locale === "bn"
        ? "সেবাসমূহ — ডিজাইন, ইঞ্জিনিয়ারিং ও নির্মাণ | এসবি স্পেস"
        : "Services — Design, Engineering & Construction | SB Space",
    description:
      locale === "bn"
        ? "স্থাপত্য, কাঠামো, ইন্টেরিয়র, নির্মাণ, স্টিল স্ট্রাকচার, থ্রিডি ও অ্যানিমেশন—নরসিংদী ও ঢাকায়।"
        : "Architectural design, structural design, interiors, construction, steel structure, 3D and animation in Narsingdi and Dhaka.",
  });
}

export default async function ServicesPage({ params }: Props) {
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
          { name: tn("services"), path: "/services" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("services") },
        ]}
      />
      <section className="section-pad !pt-8 bg-background">
        <div className="container-media">
          <h1 className="headline-section max-w-4xl">
            {locale === "bn"
              ? "নরসিংদী ও ঢাকায় সম্পূর্ণ ডিজাইন ও নির্মাণ সেবা"
              : "Complete design and construction services in Narsingdi & Dhaka"}
          </h1>
          <p className="body-lg mt-5 max-w-3xl">
            {locale === "bn"
              ? "ডিজাইন, ইঞ্জিনিয়ারিং ও নির্মাণ এক ছাদের নিচে—স্থপতি (MIAB) ও প্রকৌশলী (MIEB) ইন-হাউস।"
              : "Design, engineering and construction under one roof—with an in-house architect (MIAB) and engineer (MIEB)."}
          </p>

          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card-surface flex h-full flex-col bg-bg-alt"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.title[locale]}
                      fill
                      className="img-zoom object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-2xl font-semibold">{service.title[locale]}</h2>
                    <p className="mt-2 flex-1 text-secondary">
                      {service.shortDescription[locale]}
                    </p>
                    <span className="link-chevron mt-4">{t("learnMore")}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </>
  );
}
