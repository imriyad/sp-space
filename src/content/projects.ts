export type ProjectCategory =
  | "residential"
  | "commercial"
  | "office"
  | "restaurant"
  | "construction"
  | "renovation"
  | "clinic";

export type Project = {
  slug: string;
  title: { en: string; bn: string };
  location: { en: string; bn: string };
  type: { en: string; bn: string };
  category: ProjectCategory;
  coverImage: string;
  gallery: string[];
  /** Placeholder until owner supplies real figures */
  areaSqFt: string | null;
  year: string | null;
  duration: string | null;
  overview: { en: string; bn: string };
  clientNeed: { en: string; bn: string };
  solution: { en: string; bn: string };
  result: { en: string; bn: string };
  relatedServices: string[];
  isPlaceholder: boolean;
};

export const projects: Project[] = [
  {
    slug: "dental-clinic-interior-uttara",
    title: {
      en: "Dental Clinic Interior",
      bn: "ডেন্টাল ক্লিনিক ইন্টেরিয়র",
    },
    location: { en: "Uttara, Dhaka", bn: "উত্তরা, ঢাকা" },
    type: {
      en: "Interior Design (Clinic)",
      bn: "ইন্টেরিয়র ডিজাইন (ক্লিনিক)",
    },
    category: "clinic",
    coverImage: "/images/projects/dental-clinic-uttara/00-cover-reception.png",
    gallery: [
      "/images/projects/dental-clinic-uttara/00-cover-reception.png",
      "/images/projects/dental-clinic-uttara/01-reception-waiting.jpg",
      "/images/projects/dental-clinic-uttara/02-reception-desk-area.jpg",
      "/images/projects/dental-clinic-uttara/03-operatory-teal.jpg",
      "/images/projects/dental-clinic-uttara/04-sterilization-cabinetry.jpg",
      "/images/projects/dental-clinic-uttara/05-operatory-maroon.jpg",
      "/images/projects/dental-clinic-uttara/06-yellow-clock-shelving.jpg",
      "/images/projects/dental-clinic-uttara/07-reception-branding.jpg",
      "/images/projects/dental-clinic-uttara/08-hallway-ot-zone.jpg",
    ],
    areaSqFt: null, // {{AREA_SQ_FT — owner to supply}}
    year: null, // {{YEAR — owner to supply}}
    duration: null, // {{DURATION — owner to supply}}
    overview: {
      en: "A completed dental clinic interior in Uttara for Family Care Dental Zone—reception, waiting, consultation, OT and sterilization zones planned for clear patient flow and a calm clinical atmosphere.",
      bn: "উত্তরায় ফ্যামিলি কেয়ার ডেন্টাল জোনের সম্পন্ন ডেন্টাল ক্লিনিক ইন্টেরিয়র—রিসেপশন, ওয়েটিং, কনসালটেশন, ওটি ও স্টেরিলাইজেশন জোন; রোগীর চলাচল ও শান্ত ক্লিনিকাল পরিবেশকে কেন্দ্র করে।",
    },
    clientNeed: {
      en: "Create a functional dental clinic interior that supports treatment workflows and feels welcoming to patients in Uttara, Dhaka.",
      bn: "উত্তরা, ঢাকায় রোগীদের স্বাগতম জানায় এবং ট্রিটমেন্ট ওয়ার্কফ্লো সাপোর্ট করে এমন কার্যকর ডেন্টাল ক্লিনিক ইন্টেরিয়র।",
    },
    solution: {
      en: "Space planning for reception, waiting and treatment areas with material and lighting choices suited to a clinical environment—developed with 3D visualization before execution.",
      bn: "রিসেপশন, ওয়েটিং ও ট্রিটমেন্ট এরিয়ার স্পেস প্ল্যানিং; ক্লিনিকাল পরিবেশের উপযোগী ম্যাটেরিয়াল ও আলো—এক্সিকিউশনের আগে থ্রিডি ভিজুয়ালাইজেশনসহ।",
    },
    result: {
      en: "A finished clinic interior with branded reception, treatment rooms, consultation space and support zones—ready for daily dental practice in Uttara.",
      bn: "ব্র্যান্ডেড রিসেপশন, ট্রিটমেন্ট রুম, কনসালটেশন ও সাপোর্ট জোনসহ সম্পূর্ণ ক্লিনিক ইন্টেরিয়র—উত্তরায় দৈনন্দিন ডেন্টাল প্র্যাকটিসের জন্য প্রস্তুত।",
    },
    relatedServices: ["interior-design", "3d-visualization"],
    isPlaceholder: false,
  },
  {
    slug: "apartment-interior-velanagar",
    title: {
      en: "Apartment Interior",
      bn: "অ্যাপার্টমেন্ট ইন্টেরিয়র",
    },
    location: { en: "Velanagar, Narsingdi", bn: "ভেলানগর, নরসিংদী" },
    type: {
      en: "Interior Design (Residential)",
      bn: "ইন্টেরিয়র ডিজাইন (আবাসিক)",
    },
    category: "residential",
    coverImage: "/images/projects/apartment-interior-velanagar/00-cover-living-room.jpg",
    gallery: [
      "/images/projects/apartment-interior-velanagar/00-cover-living-room.jpg",
      "/images/projects/apartment-interior-velanagar/01-bedroom-wardrobe.jpg",
      "/images/projects/apartment-interior-velanagar/02-dining-buffet.jpg",
      "/images/projects/apartment-interior-velanagar/03-entryway.jpg",
      "/images/projects/apartment-interior-velanagar/04-bedroom-feature-wall.jpg",
      "/images/projects/apartment-interior-velanagar/05-kitchen.jpg",
    ],
    areaSqFt: null,
    year: null,
    duration: null,
    overview: {
      en: "A completed apartment interior in Velanagar, Narsingdi—living room, bedrooms, dining, kitchen and entry finishes coordinated for a warm contemporary home.",
      bn: "ভেলানগর, নরসিংদীতে সম্পন্ন অ্যাপার্টমেন্ট ইন্টেরিয়র—লিভিং রুম, বেডরুম, ডাইনিং, কিচেন ও এন্ট্রি; উষ্ণ সমসাময়িক বাড়ির জন্য সমন্বিত ফিনিশিং।",
    },
    clientNeed: {
      en: "Design and execute a full apartment interior that feels cohesive across living, sleeping, dining and kitchen spaces in Velanagar, Narsingdi.",
      bn: "ভেলানগর, নরসিংদীতে লিভিং, শোবার ঘর, ডাইনিং ও কিচেন জুড়ে সামঞ্জস্যপূর্ণ পূর্ণাঙ্গ অ্যাপার্টমেন্ট ইন্টেরিয়র।",
    },
    solution: {
      en: "Custom cabinetry, feature walls, lighting and material selections tailored room by room—from the TV living wall and bedroom wardrobe to the kitchen and dining buffet.",
      bn: "কাস্টম ক্যাবিনেটরি, ফিচার ওয়াল, আলো ও ম্যাটেরিয়াল—টিভি লিভিং ওয়াল ও বেডরুম ওয়্যারড্রোব থেকে কিচেন ও ডাইনিং বাফে পর্যন্ত ঘরভিত্তিক সমাধান।",
    },
    result: {
      en: "A finished residential interior with distinct living, bedroom, dining, kitchen and entry zones ready for daily family life in Velanagar.",
      bn: "লিভিং, বেডরুম, ডাইনিং, কিচেন ও এন্ট্রি জোনসহ সম্পূর্ণ আবাসিক ইন্টেরিয়র—ভেলানগরে দৈনন্দিন পারিবারিক জীবনের জন্য প্রস্তুত।",
    },
    relatedServices: ["interior-design", "3d-visualization"],
    isPlaceholder: false,
  },
  // Additional portfolio slots — hidden from “featured” until real photos exist
  {
    slug: "placeholder-residential-madhabdi",
    title: {
      en: "Residential Design — Madhabdi",
      bn: "আবাসিক নকশা — মাধবদী",
    },
    location: { en: "Madhabdi, Narsingdi", bn: "মাধবদী, নরসিংদী" },
    type: { en: "Architectural Design", bn: "স্থাপত্য নকশা" },
    category: "residential",
    coverImage: "/images/placeholder-architectural.svg",
    gallery: ["/images/placeholder-architectural.svg"],
    areaSqFt: null,
    year: null,
    duration: null,
    overview: {
      en: "Placeholder project card for a Madhabdi residential design. Replace with a real project when photos and captions are supplied.",
      bn: "মাধবদীর আবাসিক নকশার প্লেসহোল্ডার কার্ড। ছবি ও ক্যাপশন এলে আসল প্রজেক্ট দিয়ে বদলান।",
    },
    clientNeed: {
      en: "{{CLIENT_NEED — owner to supply}}",
      bn: "{{CLIENT_NEED — মালিক সরবরাহ করবেন}}",
    },
    solution: {
      en: "{{SOLUTION — owner to supply}}",
      bn: "{{SOLUTION — মালিক সরবরাহ করবেন}}",
    },
    result: {
      en: "{{RESULT — owner to supply}}",
      bn: "{{RESULT — মালিক সরবরাহ করবেন}}",
    },
    relatedServices: ["architectural-design", "construction"],
    isPlaceholder: true,
  },
];

/** Projects safe to show in public galleries (include placeholders with clear labelling). */
export function getPublishedProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(
    (p) =>
      p.slug === "dental-clinic-interior-uttara" ||
      p.slug === "apartment-interior-velanagar",
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory | "all"): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export const projectFilters: { id: ProjectCategory | "all"; label: { en: string; bn: string } }[] =
  [
    { id: "all", label: { en: "All", bn: "সব" } },
    { id: "residential", label: { en: "Residential", bn: "আবাসিক" } },
    { id: "commercial", label: { en: "Commercial", bn: "বাণিজ্যিক" } },
    { id: "office", label: { en: "Office", bn: "অফিস" } },
    { id: "restaurant", label: { en: "Restaurant/Café", bn: "রেস্তোরাঁ/ক্যাফে" } },
    { id: "clinic", label: { en: "Clinic", bn: "ক্লিনিক" } },
    { id: "construction", label: { en: "Construction", bn: "নির্মাণ" } },
    { id: "renovation", label: { en: "Renovation", bn: "সংস্কার" } },
  ];
