# Blog / Publikacje eksperckie — Current

## Current candidate
Artifact: `StalLIFT_BLOG_v1.3_REFINED_FULL_2026-09-10.zip`
Known SHA-256 from project history:
`b274b0b6330fe1d9f2288ffb9e029f36034e4b18623c1c35cbc05a2e1b412542`

Status: CANDIDATE / NOT OWNER-FROZEN.

## Runtime
Current candidate is a server-backed Node application and is expected to include:
- `server.mjs`;
- `package.json`;
- local-demo launchers;
- `public/`;
- `admin/`;
- `data/`;
- Docker support.

Local execution pattern:
`ADMIN_USER`, `ADMIN_PASSWORD`, `PORT=8080`, then `node ./server.mjs`.

## Owner decisions currently binding
- full cover must remain visible; do not crop important cover content;
- no flip cards;
- carousel only as one selectable presentation mode;
- carousel manual/drag/swipe, no jitter;
- collage and graphical TOC are alternative modes, not simultaneous blocks;
- article cards always show part label and full title;
- minor teaser may reveal on hover/focus desktop;
- one-card row uses editorial horizontal layout left/right;
- admin must persist presentation mode;
- admin must warn about unsaved changes;
- preview route is context-specific;
- admin must fit normal desktop at 100% zoom;
- dark theme requires another visual pass toward black/graphite;
- public version labels must not appear in footer.

## Assets
Use optimized WebP for public rendering where practical. Keep source SVG separately if needed. Social/account icons must be visible in both themes.

## Publication gate
Do not call production-final until Owner has rechecked:
1. desktop at 100%;
2. mobile;
3. light/dark;
4. admin save/reload;
5. carousel/collage/TOC switching;
6. unsaved changes warning;
7. contextual preview;
8. account routing;
9. full-cover rendering;
10. footer/header and icons.
