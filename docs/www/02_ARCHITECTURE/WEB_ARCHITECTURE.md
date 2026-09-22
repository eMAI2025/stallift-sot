# StalLIFT Web Architecture

## Public layer
`stallift.com`
- `/` corporate one-page
- `/blog/` publications
- `/konfig/` public configurator UI

## Repositories
- `eMAI2025/stallift-www` — deploy/preview/public website code.
- `eMAI2025/stallift-assets` — public assets.
- `eMAI2025/stallift-sot` — canonical decisions and handoff; target visibility PRIVATE.

## Local-only execution boundary
The web layer must not contain executable Excel calculation workbooks, formulas, pricing logic or proprietary calculation algorithms. Those assets are held locally by Owner. The web application may only exchange explicitly approved input/output data across a defined interface.

## Publication architecture
Blog is server-backed in the current candidate:
- Node server `server.mjs`;
- public frontend;
- admin frontend;
- content persistence;
- comments/reactions;
- SEO generation.

## Corporate page
Prefer one-page navigation for lightweight sections. Separate media-heavy portfolio when justified by loading cost.

## Deployment rule
Public preview may be deployed from `stallift-www`; internal SoT must not be used as a public build source.
