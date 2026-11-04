export type BlogPost = {
  slug: string;
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  date: string;
  readingMinutes: number;
  coverImage: string;
  tags: string[];
  relatedServices: string[];
  relatedAreas: string[];
  body: { en: string; bn: string };
  faqs: { question: { en: string; bn: string }; answer: { en: string; bn: string } }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-construction-cost-narsingdi-2026",
    title: {
      en: "Building Construction Cost in Narsingdi (2026 Guide)",
      bn: "নরসিংদীতে বিল্ডিং কনস্ট্রাকশন খরচ (২০২৬ গাইড)",
    },
    description: {
      en: "What drives building construction cost in Narsingdi—and how to plan a realistic budget with design and structure aligned.",
      bn: "নরসিংদীতে বিল্ডিং কনস্ট্রাকশন খরচ কী নির্ধারণ করে—এবং নকশা ও কাঠামো মিলিয়ে বাস্তবসম্মত বাজেট কীভাবে পরিকল্পনা করবেন।",
    },
    date: "2026-01-15",
    readingMinutes: 8,
    coverImage: "/images/placeholder-construction.svg",
    tags: ["construction", "narsingdi", "budget"],
    relatedServices: ["construction", "architectural-design", "structural-design"],
    relatedAreas: ["narsingdi", "madhabdi"],
    body: {
      en: `## Why construction cost varies in Narsingdi

Building construction cost in Narsingdi depends on plot conditions, building size, structural system (RCC or steel), finish level and whether you already have coordinated architectural and structural drawings. Two homes of similar floor area can differ widely if one uses premium finishes or needs deeper foundations.

## Design before you price materials

A practical budget starts with a clear brief and drawings. When architectural design and structural design are coordinated early, you reduce wasteful changes during construction. SB Space works from our Madhabdi office to help Narsingdi clients align concept, structure and build planning before major spending.

## What to ask in a consultation

Bring your plot details, approximate floor count, intended use and a budget range. Ask how design-and-build differs from hiring separate contractors. We do not publish fixed per-square-foot prices here because rates and scopes change—and inventing numbers would mislead you.

## Next step

Visit our Madhabdi office or call for a free consultation. We will outline process steps and the information needed for a tailored estimate.`,
      bn: `## নরসিংদীতে নির্মাণ খরচ কেন আলাদা হয়

নরসিংদীতে বিল্ডিং কনস্ট্রাকশন খরচ নির্ভর করে প্লটের অবস্থা, ভবনের আয়তন, কাঠামো ব্যবস্থা (RCC বা স্টিল), ফিনিশ লেভেল এবং সমন্বিত স্থাপত্য ও কাঠামো অঙ্কন আছে কিনা—তার উপর।

## উপকরণের দাম দেওয়ার আগে নকশা

বাস্তবসম্মত বাজেট শুরু হয় স্পষ্ট ব্রিফ ও অঙ্কন দিয়ে। স্থাপত্য ও কাঠামো নকশা আগে মিললে নির্মাণকালে অপচয় কমে। এসবি স্পেস মাধবদী অফিস থেকে নরসিংদী ক্লায়েন্টদের সাহায্য করে।

## পরামর্শে কী জানতে হবে

প্লটের তথ্য, আনুমানিক তলা, ব্যবহার ও বাজেট রেঞ্জ নিয়ে আসুন। আমরা এখানে নির্দিষ্ট প্রতি বর্গফুট দাম প্রকাশ করি না—স্কোপ না বুঝে সংখ্যা বানানো বিভ্রান্তিকর।

## পরবর্তী ধাপ

মাধবদী অফিসে আসুন বা ফ্রি পরামর্শের জন্য কল করুন।`,
    },
    faqs: [
      {
        question: {
          en: "Can you give a construction cost without drawings?",
          bn: "অঙ্কন ছাড়া কি নির্মাণ খরচ বলা যায়?",
        },
        answer: {
          en: "Only as a rough discussion. A responsible estimate needs scope, drawings or a measured brief.",
          bn: "শুধু মোটামুটি আলোচনা হিসেবে। দায়িত্বশীল অনুমানে স্কোপ, অঙ্কন বা মাপা ব্রিফ লাগে।",
        },
      },
    ],
  },
  {
    slug: "how-to-choose-architect-narsingdi",
    title: {
      en: "How to Choose an Architect in Narsingdi",
      bn: "নরসিংদীতে আর্কিটেক্ট কীভাবে বেছে নেবেন",
    },
    description: {
      en: "A practical checklist for hiring an architect in Narsingdi—credentials, process and design-to-build fit.",
      bn: "নরসিংদীতে স্থপতি নিয়োগের ব্যবহারিক চেকলিস্ট—যোগ্যতা, প্রক্রিয়া ও ডিজাইন-টু-বিল্ড মিল।",
    },
    date: "2026-02-01",
    readingMinutes: 7,
    coverImage: "/images/placeholder-architectural.svg",
    tags: ["architecture", "narsingdi"],
    relatedServices: ["architectural-design", "structural-design"],
    relatedAreas: ["narsingdi", "madhabdi"],
    body: {
      en: `## Look for credentials and coordination

When you search for an architect in Narsingdi, ask who leads design and whether structural engineering is coordinated in-house. At SB Space, architectural design is led by Md. Sarif Hossain Patoary (MIAB), working with Engineer Md. Munir Hossain Patoary (MIEB).

## Ask about process, not only pretty pictures

A strong architect explains consultation, concept, drawings and how decisions move to site. 3D visualization helps families align early. If you also need construction, a design-and-build team can reduce handoff gaps.

## Visit a local office

Our Madhabdi office serves Narsingdi clients who want face-to-face clarity. Bring your plot documents and priorities—light, privacy, budget and timeline flexibility.`,
      bn: `## যোগ্যতা ও সমন্বয় দেখুন

নরসিংদীতে স্থপতি খুজলে জানুন কে নকশা নেতৃত্ব দেন এবং কাঠামো প্রকৌশল ইন-হাউস সমন্বিত কিনা। এসবি স্পেসে স্থাপত্য নকশা করেন মো. সরিফ হোসেন পাটোয়ারী (MIAB)।

## শুধু সুন্দর ছবি নয়—প্রক্রিয়া জানুন

ভালো স্থপতি পরামর্শ, ধারণা, অঙ্কন এবং সাইটে সিদ্ধান্ত কীভাবে যায় তা ব্যাখ্যা করেন। মাধবদী অফিসে এসে প্লটের কাগজপত্র ও অগ্রাধিকার নিয়ে আলোচনা করুন।`,
    },
    faqs: [
      {
        question: {
          en: "Do I need a structural engineer as well as an architect?",
          bn: "স্থপতির পাশাপাশি কি কাঠামো প্রকৌশলীও লাগবে?",
        },
        answer: {
          en: "For most buildings, yes. Coordinating both early prevents conflicts between layout and structure.",
          bn: "বেশিরভাগ ভবনের জন্য হ্যাঁ। দুটো আগে মিলালে লেআউট ও কাঠামোর দ্বন্দ্ব কমে।",
        },
      },
    ],
  },
  {
    slug: "why-structural-design-matters",
    title: {
      en: "Why Structural Design Matters Before Construction",
      bn: "নির্মাণের আগে কাঠামো নকশা কেন জরুরি",
    },
    description: {
      en: "How structural design protects safety, budget and buildability—before you pour concrete or raise steel.",
      bn: "কংক্রিট ঢালার বা স্টিল তোলার আগে কাঠামো নকশা কীভাবে নিরাপত্তা, বাজেট ও নির্মাণযোগ্যতা রক্ষা করে।",
    },
    date: "2026-02-20",
    readingMinutes: 6,
    coverImage: "/images/placeholder-structural.svg",
    tags: ["structural", "safety"],
    relatedServices: ["structural-design", "construction", "steel-structure"],
    relatedAreas: ["narsingdi", "dhaka"],
    body: {
      en: `## Structure is not an afterthought

Architectural beauty means little if beams, columns and foundations fight the layout. Structural design sizes members, defines load paths and keeps construction sequences realistic.

## In-house engineering helps

When your structural engineer sits with your architect—as at SB Space with an MIEB engineer in-house—changes are discussed before they become expensive site problems.

## RCC or steel

The right system depends on spans, use and schedule. We help you compare options for sheds, homes and commercial frames without inventing one-size claims.`,
      bn: `## কাঠামো পরে ভাবার বিষয় নয়

বিম, কলাম ও ফাউন্ডেশন লেআউটের সাথে না মিললে সুন্দর নকশাও বিপদে পড়ে। এসবি স্পেসে ইন-হাউস MIEB প্রকৌশলী স্থপতির সাথে কাজ করেন।`,
    },
    faqs: [],
  },
  {
    slug: "dental-clinic-interior-design-checklist",
    title: {
      en: "Dental Clinic Interior Design Checklist",
      bn: "ডেন্টাল ক্লিনিক ইন্টেরিয়র ডিজাইন চেকলিস্ট",
    },
    description: {
      en: "Planning a dental clinic interior in Dhaka? Use this checklist for flow, hygiene zones and patient comfort.",
      bn: "ঢাকায় ডেন্টাল ক্লিনিক ইন্টেরিয়র পরিকল্পনা? চলাচল, হাইজিন জোন ও রোগীর আরামের চেকলিস্ট।",
    },
    date: "2026-03-05",
    readingMinutes: 7,
    coverImage: "/images/placeholder-project-dental.svg",
    tags: ["interior", "clinic", "uttara"],
    relatedServices: ["interior-design", "3d-visualization"],
    relatedAreas: ["uttara", "mohammadpur"],
    body: {
      en: `## Start with clinical flow

Map patient arrival, waiting, treatment and staff routes before choosing finishes. A dental clinic interior in Dhaka should reduce cross-traffic and keep treatment rooms efficient.

## Materials and lighting

Choose surfaces that clean well and lighting that supports clinical work without feeling harsh in waiting areas. 3D visualization helps stakeholders approve the look before execution.

## Learn from Uttara work

We have delivered dental clinic interior design thinking for a project in Uttara. Contact our Mohammadpur office to discuss your clinic brief.`,
      bn: `## ক্লিনিকাল ফ্লো দিয়ে শুরু

ফিনিশ বাছার আগে রোগীর আগমন, অপেক্ষা, ট্রিটমেন্ট ও স্টাফ রুট ম্যাপ করুন। থ্রিডি ভিজুয়ালাইজেশন এক্সিকিউশনের আগে লুক অনুমোদনে সাহায্য করে। উত্তরার প্রজেক্ট নিয়ে আলোচনায় মোহাম্মদপুর অফিসে যোগাযোগ করুন।`,
    },
    faqs: [
      {
        question: {
          en: "Do you design clinic interiors outside Uttara?",
          bn: "উত্তরার বাইরেও কি ক্লিনিক ইন্টেরিয়র করেন?",
        },
        answer: {
          en: "Yes. We serve Dhaka from Mohammadpur and can discuss clinic projects in other covered areas.",
          bn: "হ্যাঁ। মোহাম্মদপুর থেকে ঢাকায় সেবা দিই এবং অন্য কভার্ড এলাকার ক্লিনিক নিয়ে আলোচনা করি।",
        },
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
