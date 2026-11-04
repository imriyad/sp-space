# PROJECT SPEC: "SB space design & construction" Website

> **Instruction to Cursor:** Read this entire file before writing any code. Build exactly what is described. Real company data is in Section 0 — use it exactly. Where a value is shown as `{{PLACEHOLDER}}`, put it in `src/content/site.ts` so the owner can edit it without touching components. Never invent prices, reviews, awards, project details, or years of experience. Use clearly labelled placeholder content when real data is missing.

---

## 0. Business Source Data (REAL — verified by the owner)

Source page: https://www.facebook.com/sbdesignconstruction
Use these values exactly. Keep every value in `src/content/site.ts` (single source of truth). Do not invent anything not listed here; mark anything missing as a clearly labelled placeholder.

```ts
// src/content/site.ts
export const site = {
  name: "SB space design & construction",
  shortName: "SB Space",
  legalDescriptor:
    "Architectural Design | Structural Design | Interior Design | Construction | Animation | Steel Structure | 3D Visualization Firm",
  taglineBn: "নির্মাণে নতুন মাত্রা, স্বপ্ন হোক বাস্তব!",
  taglineEn: "A new dimension in construction. Let your dream become real.",
  ctaBn: "আপনার স্বপ্নের প্রজেক্ট বাস্তবায়নে আমাদের সাথে থাকুন",
  ctaEn: "Stay with us to bring your dream project to life.",
  description:
    "SB space design & construction is an architectural design, structural design, interior design, construction, animation, steel structure and 3D visualization firm with offices in Madhabdi (Narsingdi) and Mohammadpur (Dhaka).",
  email: "spacedesignsb@gmail.com",
  phone: "+8801703880891",            // display as 01703-880891
  whatsapp: "+8801703880891",         // same number, WhatsApp enabled
  director: { name: "Roman Pathan", role: "Director", phone: "+8801676656563" }, // display 01676-656563
  team: [
    { name: "Md. Sarif Hossain Patoary", role: "Architect", credential: "MIAB" },
    { name: "Md. Munir Hossain Patoary", role: "Engineer", credential: "MIEB" },
  ],
  offices: [
    {
      id: "madhabdi",
      label: "Madhabdi Office",
      street: "217 & 218, Rhine OK Market, 2nd Floor, Birampur",
      area: "Madhabdi",
      district: "Narsingdi",
      postalCode: "1604",
      country: "BD",
    },
    {
      id: "dhaka",
      label: "Dhaka Office",
      street: "H#: 23/C (GF), R#: 11, P.C Culture Housing",
      area: "Mohammadpur",
      district: "Dhaka",
      postalCode: "1207",
      country: "BD",
    },
  ],
  geo: { /* {{LAT/LNG for each office — owner to supply or pull from Google Maps}} */ },
  hours: "{{OPENING_HOURS — not provided yet}}",
  serviceAreas: ["Narsingdi", "Madhabdi", "Dhaka", "Mohammadpur", "Uttara", "{{OTHER_AREAS_THEY_SERVE}}"],
  social: {
    facebook: "https://www.facebook.com/sbdesignconstruction",
    directorFacebook: "https://www.facebook.com/roman.pathan.7",
    instagram: "", youtube: "", linkedin: "",   // leave empty until real URLs exist; hide icons when empty
  },
  services: [/* see section 4 */],
  projects: [
    {
      slug: "dental-clinic-interior-uttara",
      title: "Dental Clinic Interior",
      location: "Uttara, Dhaka",
      type: "Interior Design (Clinic)",
      // images: owner to add from Facebook post; area/year/duration = placeholders until provided
    },
    // {{MORE PROJECTS — owner to supply photos + captions from Facebook}}
  ],
  testimonials: [], // only real reviews; empty array hides the section
  faqs: [/* see section 7 */],
};
```

**Display formats:** phone `01703-880891` (link `tel:+8801703880891`), director `01676-656563`, WhatsApp link `https://wa.me/8801703880891`, email link `mailto:spacedesignsb@gmail.com`.

**Two offices rule:** the site must show BOTH offices everywhere address data appears (footer, contact page, schema, maps). Build a small office switcher (tabs: "Madhabdi, Narsingdi" / "Mohammadpur, Dhaka") on the Contact page.

**Still needed from the owner (placeholders until supplied):** logo, 6–12 project photo sets with captions (location, area in sq ft, year), videos/animations, opening hours, Instagram/YouTube links, real client reviews, licences/membership proof (IAB / IEB), years in business.

