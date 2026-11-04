import { MediaImage as Image } from "@/components/MediaImage";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/content/blog";
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
    path: "/blog",
    title:
      locale === "bn"
        ? "ব্লগ — ডিজাইন ও নির্মাণ গাইড | এসবি স্পেস"
        : "Blog — Design & Construction Guides | SB Space",
    description:
      locale === "bn"
        ? "নরসিংদী ও ঢাকায় নির্মাণ খরচ, স্থপতি নির্বাচন, কাঠামো ও ইন্টেরিয়র নিয়ে গাইড।"
        : "Guides on construction cost, choosing an architect, structure and interiors in Narsingdi and Dhaka.",
  });
}

export default async function BlogPage({ params }: Props) {
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
          { name: tn("blog"), path: "/blog" },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("blog") },
        ]}
      />
      <section className="section-pad !pt-8 bg-background">
        <div className="container-media">
          <h1 className="headline-section">
            {locale === "bn" ? "ব্লগ ও গাইড" : "Blog & guides"}
          </h1>
          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group card-surface block bg-bg-alt">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title[locale]}
                      fill
                      className="img-zoom object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-secondary">
                      {t("postedOn")} {post.date} ·{" "}
                      {t("readingTime", { minutes: post.readingMinutes })}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">{post.title[locale]}</h2>
                    <p className="mt-2 text-secondary">{post.description[locale]}</p>
                    <span className="link-chevron mt-4 inline-block">{t("learnMore")}</span>
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
