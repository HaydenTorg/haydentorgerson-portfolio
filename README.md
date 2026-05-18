# haydentorgerson.com

Personal portfolio site. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed on Vercel.

## Commands

| Command           | Action                                |
| ----------------- | ------------------------------------- |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Start dev server at `localhost:4321`  |
| `npm run build`   | Build the static site to `./dist/`    |
| `npm run preview` | Preview the production build locally  |

## Updating content

All site content lives in [`src/data/`](src/data/).

- Add a new timeline entry → append to the `timeline` array in [`src/data/timeline.ts`](src/data/timeline.ts). Entries render in array order (oldest → newest). Set `current: true` on the entry that should get the green pulsing dot.
- Update bio, name, tagline, skills, email, or LinkedIn → [`src/data/profile.ts`](src/data/profile.ts).

Then `git push` — Vercel rebuilds automatically.

## Replacing the resume

[`public/resume.pdf`](public/resume.pdf) is a regular static file. To swap it, drop a new PDF at that path with the same name and push.

## Project structure

```
src/
├── components/   Astro components (Hero, Timeline, Footer, ...)
├── data/         Single source of truth for site content
├── layouts/      Page shell (head, fonts, meta)
├── pages/        Routes (just index.astro)
└── styles/       global.css with design tokens
public/
├── faceshot.jpg  Portrait shown in the hero
└── resume.pdf    Downloadable resume
```

## Design tokens

Defined in [`src/styles/global.css`](src/styles/global.css) via Tailwind v4 `@theme`:

- `--color-bone` `#FAF9F6` — page background
- `--color-ink` `#111` — primary text
- `--color-muted` `#6B6B6B` — secondary text
- `--color-current` `#16A34A` — pulsing dot for the current entry
- `--font-sans` — Inter
- `--container-prose` `48rem` — single-column max width

## Deployment

The project deploys to Vercel from a GitHub repo. Vercel auto-detects Astro — no config needed. Custom domain (`haydentorgerson.com`) is wired through Vercel's domain settings.