**Brand notes:** the company is a *design + engineering + construction* firm (architect and structural engineer in-house). Lead with this as the key differentiator: "Design, engineering and construction under one roof." Show the architect/engineer credentials on About and Contact pages (trust signal).

---

## 1. Goals

1. Premium, trustworthy brand site that converts visitors into **quote/consultation requests** (calls, WhatsApp, form).
2. Visual language that mirrors **apple.com** (see section 2).
3. Technical SEO at a professional level for local service searches in Dhaka and Bangladesh (see section 8).
4. Mobile-first (most Bangladeshi traffic is mobile on 4G): fast, light, thumb-friendly.

## 2. Design System — Apple-style

Follow Apple's *design principles*, not its assets, logos, or copy. Do not use Apple trademarks or imagery.

**Principles:** huge confident headlines, generous whitespace, one idea per screen, full-bleed imagery, subtle motion, very few colors, rounded geometry, content-first.

### Tokens (`tailwind.config.ts` + CSS variables)
| Token | Value |
|---|---|
| Text primary | `#1d1d1f` |
| Text secondary | `#6e6e73` (on dark: `#a1a1a6`) |
| Background light | `#ffffff` |
| Background alt | `#f5f5f7` |
| Background dark | `#000000` / `#1d1d1f` |
| Accent / link / CTA | `#0071e3` (hover `#0077ed`) |
| Link on dark | `#2997ff` |
| Divider | `rgba(0,0,0,.08)` |
| Radius card | `28px` (large), `18px` (small) |
| Radius button | `980px` (pill) |
| Max content width | `1024px` text, `1280px` media |

### Typography
- Font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Helvetica Neue", Arial, sans-serif`. Load **Inter** via `next/font` as the cross-platform fallback.
- Hero H1: `clamp(40px, 8vw, 88px)`, weight 600, letter-spacing `-0.015em`, line-height `1.05`.
- Section H2: `clamp(32px, 5vw, 56px)`, weight 600.
- Body: 17–21px, line-height `1.47`, secondary color for supporting text.
- Eyebrow text above headings: 14–17px, weight 600, secondary color.
- If Bangla is enabled, use **Noto Sans Bengali** for `bn` locale.

### Layout & components
- **Global nav:** sticky, 48px tall, translucent (`backdrop-filter: saturate(180%) blur(20px)`, bg `rgba(255,255,255,.8)`), centered small links (Home, Services, Projects, Process, About, Contact), logo left, "Get a Quote" pill right. Collapses to full-screen overlay menu on mobile.
- **Hero:** full-viewport, centered headline + one-line subhead, two actions: filled pill "Get a free consultation" and text link "View our projects ›". Large project photo/video below or behind the text. Dark or light variant.
- **Alternating sections:** white → `#f5f5f7` → black → white. Each ~100–160px vertical padding.
- **Bento grid** for services (mixed-size rounded cards with image, short title, "Learn more ›").
- **Horizontal scroll gallery** (scroll-snap) for featured projects with large rounded cards and captions.
- **Sticky local sub-nav** on service/project pages (title left, "Get a Quote" right) like Apple's product sub-nav.
- **Stats strip:** big numbers (projects, sq ft built, years) — only show real values.
- **Footer:** Apple-style dense, light-gray footer with link columns, address, social, copyright.
- **Links:** blue text with trailing chevron `›`, underline on hover.

### Motion (Framer Motion or CSS + IntersectionObserver)
- Fade-up + slight scale on scroll reveal (400–700ms, `cubic-bezier(.25,.1,.25,1)`), stagger children.
- Subtle parallax on hero image (max 40px).
- Image hover zoom 1.03.
- **Must respect `prefers-reduced-motion`** (disable transforms).
- Never block LCP with animation; hero content visible immediately.

### Accessibility
WCAG 2.2 AA: contrast ≥ 4.5:1, visible focus rings, keyboard navigation, semantic landmarks, `alt` text on all images, skip-to-content link, tap targets ≥ 44px.

## 3. Tech Stack

