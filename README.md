# Closebook site

Landing page for the Closebook prototype, in Thai. Built from the free
[AstroWind](https://github.com/arthelokyo/astrowind) template (MIT, see
`LICENSE.md`) with Astro and Tailwind CSS. Static output, no backend.

> The page describes a **prototype on synthetic data**. It does not claim real
> customers, real accuracy, pricing or integrations that do not exist.

## Run

Needs Node.js 22.22.3 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
```

## What was changed from the template

- Thai-first copy in `src/pages/index.astro`; template demo pages, blog and
  placeholder legal pages removed.
- Palette (cream, ink, teal, rust) in `src/components/CustomStyles.astro`; light mode only.
- Font: IBM Plex Sans Thai through Astro's Fonts API (`astro.config.ts`).
- Thai headings get looser line height and letter spacing, because the template's
  tight English settings made tone marks collide with the line above.
- Logo, navigation and footer replaced (`src/components/Logo.astro`, `src/navigation.ts`).
- `public/demo/index.html` is a copy of `closebook-demo/demo.html`. Rebuild the demo
  and copy it again when it changes. `public/closebook-demo-phone.png` is a screenshot of it.

## Before publishing

- Set the real domain in `src/config.yaml` (`site.site`).
- The site is set to `noindex` and `robots.txt` disallows everything. Change both
  when you want search engines to find it.
- Add a privacy policy and terms before collecting any visitor data. The
  template's placeholder pages were removed on purpose.
- Keep `LICENSE.md`: the MIT licence requires the copyright notice to stay with the code.
