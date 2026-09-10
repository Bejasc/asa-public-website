# Australis Space Alliance — Home Page

The public landing page for the Australis Space Alliance (ASA) Star Citizen organisation.

This is a standalone [Quasar](https://quasar.dev) (Vue 3 + Vite) single-page app — the public
marketing site, deployable as static files to any host.

## Requirements

- Node.js **22.22.0 or newer** (required by `@quasar/app-vite`)
- The Quasar CLI: `npm i -g @quasar/cli` (or run via `npx quasar`)

## Install dependencies

```bash
npm install
```

## Run in development (hot reload)

```bash
npm run dev
```

The dev server opens a browser window automatically.

## Build for production

```bash
npm run build
```

The static site is emitted to `dist/spa/`, ready to deploy to any static host.

## Project layout

```
index.html                  Page shell (title, meta tags, favicons)
quasar.config.ts            Quasar / Vite build configuration
public/                     Static assets served as-is (background images, favicons)
src/
  App.vue                   Root component
  router/                   Vue Router (single home route + 404)
  layouts/HomeLayout.vue    Page header + layout shell
  pages/HomePage.vue        The home page content
  pages/ErrorNotFound.vue   404 page
  components/DiagonalSlice.vue  Angled section divider used on the home page
  css/                      Global styles and Quasar SCSS variables
  assets/images/            Logos used on the page
```

All imagery is served locally from `public/` and `src/assets/` — the app has no
external CDN dependencies.

The social-sharing meta tags in `index.html` (`og:image`, `twitter:image`,
`twitter:card`) reference `https://asaorg.au/...`, matching the site's `og:url`.
Social crawlers require absolute URLs, so if the site is deployed to a different
domain, update those three URLs (and `og:url`) to that domain. The referenced
files already live under `public/icons/`.
