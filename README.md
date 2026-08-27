# Ibrahim Adlani — Portfolio

Personal portfolio and online résumé, built with the Next.js App Router and Tailwind CSS.
Live at **[ibrahimadlani.fr](https://ibrahimadlani.fr)**.

## Stack

- **[Next.js 14](https://nextjs.org/)** (App Router, JavaScript) — every route is statically prerendered.
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling, dark mode driven by a class on `<html>`.
- **[next-themes](https://github.com/pacocoursey/next-themes)** — theme persistence and system-preference support.
- **[Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/)** — unit and rendering tests.
- **AWS Amplify** — continuous deployment from `main`.

## Getting started

Requires **Node.js 20+** and npm 10+.

```bash
git clone https://github.com/ibrahimadlani/ibrahimadlani.git
cd ibrahimadlani
npm install
npm run dev
```

The site is then served at <http://localhost:3000>.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reloading. |
| `npm run build` | Production build; `postbuild` regenerates `sitemap.xml` and `robots.txt`. |
| `npm start` | Serve the production build (run `npm run build` first). |
| `npm run lint` | ESLint via `next lint`. |
| `npm test` | Run the Jest suite once. |
| `npm run test:watch` | Re-run the affected tests as files change. |

## Project structure

```
app/                  Routes. Only app/layout.js renders <html> and <body>.
  layout.js           Root layout: fonts, global metadata, client providers.
  page.js             Homepage.
  not-found.js        404 page.
  articles/           Articles index (nothing published yet).
  certifications/     Full certifications table.
  opengraph-image.png Social preview, picked up automatically by Next.
  images/             Imported by components — see "Assets" below.
  styles/globals.css  Tailwind entry point — see "Assets" below.
components/
  layout/             Client boundary: ThemeProvider and the cursor gradient.
  ui/                 Shared primitives: Section, ArrowLink, BackLink.
  icons/              Single-purpose SVG components.
  <Feature>/          One folder per section, e.g. Experience/ Education/.
data/                 All copy and links live here, not in the components.
lib/                  site.js (canonical URL, name) and resume.js.
__tests__/            Jest suites.
```

Content is deliberately separated from presentation: to add a job, a diploma, a
project or a certification, edit the matching file in `data/` — no component
needs to change. `data/certifications.js` feeds both the homepage cards and the
`/certifications` table.

Imports across top-level folders use the `@/` alias defined in `jsconfig.json`
(`@/components/…`, `@/data/…`, `@/lib/…`); imports within a folder stay relative.

## Theming

`next-themes` writes a `light` or `dark` class onto `<html>`, which Tailwind's
`darkMode: "class"` reads. In components, always branch on **`resolvedTheme`**,
never on `theme`: the latter can be the literal string `"system"`, which silently
fails every `theme === "dark"` comparison. `lib/resume.js` wraps that rule for
the theme-specific résumé PDFs.

## Assets

⚠️ **Do not move `app/styles/globals.css` or `app/images/`.** Two Tailwind
arbitrary values reference images by path —
`lg:cursor-[url('../../app/images/cursor_monkey.png'),_pointer]` in
`components/About/KorokEffect.js` and `list-image-[url(../../app/images/tick.svg)]`
in `components/Experience/ExperienceItem.js`. PostCSS resolves those relative to
the **CSS entry point**, not to the component, so moving either directory breaks
them silently — the build still succeeds and the images just stop loading.

## Testing

```bash
npm test
```

The suite covers the shape of everything in `data/` (required fields, absolute
`https` URLs, ordering, uniqueness), the résumé helper, and the rendering and
accessible names of the list components.

## Deployment

AWS Amplify builds and deploys every push to `main`:

```yaml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
```

`sitemap.xml` and `robots.txt` are generated during the build by
[next-sitemap](https://github.com/iamvishnusankar/next-sitemap) and are not
committed. The canonical origin is defined once in `lib/site.js` and mirrored in
`next-sitemap.config.js`; a test fails if the two drift apart.

## Contact

[ibrahim@adlani.com](mailto:ibrahim@adlani.com)