- **Next.js 14+ (App Router), TypeScript, Tailwind CSS**, Framer Motion, `next/image`, `next/font`.
- Content: typed objects in `src/content/` + MDX for blog/case studies.
- Forms: Route Handler `/api/contact` → email via **Resend** (or Nodemailer SMTP), spam protection with honeypot + rate limit (+ Cloudflare Turnstile optional).
- Analytics: Google Analytics 4 + Google Search Console verification meta + Microsoft Clarity (optional). Load with `next/script` `strategy="afterInteractive"`.
- **i18n (REQUIRED):** `next-intl` with `/en` and `/bn` routes + `hreflang`, language switcher in the nav. Bangla copy is mandatory for Home, Services, Contact and About because most Narsingdi/Madhabdi searches are in Bangla. Use Noto Sans Bengali for `bn`.
- Deploy: Vercel (or any Node host). Use a custom domain with HTTPS and `www` → non-www (or reverse) 301 redirect.

### Folder structure
```
src/
  app/
    [locale]/
      layout.tsx  page.tsx
      services/page.tsx  services/[slug]/page.tsx
      projects/page.tsx  projects/[slug]/page.tsx
      process/page.tsx  about/page.tsx  contact/page.tsx
      blog/page.tsx  blog/[slug]/page.tsx
      faq/page.tsx
    api/contact/route.ts
    sitemap.ts  robots.ts  manifest.ts  not-found.tsx
  components/ (Nav, Hero, BentoGrid, ProjectCarousel, Stats, Process, Testimonials, FAQ, CTA, Footer, QuoteForm, WhatsAppButton, JsonLd)
  content/ (site.ts, services.ts, projects.ts, faqs.ts, areas.ts)
  lib/ (seo.ts, schema.ts)
public/ (images in WebP/AVIF, og/, icons/)
```

## 4. Services (pages + content)

Create one dedicated page per service at `/services/[slug]` (each 600–1000 words, unique, with FAQ, related projects, and CTA). These match what the company actually offers:

1. **Architectural Design** (`architectural-design`) — residential, commercial and mixed-use building design
2. **Structural Design** (`structural-design`) — structural engineering by an in-house engineer (MIEB)
3. **Interior Design** (`interior-design`) — apartments, homes, offices, clinics (e.g. dental clinic), restaurants, shops
4. **Construction** (`construction`) — building construction, finishing, renovation
5. **Steel Structure** (`steel-structure`) — steel buildings, sheds, factories, warehouses
6. **3D Visualization** (`3d-visualization`) — realistic exterior/interior renders before you build
7. **Animation / Walkthrough** (`animation-walkthrough`) — 3D animated walkthrough videos of projects

Optional landing pages built from the above (only if the company confirms): Turnkey Design + Build, Dental/Medical Clinic Interior, Office Interior, Residential Building Design.

Each service object: `slug, titleEn, titleBn, shortDescription, longDescription, benefits[], deliverables[], processSteps[], faqs[], heroImage, relatedProjects[], seo{title, description}`. Write copy in **English and Bangla**; do not claim specific prices, timelines, or warranties unless provided.

## 5. Projects / Portfolio

- Grid page with filters: All, Residential, Commercial, Office, Restaurant/Café, Construction, Renovation.
- Project card: cover image, title, location (area, Dhaka), type, size (sq ft).
- Project detail page: hero image, overview (client need, solution, result), facts table (location, area, duration, year, scope), gallery (lightbox), before/after slider if available, video if available, CTA "Start a similar project".
- Case-study style (area in sq ft + days to complete) performs well against competitors that publish this data.
- Images: min 1600px wide originals, served as AVIF/WebP, descriptive filenames (`gulshan-apartment-living-room-interior-design.webp`) and meaningful `alt`.

## 6. Pages & Sections

### Home
1. Hero (Bangla + English brand line, subhead "Architecture • Structure • Interior • Construction • 3D", 2 CTAs, full-bleed image/video)
2. Intro statement (large centered paragraph: who we are)
3. Services bento grid
4. Featured projects horizontal gallery
5. "Design, engineering and construction under one roof" dark section (in-house architect + structural engineer + builders)
6. Process (5 steps: Consultation → Concept & 3D → Material & Budget → Build/Execution → Handover & Support)
7. Stats strip (real numbers only)
8. Testimonials (real reviews only; link to Facebook)
9. Our offices & areas served (Madhabdi/Narsingdi and Mohammadpur/Dhaka cards with map links; area page links)
10. FAQ (6–8 items, FAQ schema)
11. Final CTA banner + contact strip
12. Footer

