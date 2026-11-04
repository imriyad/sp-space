import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/content/services";
import { projects } from "@/content/projects";
import { getAllAreaSlugs } from "@/content/areas";
import { getAllPostSlugs } from "@/content/blog";
import { getSiteUrl } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const staticPaths = [
  "",
  "/services",
  "/projects",
  "/process",
  "/about",
  "/contact",
  "/blog",
  "/faq",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const paths = [
    ...staticPaths,
    ...getAllServiceSlugs().map((s) => `/services/${s}`),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...getAllAreaSlugs().map((s) => `/areas/${s}`),
    ...getAllPostSlugs().map((s) => `/blog/${s}`),
  ];

  return paths.flatMap((path) => {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = `${base}/${locale}${path}`;
    }
    languages["x-default"] = `${base}/en${path}`;

    return routing.locales.map((locale) => ({
      url: `${base}/${locale}${path}`,
      lastModified,
      alternates: { languages },
    }));
  });
}
