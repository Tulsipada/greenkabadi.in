# GreenकBadi Website (React + Vite SSR)

Marketing website matching the HTML mockup, built with **Vike** (Vite SSR) + React.

## Pages

| Route | Content |
|-------|---------|
| `/` | Landing (hero, how it works, materials, rates, business, app, FAQ, contact) |
| `/privacy` | Privacy Policy (Google Play / app store URL) |
| `/terms` | Terms & Conditions (Google Play / app store URL) |

Languages: English · हिन्दी · বাংলা · नेपाली (same keys as mockup).

## Develop

```sh
cd greenkabadi_website
npm install
npm run dev
```

Open http://localhost:3000 (Vike default).

## Build / preview (SSR)

```sh
npm run build
npm run preview
```

## Stack

- Vite + Vike SSR
- React 19
- TypeScript
- Mockup CSS (`public/styles/website.css`) + brand tokens

Hero/material photos live in `public/img/` (not `/assets/` - that path conflicts with Vite’s JS bundles).

## SEO

- Meta title/description + Open Graph / Twitter (via Vike `title`, `description`, `image` + `pages/+Head.tsx`)
- JSON-LD: LocalBusiness, WebSite, FAQPage (home), BreadcrumbList (legal pages)
- `public/robots.txt` and `public/sitemap.xml` (domain: `greenkabadi.in`)
- `public/site.webmanifest`
- Prerendered HTML (`prerender: true`) for crawlers

After deploy, submit `https://greenkabadi.in/sitemap.xml` in Google Search Console.
