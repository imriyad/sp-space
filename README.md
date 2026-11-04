# SB space design & construction — Website

Production-ready bilingual (English / Bangla) marketing site for **SB space design & construction**, built with Next.js App Router.

Spec: [`docs/SB-Space-Website-Spec.md`](docs/SB-Space-Website-Spec.md)

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS v4
- next-intl (`/en`, `/bn`)
- Framer Motion (respects `prefers-reduced-motion`)
- Resend contact API + honeypot + rate limit
- GA4 via `next/script` (optional env)

## Local setup

```bash
cd sb-space-website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/en` or `/bn`.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Environment variables

See [`.env.example`](.env.example):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (no trailing slash) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Search Console meta verification |
| `RESEND_API_KEY` | Send contact emails via Resend |
| `CONTACT_TO_EMAIL` | Inbox for quote requests |
| `CONTACT_FROM_EMAIL` | Verified Resend from address |

Without `RESEND_API_KEY`, the contact API validates the request and logs the message (useful in local/dev).

## Content editing

All business data lives in `src/content/`:

- `site.ts` — name, offices, phones, social, stats, testimonials
- `services.ts`, `projects.ts`, `faqs.ts`, `areas.ts`, `blog.ts`, `process.ts`

Never invent prices, reviews, awards, or years. Empty `testimonials` / `stats` / social URLs hide those UI pieces.

## Deploy (Vercel)

1. Push this repo to GitHub/GitLab.
2. Import the project in [Vercel](https://vercel.com).
3. Set env vars from `.env.example`.
4. Deploy. Add the custom domain with HTTPS and a single canonical host (`www` → apex or reverse) via 301.

## Quality docs

- [`docs/ASSETS-NEEDED.md`](docs/ASSETS-NEEDED.md) — photos, logo, hours, reviews still required
- [`docs/LOCAL-SEO-CHECKLIST.md`](docs/LOCAL-SEO-CHECKLIST.md) — two GBPs, citations, Search Console

## Offices

1. Madhabdi — Rhine OK Market, Narsingdi 1604  
2. Mohammadpur — P.C Culture Housing, Dhaka 1207  

Phone: `01703-880891` · WhatsApp: same · Email: `spacedesignsb@gmail.com`
