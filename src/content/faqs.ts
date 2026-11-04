export type FaqItem = {
  id: string;
  question: { en: string; bn: string };
  answer: { en: string; bn: string };
};

/** Starter FAQs from spec Section 7 — edit when real policy is confirmed */
export const faqs: FaqItem[] = [
  {
    id: "interior-cost-dhaka",
    question: {
      en: "How much does interior design cost in Dhaka?",
      bn: "ঢাকায় ইন্টেরিয়র ডিজাইনের খরচ কত?",
    },
    answer: {
      en: "Interior design cost in Dhaka depends on room size, materials, furniture scope and whether you need design-only or design-and-build. We start with a free consultation and site understanding, then share a tailored estimate. We do not publish fixed package prices because every home and office differs.",
      bn: "ঢাকায় ইন্টেরিয়র খরচ নির্ভর করে ঘরের আয়তন, উপকরণ, ফার্নিচার স্কোপ এবং শুধু নকশা নাকি ডিজাইন-অ্যান্ড-বিল্ড—এর উপর। ফ্রি পরামর্শ ও সাইট বুঝে উপযোগী অনুমান দিই। প্রজেক্ট ভেদে আলাদা হওয়ায় নির্দিষ্ট প্যাকেজ মূল্য প্রকাশ করি না।",
    },
  },
  {
    id: "apartment-timeline",
    question: {
      en: "How long does a typical apartment interior take?",
      bn: "সাধারণত একটি অ্যাপার্টমেন্ট ইন্টেরিয়রে কত সময় লাগে?",
    },
    answer: {
      en: "Timelines vary with apartment size, customization level and whether construction is included. After we review your space and scope, we share a realistic schedule. We avoid promising fixed durations before understanding the work.",
      bn: "সময়সীমা অ্যাপার্টমেন্টের আয়তন, কাস্টমাইজেশন এবং নির্মাণ অন্তর্ভুক্ত কিনা তার উপর নির্ভর করে। জায়গা ও স্কোপ দেখে বাস্তবসম্মত সময়সূচি দিই—কাজ না বুঝে নির্দিষ্ট সময়কালের প্রতিশ্রুতি দিই না।",
    },
  },
  {
    id: "design-and-construction",
    question: {
      en: "Do you handle both design and construction?",
      bn: "আপনারা কি নকশা ও নির্মাণ দুটোই করেন?",
    },
    answer: {
      en: "Yes. SB Space offers architectural design, structural engineering, interior design and construction under one roof—so drawings and site work stay aligned.",
      bn: "হ্যাঁ। এসবি স্পেস এক ছাদের নিচে স্থাপত্য নকশা, কাঠামো প্রকৌশল, ইন্টেরিয়র ডিজাইন ও নির্মাণ করে—অঙ্কন ও সাইট কাজ মিলিয়ে রাখে।",
    },
  },
  {
    id: "3d-before-execution",
    question: {
      en: "Do you offer 3D design before execution?",
      bn: "এক্সিকিউশনের আগে কি থ্রিডি ডিজাইন দেন?",
    },
    answer: {
      en: "Yes. We provide 3D visualization and optional animated walkthroughs so you can review the design before materials and construction begin.",
      bn: "হ্যাঁ। ম্যাটেরিয়াল ও নির্মাণ শুরুর আগে ডিজাইন দেখতে থ্রিডি ভিজুয়ালাইজেশন এবং ঐচ্ছিক অ্যানিমেটেড ওয়াকথ্রু দিই।",
    },
  },
  {
    id: "service-areas",
    question: {
      en: "Which areas do you serve?",
      bn: "আপনারা কোন এলাকায় সেবা দেন?",
    },
    answer: {
      en: "We serve Narsingdi and Madhabdi from our Madhabdi office, and Dhaka areas including Mohammadpur and Uttara from our Dhaka office. Ask us if your location is nearby—we confirm coverage project by project.",
      bn: "মাধবদী অফিস থেকে নরসিংদী ও মাধবদী, এবং ঢাকা অফিস থেকে মোহাম্মদপুর ও উত্তরাসহ ঢাকা এলাকায় সেবা দিই। আপনার লোকেশন কাছাকাছি হলে জানান—প্রজেক্ট ভিত্তিতে কভারেজ নিশ্চিত করি।",
    },
  },
  {
    id: "in-house-team",
    question: {
      en: "Do you have an architect and structural engineer in-house?",
      bn: "আপনাদের কি ইন-হাউস স্থপতি ও কাঠামো প্রকৌশলী আছেন?",
    },
    answer: {
      en: "Yes. Architect Md. Sarif Hossain Patoary (MIAB) and Engineer Md. Munir Hossain Patoary (MIEB) work in-house alongside our construction team.",
      bn: "হ্যাঁ। স্থপতি মো. সরিফ হোসেন পাটোয়ারী (MIAB) এবং প্রকৌশলী মো. মুনির হোসেন পাটোয়ারী (MIEB) আমাদের নির্মাণ দলের সাথে ইন-হাউসে কাজ করেন।",
    },
  },
  {
    id: "steel-structures",
    question: {
      en: "Do you build steel structures?",
      bn: "আপনারা কি স্টিল স্ট্রাকচার করেন?",
    },
    answer: {
      en: "Yes. We design and support steel buildings, sheds, factories and warehouses.",
      bn: "হ্যাঁ। আমরা স্টিল ভবন, শেড, কারখানা ও গুদামের নকশা ও সহায়তা করি।",
    },
  },
  {
    id: "see-3d-building",
    question: {
      en: "Can I see my building in 3D before construction starts?",
      bn: "নির্মাণ শুরুর আগে কি থ্রিডিতে ভবন দেখা যাবে?",
    },
    answer: {
      en: "Yes. 3D visualization and walkthrough animation are part of our service offering so you can experience the project before build.",
      bn: "হ্যাঁ। নির্মাণের আগে প্রজেক্ট অনুভব করতে থ্রিডি ভিজুয়ালাইজেশন ও ওয়াকথ্রু অ্যানিমেশন আমাদের সেবার অংশ।",
    },
  },
  {
    id: "warranty",
    question: {
      en: "Do you provide a warranty or after-sales service?",
      bn: "আপনারা কি ওয়ারেন্টি বা বিক্রয়োত্তর সেবা দেন?",
    },
    answer: {
      en: "Warranty and after-sales terms depend on the scope of work (design-only vs construction). We confirm what is covered during proposal—please ask so we can state terms clearly for your project. {{WARRANTY_POLICY — owner to confirm exact terms}}",
      bn: "ওয়ারেন্টি ও বিক্রয়োত্তর শর্ত কাজের স্কোপের উপর নির্ভর করে (শুধু নকশা নাকি নির্মাণ)। প্রস্তাবনার সময় কী কভার হবে তা নিশ্চিত করি—আপনার প্রজেক্টের জন্য স্পষ্ট শর্ত জানতে জিজ্ঞাসা করুন। {{WARRANTY_POLICY — মালিক নিশ্চিত করবেন}}",
    },
  },
  {
    id: "payment-schedule",
    question: {
      en: "What is your payment schedule?",
      bn: "পেমেন্ট শিডিউল কী?",
    },
    answer: {
      en: "Payment schedules are agreed per project based on milestones (for example consultation, design stages and construction phases). Exact percentages are confirmed in writing for your scope. {{PAYMENT_SCHEDULE — owner to confirm}}",
      bn: "পেমেন্ট শিডিউল মাইলস্টোন অনুযায়ী প্রজেক্ট ভিত্তিতে ঠিক হয় (যেমন পরামর্শ, ডিজাইন ধাপ ও নির্মাণ পর্যায়)। শতকরা হার লিখিতভাবে নিশ্চিত হয়। {{PAYMENT_SCHEDULE — মালিক নিশ্চিত করবেন}}",
    },
  },
  {
    id: "fixed-budget",
    question: {
      en: "Can you work within a fixed budget?",
      bn: "নির্দিষ্ট বাজেটের মধ্যে কি কাজ করতে পারেন?",
    },
    answer: {
      en: "Yes—we plan materials and scope to respect a budget you set, and we flag trade-offs early so priorities stay clear. Share your budget range during consultation.",
      bn: "হ্যাঁ—আপনার নির্ধারিত বাজেট মেনে ম্যাটেরিয়াল ও স্কোপ পরিকল্পনা করি, এবং অগ্রাধিকার স্পষ্ট রাখতে আগে থেকে ট্রেড-অফ জানাই। পরামর্শে বাজেট রেঞ্জ শেয়ার করুন।",
    },
  },
];

export const homeFaqs = faqs.slice(0, 8);
