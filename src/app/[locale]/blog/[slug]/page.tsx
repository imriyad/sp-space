import { MediaImage as Image } from "@/components/MediaImage";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog";
import { getServiceBySlug } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadataWithPublicOg } from "@/lib/seo";
import { breadcrumbSchema, blogPostingSchema, faqPageSchema } from "@/lib/schema";
import { routing, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadataWithPublicOg({
    locale,
    path: `/blog/${slug}`,
    title: post.title[locale],
    description: post.description[locale],
    ogImage: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("common");
  const tn = await getTranslations("nav");
  const blocks = post.body[locale].split(/\n\n+/);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, [
            { name: tn("home"), path: "/" },
            { name: tn("blog"), path: "/blog" },
            { name: post.title[locale], path: `/blog/${slug}` },
          ]),
          blogPostingSchema({
            locale,
            title: post.title[locale],
            description: post.description[locale],
            path: `/blog/${slug}`,
            date: post.date,
            image: post.coverImage,
          }),
          ...(post.faqs.length
            ? [faqPageSchema(post.faqs.map((f, i) => ({ id: `${slug}-faq-${i}`, ...f })), locale)]
            : []),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("blog"), href: "/blog" },
          { label: post.title[locale] },
        ]}
      />

      <article className="bg-background">
        <div className="container-text py-10">
          <p className="text-sm text-secondary">
            {t("postedOn")} {post.date} · {t("readingTime", { minutes: post.readingMinutes })}
          </p>
          <h1 className="headline-section mt-4">{post.title[locale]}</h1>
          <p className="body-lg mt-4">{post.description[locale]}</p>
          <div className="card-surface relative mt-8 aspect-[16/9] overflow-hidden bg-bg-alt">
            <Image
              src={post.coverImage}
              alt={post.title[locale]}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 1024px"
            />
          </div>

          <div className="mt-12 space-y-6">
            {blocks.map((block) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={block} className="pt-4 text-3xl font-semibold tracking-tight">
                    {block.replace(/^##\s+/, "")}
                  </h2>
                );
              }
              return (
                <p key={block.slice(0, 40)} className="text-secondary md:text-[19px] leading-relaxed">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">{t("relatedServices")}</h2>
            <ul className="mt-4 flex flex-wrap gap-4">
              {post.relatedServices.map((s) => {
                const service = getServiceBySlug(s);
                if (!service) return null;
                return (
                  <li key={s}>
                    <Link href={`/services/${s}`} className="link-chevron">
                      {service.title[locale]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>

      {post.faqs.length > 0 ? (
        <FAQ
          items={post.faqs.map((f, i) => ({ id: `${slug}-faq-${i}`, ...f }))}
          locale={locale}
          title={t("faqTitle")}
        />
      ) : null}
      <CTA />
    </>
  );
}
