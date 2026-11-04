import { setRequestLocale, getTranslations } from "next-intl/server";
import { getPublishedProjects, projectFilters } from "@/content/projects";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale: loc } = await params;
  const locale = loc as Locale;
  return buildMetadataWithPublicOg({
    locale,
    path: "/projects",
    title:
      locale === "bn"
        ? "প্রজেক্ট পোর্টফোলিও | এসবি স্পেস"
        : "Projects Portfolio | SB Space",
    description:
      locale === "bn"
        ? "ঢাকা ও নরসিংদীতে ইন্টেরিয়র, স্থাপত্য ও নির্মাণ প্রজেক্ট—এসবি স্পেস পোর্টফোলিও।"
        : "Interior, architecture and construction projects across Dhaka and Narsingdi — SB Space portfolio.",
  });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("common");
  const tn = await getTranslations("nav");
  const projects = getPublishedProjects();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("home"), path: "/" },
          { name: tn("projects"), path: "/projects" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("projects") },
        ]}
      />
      <section className="section-pad !pt-8 bg-background">
        <div className="container-media">
          <h1 className="headline-section">
            {locale === "bn" ? "আমাদের প্রজেক্ট" : "Our projects"}
          </h1>
          <p className="body-lg mt-4 max-w-3xl">
            {locale === "bn"
              ? "বাস্তব ছবি ও পরিমাপ মালিক সরবরাহ করলে আপডেট হবে। প্লেসহোল্ডারগুলো স্পষ্টভাবে চিহ্নিত।"
              : "Real photos and measurements will be updated when supplied. Placeholder cards are clearly labelled."}
          </p>

          <div className="mt-8">
            <ProjectsFilter
              filters={projectFilters}
              locale={locale}
              projects={projects}
              placeholderLabel={t("placeholderProject")}
            />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
