import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

const siteUrl = () =>
  (process.env.NEXT_PUBLIC_SITE_URL || "https://www.sbspacebd.com").replace(
    /\/$/,
    "",
  );

export function getSiteUrl(): string {
  return siteUrl();
}

export function localizedPath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

export function absoluteUrl(locale: Locale, path = ""): string {
  return `${siteUrl()}${localizedPath(locale, path)}`;
}

type BuildMetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
  noIndex,
}: BuildMetaInput): Metadata {
  const canonical = absoluteUrl(locale, path);
  const en = absoluteUrl("en", path);
  const bn = absoluteUrl("bn", path);
  const image = ogImage || site.defaultOgImage;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en,
        bn,
        "x-default": en,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: [{ url: absoluteUrl(locale, image.replace(/^\//, "")), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(locale, image.replace(/^\//, ""))],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

/** Fix OG image URLs that point at public assets */
export function publicAssetUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl()}${clean}`;
}

export function buildMetadataWithPublicOg(input: BuildMetaInput): Metadata {
  const meta = buildMetadata(input);
  const image = input.ogImage || site.defaultOgImage;
  const url = publicAssetUrl(image);
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      images: [{ url, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      ...meta.twitter,
      images: [url],
    },
  };
}
