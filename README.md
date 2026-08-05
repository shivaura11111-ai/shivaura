# GreennBugg House Deziign — Next.js + TypeScript

A pixel-matched rebuild of the GreennBugg House Deziign homepage using
**Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Fully
responsive (mobile, tablet, desktop) with the same sections, copy, colors,
icons, and layout as the original page.

## 1. Extract & Install

```bash
unzip greenbugg-nextjs.zip
cd greenbugg-nextjs
npm install
```

## 2. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

## 3. Build for production

```bash
npm run build
npm start
```

## Project structure

```
greenbugg-nextjs/
├── public/
│   └── images/            # Site images (see note below)
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout: fonts, metadata, Header/Footer/WhatsApp
│   │   ├── page.tsx       # Home page — composes all sections
│   │   └── globals.css    # Tailwind base + custom utility classes
│   ├── components/
│   │   ├── Header.tsx           # Sticky nav + mobile menu
│   │   ├── Hero.tsx             # Hero banner + stats bar
│   │   ├── ConsultationForm.tsx # "Get Free Consultation" card form
│   │   ├── StatsBar.tsx         # 10+ / 100+ / 50+ / 10+ stats strip
│   │   ├── About.tsx            # About Us section
│   │   ├── Leadership.tsx       # Leadership team cards
│   │   ├── Services.tsx         # 10 service cards
│   │   ├── Process.tsx          # 6-step design process
│   │   ├── WhyUs.tsx            # Why choose us grid
│   │   ├── FAQ.tsx              # Accordion FAQ + JSON-LD
│   │   ├── CTA.tsx              # Final call-to-action band
│   │   ├── Footer.tsx           # Footer with links + contact info
│   │   └── WhatsAppButton.tsx   # Floating WhatsApp button
│   └── data/
│       ├── services.ts    # Services content
│       ├── leadership.ts  # Leadership team content
│       └── content.ts     # Process steps, why-us, FAQ, stats, nav links
├── tailwind.config.ts      # Custom color palette (deepgreen/gold/charcoal/offwhite/beige)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## About the images

The original page was captured as a saved HTML snapshot, which only
contains **references** to images (not the actual image files). This
project ships with generated placeholder images at the exact same
filenames the site expects, so it runs out of the box:

- `public/images/luxury-villa-with-water-feature.jpg` — hero background
- `public/images/about-studio.jpg` — About section photo
- `public/images/ceo.jpg`, `coo.webp`, `hr.jpg`, `architec.jpg` — leadership photos

**Replace these with your real photos** (keep the same filenames, or update
the `src` paths in `src/components/*.tsx` / `src/data/leadership.ts`) to get
an exact visual match to the live site.

## Notes

- All navigation links point to route paths (`/about`, `/services`, `/projects`,
  `/contact`, etc.) that mirror the original site's structure. This build
  only includes the **home page** (that's what was in the source snapshot);
  add the corresponding `src/app/about/page.tsx`, `src/app/services/page.tsx`,
  etc. if you want those pages built out too.
- Icons are from [lucide-react](https://lucide.dev), matching the icon set
  used on the original site.
- Fonts: Playfair Display (headings, `font-display`) + Inter (body),
  loaded via `next/font/google`.
- The consultation form and FAQ accordion are interactive (client
  components); wire the form's `handleSubmit` in
  `src/components/ConsultationForm.tsx` up to your backend/email service.
