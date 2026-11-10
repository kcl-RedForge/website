# KCL RedForge website

The website for KCL RedForge, King's College London's student engineering team. Built with [Astro](https://astro.build) and hosted free on GitHub Pages. Every change pushed to `main` goes live in about a minute.

## Editing the site (no coding needed)

Everything you'd normally want to change is a small text file. Open it on GitHub, click the pencil icon, edit, and press **Commit changes**.

| To change… | Edit this |
| --- | --- |
| Apply link, open/closed status, review cycle, season, contact email, Instagram | `src/data/site.json` |
| About text | `src/content/sections/about.md` |
| Apply section text | `src/content/sections/apply.md` |
| Sponsors text | `src/content/sections/sponsors.md` |
| A project (ERC, Lunabotics, MachX) | `src/content/projects/*.md` |
| Add a team member | copy `src/content/team/_example.md` to `src/content/team/firstname-lastname.md` and fill it in |
| Add a sponsor | copy `src/content/sponsors/_example.md` to `src/content/sponsors/company-name.md` |
| Images | upload to `public/images/` and refer to them as `/images/name.jpg` |

Notes:
- Files starting with `_` never show on the site; they're templates.
- The team section shows a "core team forming" panel until the first member file exists.
- Applications are rolling (always open, reviewed weekly: `"reviewCycle"` in `site.json`). If they ever need to close, set `"applicationsOpen": false` and the buttons switch to a "follow us on Instagram" message.
- If a change breaks the build, the live site stays on the last good version. Check the **Actions** tab to see what went wrong.

## Style

Follow the KCL RedForge design system: void black, one red thing per section, Archivo 125% capitals for titles, IBM Plex Mono `// status lines`. No emoji, no exclamation marks, no hype words. Team photos are shown in greyscale automatically.

## Custom domain

1. Buy the domain (e.g. from Cloudflare or Porkbun).
2. Add a file `public/CNAME` containing just the domain, e.g. `kclredforge.co.uk`.
3. At the domain registrar, point it at GitHub Pages ([GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. In the repo, Settings → Pages → Custom domain, enter it and tick **Enforce HTTPS**.

The site works out its own address, so nothing else needs changing.

## Running it locally (optional)

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

`node tools/render-images.mjs` regenerates the link preview image (`public/og.png`) and app icons. It needs Playwright.
