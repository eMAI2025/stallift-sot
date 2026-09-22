# THREAD HANDOFF — StalLIFT WWW
Data: 2026-09-22  
Status: CURRENT / HANDOFF

## Cel
Kontynuacja budowy spójnego ekosystemu webowego StalLIFT:
1. Publikacje eksperckie / blog.
2. Strona firmowa.
3. Konfigurator ofertowy.
4. Jeden wspólny design system, header, footer, light/dark, nawigacja i responsywność.

## Stan repozytoriów
- `eMAI2025/stallift-www` — PUBLIC, repo wykonawcze/preview obecnej strony.
- `eMAI2025/stallift-assets` — PUBLIC, assety.
- `eMAI2025/stallift-sot` — obecnie PUBLIC; rekomendacja Ownera/Asystenta: zmienić na PRIVATE, ponieważ repo ma przechowywać pełny log decyzji i kierunek projektu.

## Najważniejsza granica
Wykonawcze kalkulatory Excel NIE znajdują się w sieci i nie mają być dodawane do GitHub. Dotyczy to również wzorów, algorytmów, cenników i logiki obliczeń. W repo można zapisać wyłącznie fakt istnienia lokalnego silnika i interfejsową granicę integracji.

## Publiczny routing docelowy
- `https://stallift.com/` — strona firmowa.
- `https://stallift.com/konfig/` — konfigurator.
- `https://stallift.com/blog/` — publikacje eksperckie.

## Wspólny kierunek UI
- jeden szablon dla WWW / blog / konfigurator;
- sticky header;
- wordmark StalLIFT po lewej;
- główne zakładki: StalLIFT / Kalkulator / Blog-Publikacje;
- przełącznik light/dark;
- Facebook + LinkedIn;
- ikona konta na końcu;
- po zalogowaniu ikona konta prowadzi do właściwego panelu, nie do logowania;
- przyciski nawigacji z subtelnym odbiciem;
- active = firmowy `#005195`;
- bez agresywnych neonów.

## Blog — najważniejsze decyzje
- duży nagłówek `PUBLIKACJE EKSPERCKIE`; usunąć powtórzony mały napis o tej samej treści;
- autor domyślnie `Paweł Strzelecki`, pole edytowalne w adminie;
- opcjonalny blok `O autorze`: zdjęcie, bio, LinkedIn, pokaż/ukryj;
- prezentacja serii na homepage osobna od prezentacji artykułów wewnątrz cyklu;
- wewnątrz cyklu Owner wybiera JEDEN wariant górnej prezentacji: karuzela / kolaż / graficzny spis treści;
- nie wyświetlać tych trzech wariantów jednocześnie;
- karuzela: bez flipu i bez automatycznego trzęsącego przesuwania; drag/swipe; kilka okładek widocznych naraz; klik otwiera artykuł;
- okładki mają być widoczne w całości, bez agresywnego crop;
- artykuły: układy 2 / 3 / FEATURE oraz pojedynczy poziomy `grafika-lewo/tekst-prawo` lub odwrotnie;
- na karcie zawsze widoczny numer części i pełny tytuł; najmniejszy opis może pojawiać się dopiero po hover/focus;
- mobile nie może zależeć od hover.

## Admin — decyzje
- light/dark również w adminie;
- pełny panel ma być wygodny przy 100% zoom na typowym desktopie;
- wybór presentation mode musi rzeczywiście zapisywać się w backendzie;
- podgląd kontekstowy:
  - ustawienia bloga -> homepage,
  - cykl -> ten cykl,
  - artykuł -> ten artykuł;
- wykrywanie unsaved changes + ostrzeżenie przed wyjściem/odświeżeniem;
- jedno konto admin z pełnym dostępem na obecnym etapie;
- później zwykłe konto czytelnika;
- komentarze: zalogowany użytkownik normalnie; gość po prostej weryfikacji e-mail bez zakładania konta;
- komentarze i reakcje osobno dla cyklu i dla artykułu;
- moderacja komentarzy w adminie.

## Dark mode
Ostatnia ocena Ownera: obecny granatowo-szary dark jest zbyt mroczny i wizualnie niespójny. Kierunek: więcej czerni/grafitu, mniej granatu, wysoki kontrast, powierzchnie warstwowe, zero gaming/neon. Przycisk nawigacyjny ma zachować spójny wygląd w obu motywach, zbliżony do wariantu jasnego.

## Stopka
- okrągłe logo + wordmark;
- dane firmy, adres korespondencyjny, produkcja, NIP, REGON, e-mail;
- Polityka prywatności / Regulamin / Cookies w jednym poziomym obszarze;
- `Strefa autoryzowana` zostaje dyskretna na dole;
- nie pokazywać publicznie numerów v0.x/v1.x;
- nie dublować całej nawigacji headera.

## SEO / AI Search
Wymagane przed publikacją produkcyjną:
- canonical;
- dynamiczny `robots.txt`;
- dynamiczny `sitemap.xml`;
- prawdziwe `lastmod`;
- title/meta description;
- Open Graph;
- JSON-LD: WebSite, Organization, Blog, BlogPosting, BreadcrumbList;
- datePublished/dateModified;
- RSS/Atom;
- `llms.txt`;
- OAI-SearchBot allow;
- GPTBot disallow;
- IndexNow;
- pola SEO w adminie.

## Aktualny artefakt
`StalLIFT_BLOG_v1.3_REFINED_FULL_2026-09-10.zip`
SHA-256 zapisany w historii projektu: `b274b0b6330fe1d9f2288ffb9e029f36034e4b18623c1c35cbc05a2e1b412542`.
Nie oznaczać jako Owner-approved final bez testu wizualnego.

## Następna kolejność
1. Ustawić `stallift-sot` jako PRIVATE.
2. Zweryfikować kandydat bloga v1.3 na PC + telefon.
3. Zamknąć zaległe korekty bloga.
4. Ustanowić blog jako referencyjne wdrożenie design systemu.
5. Przejść do strony firmowej one-page.
6. Dopiero po akceptacji przenieść design system do konfiguratora.
