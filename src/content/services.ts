export type LocalizedString = { en: string; bn: string };

export type ServiceFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type Service = {
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  benefits: LocalizedString[];
  deliverables: LocalizedString[];
  processSteps: LocalizedString[];
  faqs: ServiceFaq[];
  heroImage: string;
  relatedProjects: string[];
  seo: {
    title: LocalizedString;
    description: LocalizedString;
  };
  primaryKeyword: LocalizedString;
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: { en: "Architectural Design", bn: "স্থাপত্য নকশা" },
    shortDescription: {
      en: "Residential, commercial and mixed-use building design shaped around how you live and work.",
      bn: "আপনার বসবাস ও কাজের ধরনকে কেন্দ্র করে আবাসিক, বাণিজ্যিক ও মিশ্র ব্যবহারের ভবন নকশা।",
    },
    longDescription: {
      en: `SB Space delivers architectural design for homes, apartments, commercial buildings and mixed-use projects across Narsingdi, Madhabdi and Dhaka. Our in-house architect (MIAB) leads concept development, floor planning, elevations and coordination with structural engineering so your building is beautiful and buildable from day one.

We begin with a consultation to understand your plot, lifestyle, budget and local regulations. From there we develop concepts, refine layouts for light and ventilation suited to Bangladesh’s climate, and prepare drawings ready for approval and construction. Whether you are planning a family home in Madhabdi or a commercial building in Dhaka, we keep design, structure and construction aligned under one roof.

Clients choose us when they want clear communication, practical detailing and a partner who can carry the project from sketch through build. Architectural design with SB Space means fewer handoffs, fewer conflicts between drawings, and a space that feels intentional.`,
      bn: `এসবি স্পেস নরসিংদী, মাধবদী ও ঢাকা জুড়ে বাড়ি, অ্যাপার্টমেন্ট, বাণিজ্যিক ভবন ও মিশ্র ব্যবহারের প্রজেক্টের স্থাপত্য নকশা করে। আমাদের ইন-হাউস স্থপতি (MIAB) ধারণা উন্নয়ন, ফ্লোর প্ল্যান, এলিভেশন এবং কাঠামো প্রকৌশলের সাথে সমন্বয় পরিচালনা করেন—যাতে ভবন শুরু থেকেই সুন্দর ও নির্মাণযোগ্য হয়।

আমরা পরামর্শ দিয়ে শুরু করি: প্লট, জীবনযাত্রা, বাজেট ও স্থানীয় নিয়ম বুঝে। তারপর ধারণা তৈরি, বাংলাদেশের জলবায়ু অনুযায়ী আলো ও বাতাসের জন্য লেআউট পরিমার্জন, এবং অনুমোদন ও নির্মাণের জন্য অঙ্কন প্রস্তুত করি। মাধবদীতে পারিবারিক বাড়ি হোক বা ঢাকায় বাণিজ্যিক ভবন—নকশা, কাঠামো ও নির্মাণ এক ছাদের নিচে রাখি।

যারা স্পষ্ট যোগাযোগ, বাস্তবসম্মত ডিটেইলিং এবং স্কেচ থেকে নির্মাণ পর্যন্ত একসঙ্গে কাজ করতে চান, তারা আমাদের বেছে নেন।`,
    },
    benefits: [
      {
        en: "In-house architect coordinated with structural engineering",
        bn: "কাঠামো প্রকৌশলের সাথে সমন্বিত ইন-হাউস স্থপতি",
      },
      {
        en: "Climate-aware layouts for light, airflow and comfort",
        bn: "আলো, বাতাস ও আরামের জন্য জলবায়ু-সচেতন লেআউট",
      },
      {
        en: "One team from concept to construction",
        bn: "ধারণা থেকে নির্মাণ পর্যন্ত একই দল",
      },
    ],
    deliverables: [
      { en: "Concept options and mood direction", bn: "ধারণা অপশন ও মুড নির্দেশনা" },
      { en: "Floor plans, elevations and sections", bn: "ফ্লোর প্ল্যান, এলিভেশন ও সেকশন" },
      { en: "Coordination with structural drawings", bn: "কাঠামো অঙ্কনের সাথে সমন্বয়" },
    ],
    processSteps: [
      { en: "Site & brief consultation", bn: "সাইট ও ব্রিফ পরামর্শ" },
      { en: "Concept & layout development", bn: "ধারণা ও লেআউট উন্নয়ন" },
      { en: "Detailed architectural drawings", bn: "বিস্তারিত স্থাপত্য অঙ্কন" },
      { en: "Approvals support & build handoff", bn: "অনুমোদন সহায়তা ও নির্মাণ হস্তান্তর" },
    ],
    faqs: [
      {
        question: {
          en: "Do you design both residential and commercial buildings?",
          bn: "আপনারা কি আবাসিক ও বাণিজ্যিক উভয় ভবন নকশা করেন?",
        },
        answer: {
          en: "Yes. We design homes, apartments, mixed-use and commercial buildings in Narsingdi, Madhabdi and Dhaka.",
          bn: "হ্যাঁ। আমরা নরসিংদী, মাধবদী ও ঢাকায় বাড়ি, অ্যাপার্টমেন্ট, মিশ্র ব্যবহার ও বাণিজ্যিক ভবন নকশা করি।",
        },
      },
      {
        question: {
          en: "Is your architect available in-house?",
          bn: "আপনাদের স্থপতি কি ইন-হাউস?",
        },
        answer: {
          en: "Yes. Architectural design is led by Md. Sarif Hossain Patoary (MIAB), working alongside our structural engineer.",
          bn: "হ্যাঁ। স্থাপত্য নকশা পরিচালনা করেন মো. সরিফ হোসেন পাটোয়ারী (MIAB), আমাদের কাঠামো প্রকৌশলীর সাথে।",
        },
      },
    ],
    heroImage: "/images/placeholder-architectural.svg",
    relatedProjects: ["dental-clinic-interior-uttara"],
    seo: {
      title: {
        en: "Architectural Design Narsingdi & Dhaka | SB Space",
        bn: "নরসিংদী ও ঢাকায় স্থাপত্য নকশা | এসবি স্পেস",
      },
      description: {
        en: "Architectural design for homes and commercial buildings in Narsingdi, Madhabdi and Dhaka—led by an in-house MIAB architect.",
        bn: "নরসিংদী, মাধবদী ও ঢাকায় বাড়ি ও বাণিজ্যিক ভবনের স্থাপত্য নকশা—ইন-হাউস MIAB স্থপতির নেতৃত্বে।",
      },
    },
    primaryKeyword: {
      en: "architect in Narsingdi",
      bn: "নরসিংদী আর্কিটেক্ট",
    },
  },
  {
    slug: "structural-design",
    title: { en: "Structural Design", bn: "কাঠামো নকশা" },
    shortDescription: {
      en: "Structural engineering by an in-house engineer (MIEB) for safe, efficient buildings.",
      bn: "নিরাপদ ও দক্ষ ভবনের জন্য ইন-হাউস প্রকৌশলী (MIEB) দ্বারা কাঠামো প্রকৌশল।",
    },
    longDescription: {
      en: `Structural design is the backbone of every lasting building. At SB Space, structural engineering is handled in-house by Md. Munir Hossain Patoary (MIEB), working directly with our architect and construction team. That means load paths, foundations, beams, columns and slabs are coordinated with architectural intent—not bolted on after the fact.

We provide structural design for residential and commercial projects in Madhabdi, Narsingdi and Dhaka, including RCC frames and steel structures. After understanding the architectural layout and site conditions, we develop calculations and drawings that prioritize safety, material efficiency and buildability. Clients get one accountable team instead of juggling separate consultants who rarely meet.

If you are building in Narsingdi or Dhaka and want structural design that speaks the same language as your architecture and site execution, SB Space keeps engineering and construction aligned.`,
      bn: `কাঠামো নকশাই স্থায়ী ভবনের মেরুদণ্ড। এসবি স্পেসে কাঠামো প্রকৌশল ইন-হাউসে করেন মো. মুনির হোসেন পাটোয়ারী (MIEB)—আমাদের স্থপতি ও নির্মাণ দলের সাথে সরাসরি। লোড পাথ, ফাউন্ডেশন, বিম, কলাম ও স্ল্যাব স্থাপত্যের সাথে সমন্বিত হয়।

মাধবদী, নরসিংদী ও ঢাকায় আবাসিক ও বাণিজ্যিক প্রজেক্টের জন্য RCC ফ্রেম ও স্টিল স্ট্রাকচারসহ কাঠামো নকশা দিই। লেআউট ও সাইট বুঝে নিরাপত্তা, উপাদান দক্ষতা ও নির্মাণযোগ্যতাকে অগ্রাধিকার দিয়ে হিসাব ও অঙ্কন তৈরি করি।`,
    },
    benefits: [
      {
        en: "In-house MIEB engineer coordinated with architecture",
        bn: "স্থাপত্যের সাথে সমন্বিত ইন-হাউস MIEB প্রকৌশলী",
      },
      {
        en: "RCC and steel structure capability",
        bn: "RCC ও স্টিল স্ট্রাকচার সক্ষমতা",
      },
      {
        en: "Buildable drawings aligned with site execution",
        bn: "সাইট এক্সিকিউশনের সাথে মিলিয়ে নির্মাণযোগ্য অঙ্কন",
      },
    ],
    deliverables: [
      { en: "Structural calculations & framing plans", bn: "কাঠামো হিসাব ও ফ্রেমিং প্ল্যান" },
      { en: "Foundation, beam, column & slab details", bn: "ফাউন্ডেশন, বিম, কলাম ও স্ল্যাব ডিটেইল" },
      { en: "Coordination with architectural drawings", bn: "স্থাপত্য অঙ্কনের সাথে সমন্বয়" },
    ],
    processSteps: [
      { en: "Review architecture & site data", bn: "স্থাপত্য ও সাইট তথ্য পর্যালোচনা" },
      { en: "Structural concept & sizing", bn: "কাঠামো ধারণা ও সাইজিং" },
      { en: "Detailed structural drawings", bn: "বিস্তারিত কাঠামো অঙ্কন" },
      { en: "Site support during construction", bn: "নির্মাণকালে সাইট সহায়তা" },
    ],
    faqs: [
      {
        question: {
          en: "Do you have a structural engineer in-house?",
          bn: "আপনাদের কি ইন-হাউস কাঠামো প্রকৌশলী আছেন?",
        },
        answer: {
          en: "Yes. Structural design is led by Md. Munir Hossain Patoary, MIEB.",
          bn: "হ্যাঁ। কাঠামো নকশা পরিচালনা করেন মো. মুনির হোসেন পাটোয়ারী, MIEB।",
        },
      },
    ],
    heroImage: "/images/placeholder-structural.svg",
    relatedProjects: [],
    seo: {
      title: {
        en: "Structural Design Narsingdi & Dhaka | SB Space",
        bn: "নরসিংদী ও ঢাকায় কাঠামো নকশা | এসবি স্পেস",
      },
      description: {
        en: "In-house structural design (MIEB) for residential and commercial buildings in Narsingdi, Madhabdi and Dhaka.",
        bn: "নরসিংদী, মাধবদী ও ঢাকায় আবাসিক ও বাণিজ্যিক ভবনের ইন-হাউস কাঠামো নকশা (MIEB)।",
      },
    },
    primaryKeyword: {
      en: "structural design Narsingdi",
      bn: "স্ট্রাকচারাল ডিজাইন নরসিংদী",
    },
  },
  {
    slug: "interior-design",
    title: { en: "Interior Design", bn: "ইন্টেরিয়র ডিজাইন" },
    shortDescription: {
      en: "Apartments, homes, offices, clinics, restaurants and shops—designed for how people actually use space.",
      bn: "অ্যাপার্টমেন্ট, বাড়ি, অফিস, ক্লিনিক, রেস্তোরাঁ ও দোকান—মানুষ যেভাবে জায়গা ব্যবহার করে সেভাবে নকশা।",
    },
    longDescription: {
      en: `Interior design at SB Space covers apartments, homes, offices, medical clinics (including dental), restaurants and retail shops across Dhaka, Mohammadpur, Uttara, Madhabdi and Narsingdi. We focus on function first: circulation, storage, lighting and materials that suit Bangladesh’s climate and your budget—then refine the look so the space feels calm and intentional.

Our process typically moves from consultation and measured survey to space planning, 3D visualization, material selection and, when you choose, full construction and finishing under the same team. That “design + build” path reduces the gap between beautiful renders and what gets built on site.

Whether you need an apartment interior in Dhaka or a clinic interior in Uttara, we keep communication clear and decisions documented. Explore our dental clinic interior project in Uttara as an example of how we approach specialized commercial interiors.`,
      bn: `এসবি স্পেসের ইন্টেরিয়র ডিজাইন ঢাকা, মোহাম্মদপুর, উত্তরা, মাধবদী ও নরসিংদী জুড়ে অ্যাপার্টমেন্ট, বাড়ি, অফিস, মেডিকেল ক্লিনিক (ডেন্টালসহ), রেস্তোরাঁ ও দোকান কভার করে। প্রথমে ফাংশন: চলাচল, স্টোরেজ, আলো ও বাজেট-উপযোগী উপকরণ—তারপর শান্ত ও ইচ্ছাকৃত লুক।

পরামর্শ ও মাপজোখ থেকে স্পেস প্ল্যানিং, থ্রিডি, ম্যাটেরিয়াল নির্বাচন এবং চাইলে একই দলের অধীনে নির্মাণ ও ফিনিশিং। উত্তরার ডেন্টাল ক্লিনিক ইন্টেরিয়র প্রজেক্ট দেখুন—বিশেষায়িত বাণিজ্যিক ইন্টেরিয়ারে আমাদের পদ্ধতির উদাহরণ।`,
    },
    benefits: [
      {
        en: "Residential and commercial interiors including clinics",
        bn: "ক্লিনিকসহ আবাসিক ও বাণিজ্যিক ইন্টেরিয়র",
      },
      {
        en: "3D preview before you commit to materials",
        bn: "ম্যাটেরিয়ালে সিদ্ধান্তের আগে থ্রিডি প্রিভিউ",
      },
      {
        en: "Optional design-and-build under one team",
        bn: "ঐচ্ছিক ডিজাইন-অ্যান্ড-বিল্ড এক দলের অধীনে",
      },
    ],
    deliverables: [
      { en: "Space plans and furniture layouts", bn: "স্পেস প্ল্যান ও ফার্নিচার লেআউট" },
      { en: "3D views and material boards", bn: "থ্রিডি ভিউ ও ম্যাটেরিয়াল বোর্ড" },
      { en: "Execution drawings for site", bn: "সাইটের জন্য এক্সিকিউশন অঙ্কন" },
    ],
    processSteps: [
      { en: "Consultation & site measure", bn: "পরামর্শ ও সাইট মাপ" },
      { en: "Space planning & concept", bn: "স্পেস প্ল্যানিং ও ধারণা" },
      { en: "3D design & material selection", bn: "থ্রিডি নকশা ও ম্যাটেরিয়াল নির্বাচন" },
      { en: "Execution & finishing", bn: "এক্সিকিউশন ও ফিনিশিং" },
    ],
    faqs: [
      {
        question: {
          en: "How much does interior design cost in Dhaka?",
          bn: "ঢাকায় ইন্টেরিয়র ডিজাইনের খরচ কত?",
        },
        answer: {
          en: "Cost depends on size, materials, scope (design-only vs design-and-build) and finishes. We offer a free consultation to understand your space and share a tailored estimate—we do not publish fixed prices because every project differs.",
          bn: "খরচ নির্ভর করে আয়তন, উপকরণ, স্কোপ (শুধু নকশা নাকি ডিজাইন-অ্যান্ড-বিল্ড) ও ফিনিশের উপর। ফ্রি পরামর্শে আপনার জায়গা বুঝে উপযোগী অনুমান দিই—প্রজেক্ট ভেদে আলাদা হওয়ায় নির্দিষ্ট দাম প্রকাশ করি না।",
        },
      },
    ],
    heroImage: "/images/placeholder-interior.svg",
    relatedProjects: ["dental-clinic-interior-uttara"],
    seo: {
      title: {
        en: "Interior Design Company in Dhaka & Narsingdi | SB Space",
        bn: "ঢাকা ও নরসিংদীতে ইন্টেরিয়র ডিজাইন কোম্পানি | এসবি স্পেস",
      },
      description: {
        en: "Interior design for apartments, offices, clinics and shops in Dhaka, Mohammadpur, Uttara, Madhabdi and Narsingdi.",
        bn: "ঢাকা, মোহাম্মদপুর, উত্তরা, মাধবদী ও নরসিংদীতে অ্যাপার্টমেন্ট, অফিস, ক্লিনিক ও দোকানের ইন্টেরিয়র ডিজাইন।",
      },
    },
    primaryKeyword: {
      en: "interior design company in Dhaka",
      bn: "ঢাকায় ইন্টেরিয়র ডিজাইন",
    },
  },
  {
    slug: "construction",
    title: { en: "Construction", bn: "নির্মাণ" },
    shortDescription: {
      en: "Building construction, finishing and renovation with design and engineering aligned on site.",
      bn: "সাইটে নকশা ও প্রকৌশল সমন্বিত ভবন নির্মাণ, ফিনিশিং ও সংস্কার।",
    },
    longDescription: {
      en: `SB Space provides building construction, finishing and renovation services with the advantage of in-house architectural and structural design. When design and build sit under one roof, site decisions stay consistent with drawings—and issues are resolved by people who already know the project.

We support new construction and renovation work in Madhabdi, Narsingdi and Dhaka. After concept and drawings are agreed, we help plan materials and budget, then execute with clear communication through handover. Clients who want a single accountable partner for design-and-construction find this model reduces friction compared with hiring separate firms.

Ask us about your plot or renovation brief; we will outline the process from consultation through build support without inventing fixed prices or timelines until we understand the scope.`,
      bn: `এসবি স্পেস ইন-হাউস স্থাপত্য ও কাঠামো নকশার সুবিধাসহ ভবন নির্মাণ, ফিনিশিং ও সংস্কার সেবা দেয়। নকশা ও নির্মাণ এক ছাদের নিচে থাকলে সাইট সিদ্ধান্ত অঙ্কনের সাথে মিলে যায়।

মাধবদী, নরসিংদী ও ঢাকায় নতুন নির্মাণ ও সংস্কারে সহায়তা করি। ধারণা ও অঙ্কন ঠিক হলে ম্যাটেরিয়াল ও বাজেট পরিকল্পনা, তারপর হস্তান্তর পর্যন্ত স্পষ্ট যোগাযোগে এক্সিকিউশন।`,
    },
    benefits: [
      {
        en: "Design and construction coordinated by one team",
        bn: "এক দল দ্বারা সমন্বিত নকশা ও নির্মাণ",
      },
      {
        en: "New build and renovation capability",
        bn: "নতুন নির্মাণ ও সংস্কার সক্ষমতা",
      },
      {
        en: "Clear process from budget planning to handover",
        bn: "বাজেট পরিকল্পনা থেকে হস্তান্তর পর্যন্ত স্পষ্ট প্রক্রিয়া",
      },
    ],
    deliverables: [
      { en: "Construction planning aligned to drawings", bn: "অঙ্কন অনুযায়ী নির্মাণ পরিকল্পনা" },
      { en: "Material & budget coordination", bn: "ম্যাটেরিয়াল ও বাজেট সমন্বয়" },
      { en: "Site execution and finishing", bn: "সাইট এক্সিকিউশন ও ফিনিশিং" },
    ],
    processSteps: [
      { en: "Scope & site review", bn: "স্কোপ ও সাইট পর্যালোচনা" },
      { en: "Material & budget planning", bn: "ম্যাটেরিয়াল ও বাজেট পরিকল্পনা" },
      { en: "Build / renovation execution", bn: "নির্মাণ / সংস্কার এক্সিকিউশন" },
      { en: "Handover & support", bn: "হস্তান্তর ও সহায়তা" },
    ],
    faqs: [
      {
        question: {
          en: "Do you handle both design and construction?",
          bn: "আপনারা কি নকশা ও নির্মাণ দুটোই করেন?",
        },
        answer: {
          en: "Yes. Design, engineering and construction can be delivered under one roof—our key differentiator.",
          bn: "হ্যাঁ। ডিজাইন, ইঞ্জিনিয়ারিং ও নির্মাণ এক ছাদের নিচে—এটাই আমাদের মূল পার্থক্য।",
        },
      },
    ],
    heroImage: "/images/placeholder-construction.svg",
    relatedProjects: [],
    seo: {
      title: {
        en: "Construction Company in Narsingdi & Dhaka | SB Space",
        bn: "নরসিংদী ও ঢাকায় কনস্ট্রাকশন কোম্পানি | এসবি স্পেস",
      },
      description: {
        en: "Building construction, finishing and renovation in Madhabdi, Narsingdi and Dhaka—aligned with in-house design.",
        bn: "মাধবদী, নরসিংদী ও ঢাকায় ভবন নির্মাণ, ফিনিশিং ও সংস্কার—ইন-হাউস নকশার সাথে সমন্বিত।",
      },
    },
    primaryKeyword: {
      en: "construction company in Narsingdi",
      bn: "নরসিংদীতে বিল্ডিং কনস্ট্রাকশন",
    },
  },
  {
    slug: "steel-structure",
    title: { en: "Steel Structure", bn: "স্টিল স্ট্রাকচার" },
    shortDescription: {
      en: "Steel buildings, sheds, factories and warehouses designed and engineered for your site.",
      bn: "আপনার সাইটের জন্য নকশাকৃত স্টিল ভবন, শেড, কারখানা ও গুদাম।",
    },
    longDescription: {
      en: `Steel structure projects demand precise engineering and clear detailing. SB Space designs and supports steel buildings, industrial sheds, factories and warehouses for clients in Narsingdi, Madhabdi and Dhaka. Our structural engineer (MIEB) works with architectural planning so spans, bracing and foundations match how the building will be used.

We help you evaluate whether steel is the right choice versus RCC for speed, span and function—without pushing a one-size answer. When steel is selected, we focus on buildable drawings and coordination through fabrication and erection support as agreed in your project scope.

If you need a steel structure company that also understands architecture and on-site construction realities in Bangladesh, talk to SB Space about your shed, factory or warehouse brief.`,
      bn: `স্টিল স্ট্রাকচার প্রজেক্টে সঠিক প্রকৌশল ও স্পষ্ট ডিটেইলিং জরুরি। এসবি স্পেস নরসিংদী, মাধবদী ও ঢাকায় স্টিল ভবন, শিল্প শেড, কারখানা ও গুদামের নকশা ও সহায়তা করে। আমাদের MIEB প্রকৌশলী স্থাপত্য পরিকল্পনার সাথে স্প্যান, ব্রেসিং ও ফাউন্ডেশন মিলিয়ে কাজ করেন।`,
    },
    benefits: [
      {
        en: "Engineered steel sheds, factories and warehouses",
        bn: "প্রকৌশলসম্মত স্টিল শেড, কারখানা ও গুদাম",
      },
      {
        en: "Informed steel vs RCC guidance",
        bn: "স্টিল বনাম RCC বিষয়ে সচেতন পরামর্শ",
      },
      {
        en: "Coordination from design toward erection",
        bn: "নকশা থেকে ইরেকশন পর্যন্ত সমন্বয়",
      },
    ],
    deliverables: [
      { en: "Steel framing concepts & drawings", bn: "স্টিল ফ্রেমিং ধারণা ও অঙ্কন" },
      { en: "Foundation coordination", bn: "ফাউন্ডেশন সমন্বয়" },
      { en: "Fabrication-oriented detailing support", bn: "ফ্যাব্রিকেশন-উপযোগী ডিটেইলিং সহায়তা" },
    ],
    processSteps: [
      { en: "Use-case & site assessment", bn: "ব্যবহার ও সাইট মূল্যায়ন" },
      { en: "Structural concept for steel", bn: "স্টিলের কাঠামো ধারণা" },
      { en: "Detailed drawings", bn: "বিস্তারিত অঙ্কন" },
      { en: "Fabrication & erection coordination", bn: "ফ্যাব্রিকেশন ও ইরেকশন সমন্বয়" },
    ],
    faqs: [
      {
        question: {
          en: "Do you build steel structures?",
          bn: "আপনারা কি স্টিল স্ট্রাকচার করেন?",
        },
        answer: {
          en: "Yes. We design and support steel buildings, sheds, factories and warehouses.",
          bn: "হ্যাঁ। আমরা স্টিল ভবন, শেড, কারখানা ও গুদামের নকশা ও সহায়তা করি।",
        },
      },
    ],
    heroImage: "/images/placeholder-steel.svg",
    relatedProjects: [],
    seo: {
      title: {
        en: "Steel Structure Company Dhaka & Narsingdi | SB Space",
        bn: "স্টিল স্ট্রাকচার নরসিংদী ও ঢাকা | এসবি স্পেস",
      },
      description: {
        en: "Steel structure design for sheds, factories and warehouses in Narsingdi, Madhabdi and Dhaka.",
        bn: "নরসিংদী, মাধবদী ও ঢাকায় শেড, কারখানা ও গুদামের স্টিল স্ট্রাকচার নকশা।",
      },
    },
    primaryKeyword: {
      en: "steel structure Narsingdi",
      bn: "স্টিল স্ট্রাকচার নরসিংদী",
    },
  },
  {
    slug: "3d-visualization",
    title: { en: "3D Visualization", bn: "থ্রিডি ভিজুয়ালাইজেশন" },
    shortDescription: {
      en: "Realistic exterior and interior renders so you can see the project before you build.",
      bn: "নির্মাণের আগে প্রজেক্ট দেখতে বাস্তবসম্মত এক্সটিরিয়র ও ইন্টেরিয়র রেন্ডার।",
    },
    longDescription: {
      en: `3D visualization helps clients make confident decisions on layout, materials and elevations before construction begins. SB Space produces realistic exterior and interior renders for residential and commercial projects in Dhaka and Narsingdi—so stakeholders can review the design together, not imagine it from 2D drawings alone.

Renders are created from your approved plans and design direction, then refined with your feedback. Paired with our architectural and interior services, visualization becomes part of a continuous workflow rather than a disconnected add-on. When you are ready, the same team can carry decisions into construction.

Use 3D visualization to align family members, partners or investors early—and reduce costly changes on site.`,
      bn: `থ্রিডি ভিজুয়ালাইজেশন নির্মাণের আগে লেআউট, উপকরণ ও এলিভেশন নিয়ে আত্মবিশ্বাসী সিদ্ধান্ত নিতে সাহায্য করে। এসবি স্পেস ঢাকা ও নরসিংদীতে আবাসিক ও বাণিজ্যিক প্রজেক্টের বাস্তবসম্মত রেন্ডার তৈরি করে—শুধু ২ডি অঙ্কন নয়, একসঙ্গে ডিজাইন দেখা যায়।`,
    },
    benefits: [
      {
        en: "See exteriors and interiors before building",
        bn: "নির্মাণের আগে এক্সটিরিয়র ও ইন্টেরিয়র দেখুন",
      },
      {
        en: "Faster alignment with family or partners",
        bn: "পরিবার বা পার্টনারদের সাথে দ্রুত মতৈক্য",
      },
      {
        en: "Connected to our design-to-build workflow",
        bn: "আমাদের ডিজাইন-টু-বিল্ড ওয়ার্কফ্লোর সাথে যুক্ত",
      },
    ],
    deliverables: [
      { en: "Exterior still renders", bn: "এক্সটিরিয়র স্টিল রেন্ডার" },
      { en: "Interior still renders", bn: "ইন্টেরিয়র স্টিল রেন্ডার" },
      { en: "Revision rounds as scoped", bn: "স্কোপ অনুযায়ী সংশোধন রাউন্ড" },
    ],
    processSteps: [
      { en: "Receive plans & design brief", bn: "প্ল্যান ও ডিজাইন ব্রিফ গ্রহণ" },
      { en: "3D model & materials", bn: "থ্রিডি মডেল ও ম্যাটেরিয়াল" },
      { en: "Render production", bn: "রেন্ডার প্রোডাকশন" },
      { en: "Review & refine", bn: "পর্যালোচনা ও পরিমার্জন" },
    ],
    faqs: [
      {
        question: {
          en: "Can I see my building in 3D before construction starts?",
          bn: "নির্মাণ শুরুর আগে কি থ্রিডিতে ভবন দেখা যাবে?",
        },
        answer: {
          en: "Yes. We offer 3D visualization so you can review exteriors and interiors before execution.",
          bn: "হ্যাঁ। এক্সিকিউশনের আগে এক্সটিরিয়র ও ইন্টেরিয়র দেখতে থ্রিডি ভিজুয়ালাইজেশন দিই।",
        },
      },
    ],
    heroImage: "/images/placeholder-3d.svg",
    relatedProjects: ["dental-clinic-interior-uttara"],
    seo: {
      title: {
        en: "3D Visualization Dhaka & Narsingdi | SB Space",
        bn: "থ্রিডি ভিজুয়ালাইজেশন ঢাকা ও নরসিংদী | এসবি স্পেস",
      },
      description: {
        en: "Realistic 3D visualization for building exteriors and interiors in Dhaka and Narsingdi before you build.",
        bn: "নির্মাণের আগে ঢাকা ও নরসিংদীতে ভবনের এক্সটিরিয়র ও ইন্টেরিয়রের বাস্তবসম্মত থ্রিডি ভিজুয়ালাইজেশন।",
      },
    },
    primaryKeyword: {
      en: "3D visualization Dhaka",
      bn: "থ্রিডি ভিজুয়ালাইজেশন",
    },
  },
  {
    slug: "animation-walkthrough",
    title: { en: "Animation / Walkthrough", bn: "অ্যানিমেশন / ওয়াকথ্রু" },
    shortDescription: {
      en: "3D animated walkthrough videos that let you experience the project before it is built.",
      bn: "নির্মিত হওয়ার আগে প্রজেক্ট অনুভব করতে থ্রিডি অ্যানিমেটেড ওয়াকথ্রু ভিডিও।",
    },
    longDescription: {
      en: `Animated walkthroughs turn still designs into a guided experience. SB Space creates 3D animation and walkthrough videos for architectural and interior projects so clients can move through spaces virtually—ideal for presentations to family, investors or stakeholders in Dhaka and Narsingdi.

Walkthroughs are built from the same design models used for visualization, then camera paths and pacing are refined for clarity. Combined with our design and construction services, animation becomes a decision tool, not only a marketing clip.

Share your project stage and audience; we will recommend still renders, a walkthrough, or both.`,
      bn: `অ্যানিমেটেড ওয়াকথ্রু স্থির ডিজাইনকে গাইডেড অভিজ্ঞতায় বদলায়। এসবি স্পেস স্থাপত্য ও ইন্টেরিয়র প্রজেক্টের জন্য থ্রিডি অ্যানিমেশন ও ওয়াকথ্রু ভিডিও তৈরি করে—ঢাকা ও নরসিংদীতে পরিবার বা বিনিয়োগকারীদের প্রেজেন্টেশনের জন্য আদর্শ।`,
    },
    benefits: [
      {
        en: "Experience circulation and scale before building",
        bn: "নির্মাণের আগে চলাচল ও স্কেল অনুভব করুন",
      },
      {
        en: "Stronger presentations for stakeholders",
        bn: "স্টেকহোল্ডারদের জন্য শক্তিশালী প্রেজেন্টেশন",
      },
      {
        en: "Built from the same design models as renders",
        bn: "রেন্ডারের একই ডিজাইন মডেল থেকে তৈরি",
      },
    ],
    deliverables: [
      { en: "Camera-path walkthrough video", bn: "ক্যামেরা-পাথ ওয়াকথ্রু ভিডিও" },
      { en: "Optional still frames from the path", bn: "ঐচ্ছিক স্টিল ফ্রেম" },
      { en: "Revision rounds as scoped", bn: "স্কোপ অনুযায়ী সংশোধন" },
    ],
    processSteps: [
      { en: "Confirm spaces & story beats", bn: "স্পেস ও স্টোরি বিট নিশ্চিতকরণ" },
      { en: "Animate camera path", bn: "ক্যামেরা পাথ অ্যানিমেট" },
      { en: "Lighting & polish", bn: "লাইটিং ও পলিশ" },
      { en: "Export & review", bn: "এক্সপোর্ট ও পর্যালোচনা" },
    ],
    faqs: [
      {
        question: {
          en: "Do you offer 3D design before execution?",
          bn: "এক্সিকিউশনের আগে কি থ্রিডি ডিজাইন দেন?",
        },
        answer: {
          en: "Yes. We offer 3D visualization and animated walkthroughs before construction or interior execution.",
          bn: "হ্যাঁ। নির্মাণ বা ইন্টেরিয়র এক্সিকিউশনের আগে থ্রিডি ভিজুয়ালাইজেশন ও অ্যানিমেটেড ওয়াকথ্রু দিই।",
        },
      },
    ],
    heroImage: "/images/placeholder-animation.svg",
    relatedProjects: [],
    seo: {
      title: {
        en: "3D Animation Walkthrough Dhaka | SB Space",
        bn: "থ্রিডি অ্যানিমেশন ওয়াকথ্রু ঢাকা | এসবি স্পেস",
      },
      description: {
        en: "3D animated walkthrough videos for architecture and interiors in Dhaka and Narsingdi.",
        bn: "ঢাকা ও নরসিংদীতে স্থাপত্য ও ইন্টেরিয়রের জন্য থ্রিডি অ্যানিমেটেড ওয়াকথ্রু ভিডিও।",
      },
    },
    primaryKeyword: {
      en: "3D animation walkthrough Dhaka",
      bn: "থ্রিডি অ্যানিমেশন ওয়াকথ্রু",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
