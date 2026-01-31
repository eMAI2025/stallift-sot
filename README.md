# StalLIFT SoT (Source of Truth)

Repozytorium kanoniczne dla:
- manifestów operacyjnych (JSON5),
- rejestrów (artifact/task/id counters),
- decision log + worklog,
- narzędzi pomocniczych do utrzymania spójności.

## Struktura
- `manifest/`
  - `stallift_operational_manifest_vX.Y.Z.json5` — kanoniczny snapshot manifestu
  - `patches/` — przyrosty/łatki do kolejnej wersji (np. `v1.7.6__additions.json5`)
- `registry/`
  - `artifact-registry.json5` — rejestr artefaktów
  - `task-registry.json5` — rejestr zadań
  - `id-counters.json5` — liczniki ID (unikalność)
  - `decision-log.md` — log decyzji (dlaczego)
  - `worklog/` — dzienniki pracy (co zrobiono)
- `docs/` — instrukcje integracyjne (Perplexity/GPT itp.)
- `tools/` — skrypty utrzymaniowe (np. aktualizacja liczników)

## Zasada wdrożenia (pinowanie)
Systemy konsumujące SoT NIE powinny brać `main` “na żywo”.
Zawsze pinuj do tagu: `stallift-sot-vX.Y.Z`.

## Workflow wersjonowania (minimalny)
1. Dodaj patch do `manifest/patches/` (jeśli dotyczy).
2. Zaktualizuj snapshot manifestu w `manifest/`.
3. Zaktualizuj `registry/*` + dopisz wpis do `registry/decision-log.md`.
4. Dopisz wpis do `registry/worklog/worklog__YYYY-MM-DD.md`.
5. Commit → tag → push tag.
