# Intelligenspartiet.no

Tabloid-inspirert forside for Intelligenspartiet, med fokus pa erstatningsangst i arbeidslivet.

## Innhold
- `/index.html`: Forside med media-belt, AI-wire, scrollytelling og promptbank.
- `/assets/css/style.css`: Visuell profil, responsiv layout og scrollytelling-stiler.
- `/assets/js/main.js`: Frontend-logikk for klokke, filter, wire-rendering, scrollytelling-state og promptbank.
- `/scripts/crawl_ai_jobs_news.py`: Crawler som henter AI + jobb-relaterte nyheter via RSS.
- `/assets/data/ai-jobs-news.json`: Generert datagrunnlag for nyhetslisten.
- `/assets/data/kling3-prompts.json`: Kling 3.0 videoprompter for alle videoslots pa siden.

## Kjor lokalt
1. Oppdater nyhetsdata:
   - `python3 scripts/crawl_ai_jobs_news.py --limit 60`
2. Start lokal server:
   - `python3 -m http.server 4173`
3. Apne:
   - `http://localhost:4173`

## Scrollytelling
- Scrolly-seksjon: `#scrollytelling` i `index.html`.
- Steg styres av `.scrolly-step` med `data-*` attributter for kicker, tittel, tekst, bilde og video.
- JS oppdaterer sticky media i takt med scroll via `IntersectionObserver`.

## Kling 3.0 prompts
- Promptbank rendres fra `assets/data/kling3-prompts.json`.
- Hvert promptkort har copy-knapp i UI.
- Oppdater promptene direkte i JSON-filen og hard-refresh siden.

## Publisering
1. Push endringer til repoet som er koblet til produksjon pa Vercel.
2. Kjor crawleren for nye saker for deploy, eller sett opp periodisk kjoring via cron/GitHub Actions.
3. Verifiser at `assets/data/ai-jobs-news.json` og `assets/data/kling3-prompts.json` er oppdatert i siste deploy.
