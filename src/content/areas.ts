import type { Office } from "./site";

export type AreaPage = {
  slug: string;
  name: { en: string; bn: string };
  nearestOfficeId: Office["id"];
  primaryKeyword: { en: string; bn: string };
  seo: {
    title: { en: string; bn: string };
    description: { en: string; bn: string };
  };
  intro: { en: string; bn: string };
  body: { en: string; bn: string };
  relatedProjectSlugs: string[];
  relatedServiceSlugs: string[];
};

export const areas: AreaPage[] = [
  {
    slug: "narsingdi",
    name: { en: "Narsingdi", bn: "নরসিংদী" },
    nearestOfficeId: "madhabdi",
    primaryKeyword: {
      en: "interior design company in Narsingdi",
      bn: "নরসিংদীতে ইন্টেরিয়র ডিজাইন",
    },
    seo: {
      title: {
        en: "Interior Design & Construction in Narsingdi | SB Space",
        bn: "নরসিংদীতে ইন্টেরিয়র ডিজাইন ও নির্মাণ | এসবি স্পেস",
      },
      description: {
        en: "SB Space — architectural design, interior design and construction serving Narsingdi from our Madhabdi office.",
        bn: "এসবি স্পেস — মাধবদী অফিস থেকে নরসিংদীতে স্থাপত্য, ইন্টেরিয়র ও নির্মাণ সেবা।",
      },
    },
    intro: {
      en: "Looking for an interior design company in Narsingdi—or an architect and construction partner who also understands structure? SB Space serves Narsingdi from our Madhabdi office with design, engineering and construction under one roof.",
      bn: "নরসিংদীতে ইন্টেরিয়র ডিজাইন কোম্পানি—বা কাঠামো বোঝেন এমন স্থপতি ও নির্মাণ পার্টনার খুজছেন? এসবি স্পেস মাধবদী অফিস থেকে নরসিংদীতে ডিজাইন, ইঞ্জিনিয়ারিং ও নির্মাণ এক ছাদের নিচে দেয়।",
    },
    body: {
      en: `Narsingdi homeowners and businesses often need a local team that can move from building design to interior finishing without losing context. Our Madhabdi office at Rhine OK Market puts us close to clients across Narsingdi for consultations, site visits and project coordination.

We provide architectural design, structural design by an in-house MIEB engineer, interior design, construction, steel structure support and 3D visualization. Whether you are planning a home, a shop or a clinic-style commercial interior, we start with a clear brief and keep communication straightforward.

Search phrases like “architect in Narsingdi”, “building design Narsingdi” and “construction company in Narsingdi” describe what we do every day: practical design that can be built. Visit our Madhabdi office or call for a free consultation.`,
      bn: `নরসিংদীর বাড়িওয়ালা ও ব্যবসায়ীরা প্রায়ই এমন স্থানীয় দল চান যারা ভবন নকশা থেকে ইন্টেরিয়র ফিনিশিং পর্যন্ত প্রসঙ্গ না হারিয়ে কাজ করতে পারে। রাইন ওকে মার্কেটের মাধবদী অফিস নরসিংদী জুড়ে পরামর্শ, সাইট ভিজিট ও সমন্বয়ের জন্য কাছাকাছি।

আমরা স্থাপত্য নকশা, ইন-হাউস MIEB প্রকৌশলীর কাঠামো নকশা, ইন্টেরিয়র, নির্মাণ, স্টিল স্ট্রাকচার ও থ্রিডি ভিজুয়ালাইজেশন দিই। বাড়ি, দোকান বা ক্লিনিক-ধরনের বাণিজ্যিক ইন্টেরিয়র—স্পষ্ট ব্রিফ দিয়ে শুরু করি। মাধবদী অফিসে আসুন বা ফ্রি পরামর্শের জন্য কল করুন।`,
    },
    relatedProjectSlugs: ["placeholder-residential-madhabdi"],
    relatedServiceSlugs: [
      "architectural-design",
      "interior-design",
      "construction",
    ],
  },
  {
    slug: "madhabdi",
    name: { en: "Madhabdi", bn: "মাধবদী" },
    nearestOfficeId: "madhabdi",
    primaryKeyword: {
      en: "interior design Madhabdi",
      bn: "মাধবদী ইন্টেরিয়র ডিজাইন",
    },
    seo: {
      title: {
        en: "Architect & Interior Design in Madhabdi | SB Space",
        bn: "মাধবদীতে আর্কিটেক্ট ও ইন্টেরিয়র ডিজাইন | এসবি স্পেস",
      },
      description: {
        en: "Visit SB Space in Madhabdi, Narsingdi for architectural design, interiors and construction—Rhine OK Market office.",
        bn: "মাধবদী, নরসিংদীতে এসবি স্পেস—রাইন ওকে মার্কেট অফিসে স্থাপত্য, ইন্টেরিয়র ও নির্মাণ।",
      },
    },
    intro: {
      en: "SB Space’s Madhabdi office is our home base in Narsingdi—built for neighbours who want an architect in Madhabdi, interior design and construction without travelling to Dhaka for every meeting.",
      bn: "এসবি স্পেসের মাধবদী অফিস নরসিংদীতে আমাদের মূল ঘাঁটি—মাধবদীতে স্থপতি, ইন্টেরিয়র ও নির্মাণ চান এমন প্রতিবেশীদের জন্য, প্রতিটি মিটিংয়ে ঢাকা যেতে হয় না।",
    },
    body: {
      en: `Our Madhabdi office is at 217 & 218, Rhine OK Market, 2nd Floor, Birampur, Madhabdi, Narsingdi 1604. From here we support residential and commercial projects with architectural design, structural engineering, interiors, construction and 3D visualization.

Madhabdi clients benefit from quick site access and a team that already understands local building patterns. If you are comparing an interior designer in Madhabdi or a construction company Madhabdi option, ask about our design-and-build path: one team from concept through handover.

Call 01703-880891 or message us on WhatsApp to book a consultation at the Madhabdi office.`,
      bn: `আমাদের মাধবদী অফিস: ২১৭ ও ২১৮, রাইন ওকে মার্কেট, দ্বিতীয় তলা, বিরামপুর, মাধবদী, নরসিংদী ১৬০৪। এখান থেকে স্থাপত্য, কাঠামো, ইন্টেরিয়র, নির্মাণ ও থ্রিডি নিয়ে আবাসিক ও বাণিজ্যিক প্রজেক্ট সাপোর্ট করি।

০১৭০৩-৮৮০৮৯১-এ কল করুন বা হোয়াটসঅ্যাপে মেসেজ দিয়ে মাধবদী অফিসে পরামর্শ বুক করুন।`,
    },
    relatedProjectSlugs: ["placeholder-residential-madhabdi"],
    relatedServiceSlugs: [
      "architectural-design",
      "structural-design",
      "construction",
    ],
  },
  {
    slug: "mohammadpur",
    name: { en: "Mohammadpur", bn: "মোহাম্মদপুর" },
    nearestOfficeId: "dhaka",
    primaryKeyword: {
      en: "interior design in Mohammadpur",
      bn: "মোহাম্মদপুরে ইন্টেরিয়র ডিজাইন",
    },
    seo: {
      title: {
        en: "Interior Design in Mohammadpur, Dhaka | SB Space",
        bn: "মোহাম্মদপুর, ঢাকায় ইন্টেরিয়র ডিজাইন | এসবি স্পেস",
      },
      description: {
        en: "SB Space Dhaka office in Mohammadpur—interior design, architecture and construction for Dhaka clients.",
        bn: "মোহাম্মদপুরে এসবি স্পেস ঢাকা অফিস—ঢাকা ক্লায়েন্টদের জন্য ইন্টেরিয়র, স্থাপত্য ও নির্মাণ।",
      },
    },
    intro: {
      en: "Our Dhaka office in Mohammadpur serves clients who need interior design in Mohammadpur and across the city—backed by in-house architecture and structural engineering.",
      bn: "মোহাম্মদপুরের ঢাকা অফিস থেকে মোহাম্মদপুরসহ শহরজুড়ে ইন্টেরিয়র ডিজাইন—ইন-হাউস স্থাপত্য ও কাঠামো প্রকৌশলসহ।",
    },
    body: {
      en: `Find us at H#: 23/C (GF), R#: 11, P.C Culture Housing, Mohammadpur, Dhaka 1207. From this office we deliver apartment and office interiors, architectural design, structural coordination, construction support and 3D visualization for Dhaka projects.

Mohammadpur is a practical base for meetings while we also serve nearby neighbourhoods. If you want a design and construction company in Dhaka that can handle structure—not only finishes—SB Space connects architect (MIAB), engineer (MIEB) and builders in one workflow.

Book a visit to the Mohammadpur office or start with a call to 01703-880891.`,
      bn: `ঠিকানা: বাড়ি ২৩/সি (জিএফ), রোড ১১, পি.সি কালচার হাউজিং, মোহাম্মদপুর, ঢাকা ১২০৭। এখান থেকে অ্যাপার্টমেন্ট ও অফিস ইন্টেরিয়র, স্থাপত্য, কাঠামো সমন্বয়, নির্মাণ সহায়তা ও থ্রিডি দিই।

০১৭০৩-৮৮০৮৯১-এ কল করে মোহাম্মদপুর অফিসে ভিজিট বুক করুন।`,
    },
    relatedProjectSlugs: ["dental-clinic-interior-uttara"],
    relatedServiceSlugs: ["interior-design", "architectural-design", "construction"],
  },
  {
    slug: "uttara",
    name: { en: "Uttara", bn: "উত্তরা" },
    nearestOfficeId: "dhaka",
    primaryKeyword: {
      en: "interior design in Uttara",
      bn: "উত্তরায় ইন্টেরিয়র ডিজাইন",
    },
    seo: {
      title: {
        en: "Interior Design in Uttara, Dhaka | SB Space",
        bn: "উত্তরা, ঢাকায় ইন্টেরিয়র ডিজাইন | এসবি স্পেস",
      },
      description: {
        en: "Interior design and clinic interiors in Uttara, Dhaka—served from SB Space’s Mohammadpur office with 3D visualization.",
        bn: "উত্তরা, ঢাকায় ইন্টেরিয়র ও ক্লিনিক ইন্টেরিয়র—এসবি স্পেসের মোহাম্মদপুর অফিস থেকে থ্রিডিসহ।",
      },
    },
    intro: {
      en: "Uttara clients come to SB Space for apartment interiors, commercial spaces and specialized work such as dental clinic interior design in Dhaka—supported from our Mohammadpur office.",
      bn: "উত্তরার ক্লায়েন্টরা অ্যাপার্টমেন্ট ইন্টেরিয়র, বাণিজ্যিক স্পেস এবং ঢাকায় ডেন্টাল ক্লিনিক ইন্টেরিয়রের মতো বিশেষ কাজের জন্য এসবি স্পেসে আসেন—মোহাম্মদপুর অফিস থেকে সাপোর্ট।",
    },
    body: {
      en: `Uttara’s mix of residences and commercial clinics needs interiors that work hard: clear circulation, durable materials and a calm atmosphere. Our portfolio includes a dental clinic interior in Uttara, and we apply the same planning discipline to homes and offices.

From space planning and 3D visualization through optional construction and finishing, we keep one team accountable. Meet us at the Mohammadpur Dhaka office or request a site visit in Uttara.

Call 01703-880891 or WhatsApp to discuss your Uttara project.`,
      bn: `উত্তরার আবাসিক ও বাণিজ্যিক ক্লিনিক মিশ্রণে এমন ইন্টেরিয়র লাগে যা সত্যিই কাজ করে: স্পষ্ট চলাচল, টেকসই উপকরণ ও শান্ত পরিবেশ। আমাদের পোর্টফোলিওতে উত্তরার ডেন্টাল ক্লিনিক ইন্টেরিয়র আছে।

মোহাম্মদপুর অফিসে দেখা করুন বা উত্তরায় সাইট ভিজিট চান। ০১৭০৩-৮৮০৮৯১ বা হোয়াটসঅ্যাপে যোগাযোগ করুন।`,
    },
    relatedProjectSlugs: ["dental-clinic-interior-uttara"],
    relatedServiceSlugs: ["interior-design", "3d-visualization", "construction"],
  },
];

export function getAreaBySlug(slug: string): AreaPage | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return areas.map((a) => a.slug);
}
