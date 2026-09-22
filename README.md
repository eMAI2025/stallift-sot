# StalLIFT SoT (Source of Truth)

Repozytorium kanoniczne dla:
- manifestów operacyjnych (JSON5),
- rejestrów (artifact/task/id counters),
- decision log + worklog,
- narzędzi pomocniczych do utrzymania spójności,
- Source of Truth dla ekosystemu WWW StalLIFT.

## WWW — current entrypoint
Dla prac nad stroną, blogiem i konfiguratorem zacznij od:
1. `docs/www/00_CURRENT/THREAD_HANDOFF_2026-09-22.md`
2. `docs/www/00_CURRENT/STATUS_CURRENT.md`
3. `docs/www/00_CURRENT/NEXT_ACTION.md`

Decyzje: `docs/www/01_DECISIONS/WEB_DECISIONS_CURRENT.md`  
Architektura: `docs/www/02_ARCHITECTURE/WEB_ARCHITECTURE.md`  
Design system: `docs/www/03_DESIGN_SYSTEM/STALIFT_WEB_DESIGN_SYSTEM_CURRENT.md`  
Blog: `docs/www/04_BLOG/BLOG_CURRENT.md`  
Granica LOCAL-ONLY: `docs/www/05_SECURITY/LOCAL_ONLY_BOUNDARY.md`  
SEO/AI Search: `docs/www/06_SEO/SEO_AI_SEARCH.md`

## Ważna granica
Wykonawcze kalkulatory Excel, wzory, algorytmy, ceny i logika obliczeń pozostają lokalnie u Ownera i nie są umieszczane w GitHub ani w warstwie publicznej WWW.

## Rekomendowana widoczność
To repo powinno być PRIVATE, ponieważ zawiera wewnętrzny kontekst decyzji i handoff. Publiczny preview/kod wykonawczy pozostaje w osobnym repo `eMAI2025/stallift-www`.

## Struktura
- `manifest/`
  - `stallift_operational_manifest_vX.Y.Z.json5` — kanoniczny snapshot manifestu
  - `patches/` — przyrosty/łatki do kolejnej wersji
- `registry/`
  - rejestry i decision/worklog
- `docs/` — dokumentacja integracyjna i SoT
- `tools/` — skrypty utrzymaniowe

## Zasada wdrożenia (pinowanie)
Systemy konsumujące SoT NIE powinny brać `main` „na żywo”. Zawsze pinuj do tagu `stallift-sot-vX.Y.Z`.

## Workflow wersjonowania
1. Zaktualizuj odpowiednie dokumenty/manifest.
2. Zaktualizuj registry.
3. Dopisz worklog.
4. Commit.
5. Po Owner approval: tag.
