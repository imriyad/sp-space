/**
 * Single source of truth for SB Space business data.
 * Never invent prices, reviews, awards, years, or social URLs.
 * Empty arrays / empty strings hide related UI sections.
 */

export type Office = {
  id: "madhabdi" | "dhaka";
  label: string;
  labelBn: string;
  street: string;
  area: string;
  district: string;
  postalCode: string;
  country: "BD";
  /** Owner to supply — leave null until confirmed */
  lat: number | null;
  lng: number | null;
  mapQuery: string;
};

export type TeamMember = {
  name: string;
  role: string;
  roleBn: string;
  credential: string;
};

export type Stat = {
  value: string;
  labelEn: string;
  labelBn: string;
};

export const site = {
  name: "SB space design & construction",
  shortName: "SB Space",
  legalDescriptor:
    "Architectural Design | Structural Design | Interior Design | Construction | Animation | Steel Structure | 3D Visualization Firm",
  taglineBn: "নির্মাণে নতুন মাত্রা, স্বপ্ন হোক বাস্তব!",
  taglineEn: "A new dimension in construction. Let your dream become real.",
  ctaBn: "আপনার স্বপ্নের প্রজেক্ট বাস্তবায়নে আমাদের সাথে থাকুন",
  ctaEn: "Stay with us to bring your dream project to life.",
  differentiatorEn: "Design, engineering and construction under one roof.",
  differentiatorBn: "ডিজাইন, ইঞ্জিনিয়ারিং ও নির্মাণ—সব এক ছাদের নিচে।",
  description:
    "SB space design & construction is an architectural design, structural design, interior design, construction, animation, steel structure and 3D visualization firm with offices in Madhabdi (Narsingdi) and Mohammadpur (Dhaka).",
  email: "spacedesignsb@gmail.com",
  phone: "+8801703880891",
  phoneDisplay: "01703-880891",
  whatsapp: "+8801703880891",
  whatsappLink: "https://wa.me/8801703880891",
  director: {
    name: "Roman Pathan",
    role: "Director",
    roleBn: "পরিচালক",
    phone: "+8801676656563",
    phoneDisplay: "01676-656563",
  },
  team: [
    {
      name: "Md. Sarif Hossain Patoary",
      role: "Architect",
      roleBn: "স্থপতি",
      credential: "MIAB",
    },
    {
      name: "Md. Munir Hossain Patoary",
      role: "Engineer",
      roleBn: "প্রকৌশলী",
      credential: "MIEB",
    },
  ] as TeamMember[],
  offices: [
    {
      id: "madhabdi",
      label: "Madhabdi Office",
      labelBn: "মাধবদী অফিস",
      street: "217 & 218, Rhine OK Market, 2nd Floor, Birampur",
      area: "Madhabdi",
      district: "Narsingdi",
      postalCode: "1604",
      country: "BD",
      lat: null,
      lng: null,
      mapQuery:
        "Rhine OK Market, Birampur, Madhabdi, Narsingdi 1604, Bangladesh",
    },
    {
      id: "dhaka",
      label: "Dhaka Office",
      labelBn: "ঢাকা অফিস",
      street: "H#: 23/C (GF), R#: 11, P.C Culture Housing",
      area: "Mohammadpur",
      district: "Dhaka",
      postalCode: "1207",
      country: "BD",
      lat: null,
      lng: null,
      mapQuery:
        "P.C Culture Housing, Road 11, Mohammadpur, Dhaka 1207, Bangladesh",
    },
  ] as Office[],
  /** {{OPENING_HOURS — not provided yet}} */
  hours: "",
  serviceAreas: [
    "Narsingdi",
    "Madhabdi",
    "Dhaka",
    "Mohammadpur",
    "Uttara",
    // "{{OTHER_AREAS_THEY_SERVE}}" — add only confirmed areas
  ],
  social: {
    facebook: "https://www.facebook.com/sbdesignconstruction",
    directorFacebook: "https://www.facebook.com/roman.pathan.7",
    instagram: "",
    youtube: "",
    linkedin: "",
  },
  /**
   * Only show Stats when real numbers are supplied by the owner.
   * Leave empty to hide the Stats section.
   */
  stats: [] as Stat[],
  testimonials: [] as {
    quoteEn: string;
    quoteBn: string;
    author: string;
    role?: string;
  }[],
  logo: "/brand/logo.png",
  defaultOgImage: "/og/default.svg",
} as const;

export type Site = typeof site;

export function formatOfficeAddress(office: Office, locale: "en" | "bn" = "en"): string {
  if (locale === "bn") {
    return `${office.street}, ${office.area}, ${office.district} ${office.postalCode}`;
  }
  return `${office.street}, ${office.area}, ${office.district} ${office.postalCode}, Bangladesh`;
}

export function getOfficeById(id: Office["id"]): Office {
  const office = site.offices.find((o) => o.id === id);
  if (!office) throw new Error(`Unknown office: ${id}`);
  return office;
}

export function googleMapsEmbedUrl(office: Office): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`;
}

export function googleMapsLink(office: Office): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
