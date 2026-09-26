# Social media manager portfolio (sample)

Sample portfolio for a fictional social media manager in Lagos, built as a class demo on creating a portfolio with Claude. All people, brands, campaigns and numbers are invented.

## Stack
Next.js (App Router), TypeScript, Tailwind v4, Vercel.

## URLs
- Live: https://sm-portfolio-live.vercel.app (Vercel project `sm-portfolio-live`, branch `main`)
- Staging: https://sm-portfolio-staging-git-staging-william-s-projects-476fad92.vercel.app (Vercel project `sm-portfolio-staging`, branch `staging`)
- Design variants, staging only: `/variants` on the staging URL (feed, studio, poster, noir). They return 404 on live.
- Repo: https://github.com/Liiam76/sm-portfolio-demo

## Environments
- `main` deploys to the live Vercel project.
- `staging` deploys to the staging Vercel project.
- Each Vercel project builds only its own branch (ignored build step). Staging deploys show as Vercel previews.
- Flow: feature branch, PR into `staging`, then PR from `staging` into `main`. Never push to `main` directly.

## Commands
- `npm run dev` starts the dev server
- `npm run build` builds for production
- `npm run lint` lints
- `npm test` runs content tests
