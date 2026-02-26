# B.O.D Republic — Website (React + Tailwind)

High-standard landing site for the **B.O.D Republic** personal brand + community hub.

## Tech

- React + TypeScript (Vite)
- Tailwind CSS
- React Router

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## What’s implemented

- **Home / Landing page**: hero, CTA buttons, stats, X highlight placeholders, influencer/advertising section
- **Future routes included** (show **Coming soon**):
  - `/about`
  - `/community`
  - `/media`
  - `/shop`
  - `/advertise`

## Customize for the client

Edit the site constants in:

- `src/config/site.ts` (name, tagline, X handle placeholder, partnerships email, citizen count)

## Project structure

- `src/pages/*`: route pages
- `src/components/layout/*`: navbar, footer, site layout
- `src/components/ui/*`: tiny UI primitives (buttons)
- `src/lib/*`: utilities (className merge)
