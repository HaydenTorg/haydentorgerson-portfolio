# haydentorgerson.com

Personal portfolio site for Hayden Torgerson. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed on Vercel.

## Commands

| Command           | Action                                |
| ----------------- | ------------------------------------- |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Start dev server at `localhost:4321`  |
| `npm run build`   | Build the static site to `./dist/`    |
| `npm run preview` | Preview the production build locally  |

## Updating content

All site content lives in [`src/data/`](src/data/). To add a new role:

1. Open [`src/data/experience.ts`](src/data/experience.ts).
2. Append a new object to the `experience` array (entries render oldest → newest, top to bottom).
3. Commit + push — Vercel rebuilds automatically.

Same flow for [`src/data/education.ts`](src/data/education.ts) and [`src/data/profile.ts`](src/data/profile.ts) (bio, skills, social links).

## Project structure

```
src/
├── components/   Astro components (Hero, Timeline, Footer, ...)
├── data/         Single source of truth for site content
├── layouts/      Page shell (head, fonts, meta)
├── pages/        Routes (just index.astro for now)
└── styles/       global.css with design tokens
public/
├── faceshot.jpg  Portrait shown in the hero
├── hero.jpg      Pexels nature image (banner)
└── resume.pdf    Downloadable resume (drop in when ready)
```

## Design tokens

Defined in [`src/styles/global.css`](src/styles/global.css) via Tailwind v4 `@theme`:

- `--color-bone` `#FAF9F6` — page background
- `--color-ink` `#111` — primary text
- `--color-muted` `#6B6B6B` — secondary text
- `--font-sans` — Inter
- `--container-prose` `44rem` — single-column max width

## Deployment

The project deploys to Vercel from a GitHub repo. Vercel auto-detects Astro — no config needed. Custom domain (`haydentorgerson.com`) is wired up through Vercel's domain settings.

## Credits

- Hero image: "Misty Desert Landscape with Rolling Hills" by Kaiwalya Limaye on [Pexels](https://www.pexels.com/photo/misty-desert-landscape-with-rolling-hills-30158486/).
