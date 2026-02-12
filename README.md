# Intelligenspartiet.no

Tabloid-inspirert forside for Intelligenspartiet, med fokus pa erstatningsangst i arbeidslivet.

## Innhold
- `/index.html`: Forside med media-belt, AI-wire, scrollytelling og promptbank.
- `/assets/css/style.css`: Visuell profil, responsiv layout og scrollytelling-stiler.
- `/assets/js/main.js`: Frontend-logikk for klokke, filter, wire-rendering, scrollytelling-state og promptbank.
- `/assets/data/ai-jobs-news.json`: Generert datagrunnlag for nyhetslisten.
- `/assets/data/kling3-prompts.json`: Kling 3.0 videoprompter for alle videoslots.
- `/scripts/crawl_ai_jobs_news.py`: Crawler som henter AI + jobb-relaterte nyheter via RSS.
- `/admin/*`: Browser-basert adminpanel.
- `/api/admin-auth.js`: Login + første-gangs passordoppsett.
- `/api/repo-file.js`: Beskyttet API for lesing/skriving av repo-filer via GitHub API.

## Kjor lokalt
1. Oppdater nyhetsdata:
   - `python3 scripts/crawl_ai_jobs_news.py --limit 60`
2. Start lokal server:
   - `python3 -m http.server 4173`
3. Apne:
   - `http://localhost:4173`

## Scrollytelling
- Seksjon: `#scrollytelling` i `index.html`.
- Steg styres av `.scrolly-step` med `data-*` attributter for kicker, tittel, tekst, bilde og video.
- JS oppdaterer sticky media i takt med scroll via `IntersectionObserver`.

## Kling 3.0 prompts
- Promptbank rendres fra `assets/data/kling3-prompts.json`.
- Hvert promptkort har copy-knapp i UI.
- Oppdater promptene direkte i JSON-filen eller via adminpanelet.

## Admin infrastruktur
Adminpanelet lar deg redigere prompts og nettsidefiler fra hvor som helst.

### URL
- `/admin/`

### Login-modell
- `ADMIN_EMAIL` er fast admin-bruker (for deg: `lars@larscuzner.com`).
- Første gang settes passord i admin-UI (setup-flow).
- Setup krever `ADMIN_SETUP_KEY`.
- Etter setup brukes e-post + passord.
- Session lagres i sikker, HttpOnly cookie.

### Vercel environment variables (obligatorisk)
Sett disse i Vercel -> Project Settings -> Environment Variables:

- `ADMIN_EMAIL`: `lars@larscuzner.com`
- `ADMIN_SETUP_KEY`: lang hemmelig engangsnokkel for første passordoppsett.
- `ADMIN_PEPPER`: lang hemmelig streng brukt i passordhashing.
- `ADMIN_SESSION_SECRET`: lang hemmelig streng for signering av session-cookie.
- `GITHUB_TOKEN`: GitHub token med write-tilgang til repo contents.
- `GITHUB_OWNER`: f.eks. `larscuz`.
- `GITHUB_REPO`: f.eks. `intelligenspartiet`.
- `GITHUB_BRANCH`: f.eks. `main`.

Etter setting av variabler: redeploy prosjektet.

### Første gangs passordoppsett
1. Åpne `/admin/`.
2. Fyll inn admin e-post (`lars@larscuzner.com`).
3. Velg passord.
4. Lim inn `ADMIN_SETUP_KEY`.
5. Trykk `Sett passord`.

### Hva kan redigeres i admin
- Visuell nyhets-CMS for `assets/data/ai-jobs-news.json`:
  - kategori (f.eks. `Norsk arbeidsmarked`)
  - publisert/ikke publisert
  - flytt opp/ned (rekkefolge)
  - slett og legg til saker
  - `Publiser alle` og `Sett kategori: Norsk arbeidsmarked`
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/data/kling3-prompts.json`
- `assets/data/ai-jobs-news.json`
- filer under `admin/` og utvalgte prosjektfiler.

### Sikkerhet
- Ikke del `ADMIN_SETUP_KEY`, `ADMIN_PEPPER`, `ADMIN_SESSION_SECRET` eller `GITHUB_TOKEN`.
- Roter secrets hvis du mistenker lekkasje.
- Endepunkt `/api/repo-file` krever gyldig session.

## Publisering
1. Push endringer til repoet som er koblet til produksjon pa Vercel.
2. Kjor crawleren for nye saker for deploy, eller sett opp periodisk kjoring via cron/GitHub Actions.
   - Eksempel med kategori: `python3 scripts/crawl_ai_jobs_news.py --limit 60 --category \"Norsk arbeidsmarked\"`
3. Verifiser at `assets/data/ai-jobs-news.json` og `assets/data/kling3-prompts.json` er oppdatert i siste deploy.