### Other pages
- **Services index** + service detail pages
- **Projects index** + detail pages
- **Process** — transparent step-by-step with timelines
- **About** — story, values, team, certifications/licences (if real)
- **Contact** — form (name, phone, email, service, location, budget range, message), click-to-call `01703-880891`, WhatsApp, director direct line, email, **office switcher for Madhabdi (Narsingdi) and Mohammadpur (Dhaka)** each with its own embedded Google Map and address, hours
- **Blog** — SEO articles (see section 8.7)
- **Area landing pages** `/areas/[slug]` — **Narsingdi, Madhabdi** (priority, tied to the Madhabdi office), **Mohammadpur** (Dhaka office), Uttara (dental clinic project), plus other areas only if the company truly serves them. Each needs unique copy, a relevant project, and the nearest office's contact details.
- **FAQ**, **Privacy Policy**, **Terms**, **404**

### Conversion features (parity with competitors)
- Sticky **WhatsApp + Call** floating buttons (mobile bottom bar)
- "Get a Free Quote" form on every page footer + dedicated page
- Project walkthrough **video section**
- Transparent process and **cost-estimation guidance** (ranges only if the owner provides them)
- Trust badges: years of experience, projects completed, warranty/after-sales support (only if real)
- Facebook feed link / review link
- Lead tracking: GA4 events for `click_call`, `click_whatsapp`, `form_submit`

## 7. FAQ (starter content — edit to match real policy)

- How much does interior design cost in Dhaka? *(explain factors: size, materials, scope; offer free site visit)*
- How long does a typical apartment interior take?
- Do you handle both design and construction?
- Do you offer 3D design before execution?
- Which areas do you serve? *(Narsingdi, Madhabdi, Dhaka and beyond — confirm)*
- Do you have an architect and structural engineer in-house? *(yes: Architect MIAB, Engineer MIEB)*
- Do you build steel structures?
- Can I see my building in 3D before construction starts?
- Do you provide a warranty or after-sales service?
- What is your payment schedule?
- Can you work within a fixed budget?

Render with accordion UI and output `FAQPage` JSON-LD.

## 8. SEO Requirements (critical)

> Honest note for the owner: no one can guarantee #1 rankings. Rankings come from technical quality (this spec), strong content, **Google Business Profile**, reviews, and backlinks. Do all of them.

### 8.1 Target keywords (put in titles, H1/H2, copy, alt text, URLs)
Two core markets: **Narsingdi / Madhabdi** (home market, less competition — aim to own it) and **Dhaka / Mohammadpur / Uttara** (higher competition).

**Narsingdi & Madhabdi (priority):** `interior design company in Narsingdi`, `interior designer in Narsingdi`, `architect in Narsingdi`, `building design Narsingdi`, `construction company in Narsingdi`, `design and construction company Narsingdi`, `structural design Narsingdi`, `steel structure Narsingdi`, `3D visualization Narsingdi`, `interior design Madhabdi`, `architect in Madhabdi`, `construction company Madhabdi`, `home design Narsingdi`, `building construction cost in Narsingdi`.
**Dhaka:** `interior design company in Dhaka`, `interior designer in Dhaka`, `architectural design firm Dhaka`, `design and construction company Dhaka`, `construction company in Dhaka`, `structural design Dhaka`, `steel structure company Dhaka`, `office interior design Dhaka`, `apartment interior design Dhaka`, `dental clinic interior design Dhaka`, `restaurant interior design Dhaka`, `3D visualization Dhaka`, `3D animation walkthrough Dhaka`, `interior design in Mohammadpur`, `interior design in Uttara`.
**Bangladesh-wide:** `architect and engineer Bangladesh`, `turnkey interior solutions Bangladesh`, `commercial interior Bangladesh`, `interior design price in Bangladesh`.
**Bangla variants (use on `/bn` pages):** `নরসিংদীতে ইন্টেরিয়র ডিজাইন`, `নরসিংদী ইন্টেরিয়র ডিজাইন কোম্পানি`, `মাধবদী ইন্টেরিয়র ডিজাইন`, `নরসিংদী আর্কিটেক্ট`, `বিল্ডিং ডিজাইন নরসিংদী`, `নরসিংদীতে বিল্ডিং কনস্ট্রাকশন`, `স্টিল স্ট্রাকচার নরসিংদী`, `ঢাকায় ইন্টেরিয়র ডিজাইন`, `ইন্টেরিয়র ডিজাইন কোম্পানি ঢাকা`, `অফিস ইন্টেরিয়র ডিজাইন`, `বিল্ডিং ডিজাইন ঢাকা`, `থ্রিডি ভিজুয়ালাইজেশন`.

