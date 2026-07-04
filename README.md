# Dribball

The official website for **Dribball** — an original full-contact ball sport that
mashes soccer and basketball into one bouncy, high-energy game.

> Two nets. Eight on a side (7 field + 1 goalie). One custom bouncy foam ball.
> Dribble with your feet, bounce with your hand, kick it to a teammate.
> Kick it in the net for **2**, throw it in for **1**. Full contact — no grabbing, no holding.

## Tech

- [React 18](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) build tooling
- Plain CSS design system (no UI framework) — bold & sporty, built around the
  mustard-yellow ball with electric-violet and coral accents.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — the pitch, the gist, scoring, the signature dribble rule |
| `/how-to-play` | How to Play — step-by-step setup + do/don't reference |
| `/rules` | Rules — the structured rulebook |
| `/about` | About — the story behind the game |

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Editing the rules

All rules content lives in [`src/data/rules.js`](src/data/rules.js). The Rules
page renders whatever is in that file, so the **full official rules list** can be
dropped in by adding entries to the `sections` array — no component changes
needed. The `pending` flag on a section renders a "coming soon" note.

## Notes

- Client-side routing: when deploying to static hosts, add a SPA fallback so deep
  links (e.g. `/rules`) serve `index.html`. A Netlify `_redirects` file is
  included in `public/`.
