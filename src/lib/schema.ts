import { site, formatOfficeAddress, type Office } from "@/content/site";
import { publicAssetUrl, getSiteUrl, absoluteUrl } from "./seo";
import type { Locale } from "@/i18n/routing";
import type { FaqItem } from "@/content/faqs";

function officeToLocalBusiness(office: Office) {
  const base: Record<string, unknown> = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": `${getSiteUrl()}/#office-${office.id}`,
    name: `${site.name} — ${office.label}`,
    image: publicAssetUrl(site.defaultOgImage),
    url: getSiteUrl(),
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.street,
      addressLocality: office.area,
      addressRegion: office.district,
      postalCode: office.postalCode,
      addressCountry: office.country,
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    sameAs: [site.social.facebook].filter(Boolean),
    parentOrganization: { "@id": `${getSiteUrl()}/#organization` },
  };

  if (office.lat != null && office.lng != null) {
    base.geo = {
      "@type": "GeoCoordinates",
      latitude: office.lat,
      longitude: office.lng,
    };
  }

  if (site.hours) {
    base.openingHoursSpecification = site.hours;
  }

  return base;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${getSiteUrl()}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: getSiteUrl(),
    email: site.email,
    telephone: site.phone,
    logo: publicAssetUrl(site.logo),
    sameAs: [site.social.facebook, site.social.directorFacebook].filter(Boolean),
    address: site.offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.street,
      addressLocality: o.area,
      addressRegion: o.district,
      postalCode: o.postalCode,
      addressCountry: o.country,
    })),
    department: site.offices.map((o) => ({ "@id": `${getSiteUrl()}/#office-${o.id}` })),
  };
}

export function localBusinessSchemas() {
  return site.offices.map((office) => ({
    "@context": "https://schema.org",
    ...officeToLocalBusiness(office),
  }));
}

export function personSchemas() {
  return site.team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: `${member.role}${member.credential ? ` (${member.credential})` : ""}`,
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: getSiteUrl(),
    },
  }));
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    provider: { "@id": `${getSiteUrl()}/#organization` },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    url: absoluteUrl(input.locale, input.path),
  };
}

export function breadcrumbSchema(
  locale: Locale,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}

export function faqPageSchema(items: FaqItem[] | { question: { en: string; bn: string }; answer: { en: string; bn: string } }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer[locale],
      },
    })),
  };
}

export function blogPostingSchema(input: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  date: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    image: publicAssetUrl(input.image),
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: publicAssetUrl(site.logo),
      },
    },
    mainEntityOfPage: absoluteUrl(input.locale, input.path),
  };
}

export function officeAddressText(office: Office, locale: Locale): string {
  return formatOfficeAddress(office, locale);
}