Rules: one primary keyword per page, never the same primary keyword on two pages; place location naturally in H1, title, first paragraph, and image alt.

### 8.2 On-page rules
- One `<h1>` per page containing the primary keyword naturally; logical H2/H3 hierarchy.
- Unique `<title>` (≤ 60 chars) and meta description (≤ 155 chars) per page via `generateMetadata`. Home example: `Interior Design & Construction Company in Dhaka | SB Space`.
- Clean, lowercase, hyphenated URLs: `/services/office-interior-design-dhaka`.
- Self-referencing `canonical` on every page; `hreflang` for `en`/`bn` + `x-default`.
- Open Graph + Twitter Card with a 1200×630 image per page (use `opengraph-image.tsx`).
- Internal linking: every service ↔ related projects ↔ area pages ↔ blog posts; breadcrumbs on all inner pages.
- Descriptive `alt` on every image; no keyword stuffing.
- Minimum copy: 500+ unique words on service/area pages; no duplicated paragraphs across pages.

### 8.3 Structured data (JSON-LD via a `<JsonLd/>` component)
- Sitewide: one `Organization` (parent) + **two `LocalBusiness` entities, one per office** (type `GeneralContractor` / `HomeAndConstructionBusiness`; add `ProfessionalService`), each with `name, url, logo, image, telephone (+8801703880891), email (spacedesignsb@gmail.com), address (PostalAddress for Madhabdi, Narsingdi 1604 / Mohammadpur, Dhaka 1207), geo, openingHoursSpecification, areaServed, sameAs [Facebook, ...]`. Add `Person` markup (`jobTitle`, `worksFor`) for Architect Md. Sarif Hossain Patoary and Engineer Md. Munir Hossain Patoary on the About page.
- `WebSite` with `SearchAction` (only if site search exists).
- `Service` on each service page (`provider`, `areaServed`, `serviceType`).
- `BreadcrumbList` on inner pages.
- `FAQPage` on pages with FAQ.
- `Article`/`BlogPosting` on blog posts.
- `ImageObject`/`VideoObject` for portfolio media.
- `AggregateRating`/`Review` **only if real and visible on the page** (Google penalizes fake markup).
- Validate in Google Rich Results Test.

### 8.4 Technical SEO
- `app/sitemap.ts` (all pages, with `lastModified`, alternates for locales) and `app/robots.ts` (allow all, link sitemap, disallow `/api/`).
- Server-render / statically generate all marketing pages (SSG/ISR). No content that depends on client-only rendering.
- **Core Web Vitals targets:** LCP < 2.5s, INP < 200ms, CLS < 0.1; Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO (mobile).
- `next/image` with explicit width/height, `priority` only on the hero, lazy-load the rest, AVIF/WebP, responsive `sizes`.
- Self-host fonts via `next/font` (`display: swap`), preload only what's needed.
- Hero video: compressed MP4/WebM < 3MB, `poster` image, `preload="metadata"`, muted autoplay loop, disabled on `prefers-reduced-motion` and Save-Data.
- HTTPS only, security headers (CSP, X-Content-Type-Options, Referrer-Policy), gzip/brotli, long cache headers for static assets.
- Custom 404 with links; 301 redirects for any changed URLs; no soft 404s.
- `manifest.ts` + favicon set + `theme-color`.
- No intrusive popups; mobile-friendly layout verified at 360px width.

### 8.5 Local SEO (off-site, include a `docs/LOCAL-SEO-CHECKLIST.md` for the owner)
1. Create/claim **two Google Business Profiles** — one for the Madhabdi office (Narsingdi) and one for the Mohammadpur office (Dhaka). Primary category: Interior Designer (or Architect); secondary: Construction Company, General Contractor, Structural Engineer. Add service areas, hours, photos weekly, services, and the website URL (each profile can link to its office landing page).
2. Keep **NAP** (Name, Address, Phone) identical across site, Facebook, GBP, and directories.
3. Ask every happy client for a **Google review**; reply to all reviews. Put the GBP review link on the site.
4. Submit the site to Google Search Console and Bing Webmaster Tools; submit sitemap.
5. List in local directories (e.g., Bangladeshi business directories, Facebook, LinkedIn, YouTube, Instagram, Pinterest, Houzz).
6. Earn backlinks: partner suppliers, architects, real-estate developers, local news, project features.
7. Publish project videos on YouTube with keyword-rich titles linking back to the site.
8. Embed Google Map on Contact page and each area page.

