export type ProcessStep = {
  id: string;
  number: string;
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  /** Soft guidance only — not a promised duration */
  timingNote: { en: string; bn: string };
};

export const processSteps: ProcessStep[] = [
  {
    id: "consultation",
    number: "01",
    title: { en: "Consultation", bn: "পরামর্শ" },
    description: {
      en: "We listen to your goals, visit or review the site when needed, and clarify scope—design-only or design-and-build.",
      bn: "আপনার লক্ষ্য শুনি, প্রয়োজনে সাইট দেখি বা পর্যালোচনা করি, এবং স্কোপ পরিষ্কার করি—শুধু নকশা নাকি ডিজাইন-অ্যান্ড-বিল্ড।",
    },
    timingNote: {
      en: "Usually starts with a call or office visit.",
      bn: "সাধারণত কল বা অফিস ভিজিট দিয়ে শুরু।",
    },
  },
  {
    id: "concept-3d",
    number: "02",
    title: { en: "Concept & 3D", bn: "ধারণা ও থ্রিডি" },
    description: {
      en: "Concept layouts, architectural or interior direction, and 3D visualization so you can see the proposal before committing to materials.",
      bn: "ধারণা লেআউট, স্থাপত্য বা ইন্টেরিয়র দিকনির্দেশনা, এবং থ্রিডি ভিজুয়ালাইজেশন—ম্যাটেরিয়ালে সিদ্ধান্তের আগে প্রস্তাব দেখুন।",
    },
    timingNote: {
      en: "Duration depends on project size and revision rounds.",
      bn: "সময় প্রজেক্টের আয়তন ও সংশোধন রাউন্ডের উপর নির্ভর করে।",
    },
  },
  {
    id: "material-budget",
    number: "03",
    title: { en: "Material & Budget", bn: "উপকরণ ও বাজেট" },
    description: {
      en: "We align finishes and structural or interior materials with your budget, documenting choices so site execution stays clear.",
      bn: "ফিনিশ ও কাঠামো বা ইন্টেরিয়র উপকরণ বাজেটের সাথে মিলাই, যাতে সাইট এক্সিকিউশন স্পষ্ট থাকে।",
    },
    timingNote: {
      en: "Agreed before major procurement or build steps.",
      bn: "বড় কেনাকাটা বা নির্মাণ ধাপের আগে ঠিক হয়।",
    },
  },
  {
    id: "build-execution",
    number: "04",
    title: { en: "Build / Execution", bn: "নির্মাণ / এক্সিকিউশন" },
    description: {
      en: "Construction, finishing or renovation executed with drawings and decisions already coordinated by our design and engineering team.",
      bn: "নকশা ও প্রকৌশল দলের সমন্বিত অঙ্কন ও সিদ্ধান্ত অনুযায়ী নির্মাণ, ফিনিশিং বা সংস্কার।",
    },
    timingNote: {
      en: "Scheduled after scope and materials are confirmed.",
      bn: "স্কোপ ও উপকরণ নিশ্চিত হওয়ার পর সময়সূচি হয়।",
    },
  },
  {
    id: "handover-support",
    number: "05",
    title: { en: "Handover & Support", bn: "হস্তান্তর ও সহায়তা" },
    description: {
      en: "Final walkthrough, handover of the completed scope, and after-sales support terms confirmed for your project.",
      bn: "চূড়ান্ত ওয়াকথ্রু, সম্পূর্ণ স্কোপ হস্তান্তর, এবং আপনার প্রজেক্টের জন্য বিক্রয়োত্তর সহায়তার শর্ত নিশ্চিতকরণ।",
    },
    timingNote: {
      en: "Support terms are stated in your proposal.",
      bn: "সহায়তার শর্ত আপনার প্রস্তাবনায় উল্লেখ থাকে।",
    },
  },
];
