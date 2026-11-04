# Assets Needed from Owner

Replace placeholders before launch. Until then, the site uses labelled SVG placeholders under `public/images/placeholder-*.svg` and `public/og/default.svg`.

## Brand

| Asset | Notes | Status |
|---|---|---|
| Logo (SVG + PNG) | Transparent preferred; light & dark variants | Missing — `site.logo` empty |
| Favicon / app icon | 512×512+ | Placeholder `public/icons/icon.svg` |
| Default OG image | 1200×630 JPG/PNG | Placeholder `public/og/default.svg` |

## Project photography

Provide **6–12 project sets** with captions. Prefer originals ≥ 1600px wide.

For each project:

- Cover + 4–10 gallery photos
- Title, location (area, city)
- Type (residential / commercial / clinic / etc.)
- Area (sq ft) — optional but valuable
- Year and duration — optional
- Short overview: client need, solution, result
- Related service slugs

Known starter project from Facebook:

- **Dental Clinic Interior — Uttara, Dhaka** (`dental-clinic-interior-uttara`) — photos still needed from Facebook post

## Video / animation

| Asset | Notes |
|---|---|
| Hero video (optional) | MP4/WebM &lt; 3MB + poster image |
| Project walkthroughs | YouTube links or hosted files |

## Business data still missing

| Field | Placeholder in code |
|---|---|
| Opening hours | `site.hours` empty string |
| Office lat/lng | `office.lat` / `office.lng` null |
| Extra service areas | only confirmed areas listed |
| Instagram / YouTube / LinkedIn | empty → icons hidden |
| Real testimonials / reviews | `site.testimonials = []` → section hidden |
| Stats (projects, years, sq ft) | `site.stats = []` → section hidden |
| IAB / IEB licence proof images | About page placeholder note |
| Warranty / payment policy exact terms | FAQ placeholders marked |

## Social proof

- Google Business Profile review links (one per office)
- Permissioned client quotes with names

When assets arrive, drop files into `public/images/` with descriptive names (e.g. `uttara-dental-clinic-reception.webp`) and update `src/content/projects.ts` / `site.ts`.