### 8.5b Blog / content plan (publish 2–4 posts/month, 1,000+ words each)
Starter topics (write EN + BN): "Building construction cost in Narsingdi (2026 guide)", "How to choose an architect in Narsingdi", "Why structural design matters before construction", "Steel structure vs RCC: which is right for you?", "Dental clinic interior design checklist", "Apartment interior design cost in Dhaka (2026 guide)", "How to plan office interior in Dhaka", "Modular kitchen vs. carpenter-made kitchen", "Best false ceiling designs for Bangladeshi homes", "Interior design process: from consultation to handover", "Restaurant interior ideas that increase footfall", "Design + build vs. hiring separate contractors". Each post: keyword-targeted title, TOC, images with alt, FAQ block, internal links to services, CTA.

## 9. Competitor Parity (what similar Dhaka firms show — we must match or beat)

Benchmarked against sites such as Best Interior Design (bestinteriordesign.com.bd), Live Space BD (livespace.bd), Space Planner (spaceplanner247.com), Space Architecture BD (spacearchitecturebd.com), Interior Studio Ace (interioracebd.com), and House De Arch (housedearch.com). Common strengths to match:

- Clear service list covering residential, commercial, office, hospitality, kitchens, furniture, construction
- Project walkthrough **videos** and large photo galleries
- Step-by-step process (site visit → space planning → 2D/3D → materials → execution)
- Phone/WhatsApp prominent, quick "support/inspection request" form
- Years-of-experience and company-story credibility
- Case studies with real sq ft and completion days
- Blog content ranking for cost and layout queries
- Area/neighborhood relevance (Gulshan, Banani, Dhanmondi, etc.)

**Where we beat them:** Apple-level visual polish and speed, in-house architect + structural engineer + steel structure + 3D animation (most interior-only competitors lack this), a strong Narsingdi/Madhabdi presence where competition is thin, two-office local SEO, structured data, bilingual (EN/BN) support, and stronger case studies.

## 10. Content & Copy Guidelines

- Tone: calm, confident, minimal. Short sentences. Benefit-led headlines. Use the brand line as the hero: Bangla "নির্মাণে নতুন মাত্রা, স্বপ্ন হোক বাস্তব!" with English "A new dimension in construction." Final CTA: "আপনার স্বপ্নের প্রজেক্ট বাস্তবায়নে আমাদের সাথে থাকুন".
- Every page ends with a clear CTA. Avoid jargon.
- Use real photos only; if none available yet, use neutral placeholders named `placeholder-*.jpg` and list them in `docs/ASSETS-NEEDED.md`.
- Currency in BDT (৳) where prices appear; phone format `01703-880891` displayed, `+8801703880891` in links/schema.

## 11. Performance & Quality Gates (must pass before "done")

- [ ] `npm run build` succeeds with no TypeScript/ESLint errors
- [ ] Lighthouse mobile ≥ 95 in all four categories on Home, a Service page, a Project page
- [ ] All images have `alt`; no layout shift on load
- [ ] Sitemap and robots reachable; metadata unique on every page
- [ ] JSON-LD validates in Rich Results Test
- [ ] Contact form works end-to-end with validation and success/error states
- [ ] Fully responsive 360px → 1920px; keyboard and screen-reader friendly
- [ ] `prefers-reduced-motion` respected
- [ ] README with setup, env vars (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_SITE_URL`), and deploy steps

## 12. Build Order for Cursor

1. Scaffold Next.js + Tailwind + fonts + design tokens + `site.ts` content file.
2. Build layout: Nav, Footer, floating WhatsApp/Call, global styles.
3. Build Home page sections with placeholder content.
4. Build Services index/detail, Projects index/detail, Process, About, Contact (+ API route).
5. Add SEO layer: metadata helpers, JSON-LD, sitemap, robots, OG images, breadcrumbs.
6. Add Blog (MDX), Area pages, FAQ page.
7. Add i18n (`en`/`bn`) — required, with Bangla copy for Home, Services, About, Contact.
8. Optimize performance, accessibility, run Lighthouse, fix issues.
9. Write README + `docs/LOCAL-SEO-CHECKLIST.md` + `docs/ASSETS-NEEDED.md`.

**Start with step 1 now and proceed step by step, confirming each step builds before moving on.**
