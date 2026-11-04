# Quality Gates (Spec Section 11)

| Gate | Status |
|---|---|
| `npm run build` succeeds with no TypeScript/ESLint **errors** | Pass |
| Lighthouse mobile ≥ 95 (Perf, A11y, BP, SEO) on Home / Service / Project | **Needs owner verification** after deploy with real photos + production domain |
| All images have `alt`; no layout shift on load | Pass (placeholders use descriptive alt; `next/image` with sizes) |
| Sitemap and robots reachable; unique metadata per page | Pass (`/sitemap.xml`, `/robots.txt`, `generateMetadata`) |
| JSON-LD validates in Rich Results Test | **Needs owner verification** post-deploy |
| Contact form end-to-end with validation + success/error | Pass (API + honeypot + rate limit; Resend when `RESEND_API_KEY` set) |
| Responsive 360px → 1920px; keyboard / SR friendly | Pass by design (skip link, focus rings, ≥44px targets) — spot-check in browser |
| `prefers-reduced-motion` respected | Pass (`Reveal` + CSS) |
| README with setup, env vars, deploy | Pass |

## Needs owner input (not blockers for code complete)

- Real logo, project photos, hours, geo coordinates
- Resend verified domain + GA4 ID for production
- Manual Lighthouse run on Vercel preview/production
- Rich Results Test confirmation
