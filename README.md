# Intelligenspartiet.no

Tabloid-inspirert forside for Intelligenspartiet, med fokus pa erstatningsangst i arbeidslivet.

## Innhold
- `/index.html`: Forside med headline-layout ala norsk tabloid.
- `/assets/css/style.css`: Visuell profil og responsivt grid.
- `/assets/js/main.js`: Frontend-logikk for klokke, filter og rendering av wire-data.
- `/scripts/crawl_ai_jobs_news.py`: Crawler som henter AI + jobb-relaterte nyheter via RSS.
- `/assets/data/ai-jobs-news.json`: Generert datagrunnlag for nyhetslisten.

## Kjor lokalt
1. Oppdater nyhetsdata:
   - `python3 scripts/crawl_ai_jobs_news.py --limit 60`
2. Start lokal server:
   - `python3 -m http.server 4173`
3. Apne:
   - `http://localhost:4173`

## Redaksjonell retning
- Party platform: erstatningsangst.
- Desk: kontinuerlig monitorering av AI-nyheter om oppsigelser, automatisering og omskolering.
- Malside: tydelig headline-hierarki, rask skanning, korte ingresslinjer.

## Publisering
1. Push endringer til repoet som er koblet til produksjon pa Vercel.
2. Kjor crawleren for nye saker for deploy, eller sett opp periodisk kjoring via cron/GitHub Actions.
3. Verifiser at `assets/data/ai-jobs-news.json` er oppdatert i siste deploy.
