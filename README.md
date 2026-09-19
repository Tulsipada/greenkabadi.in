# GreenकBadi Website (React + Vite SSR)

Marketing website matching the HTML mockup, built with **Vike** (Vite SSR) + React.

## Pages

| Route | Content |
|-------|---------|
| `/` | Landing (hero, how it works, materials, rates, business, app, FAQ, contact) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

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
