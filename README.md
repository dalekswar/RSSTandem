# TimeTravellerEngineer

## Deployment

This repository deploys to **GitHub Pages** through `.github/workflows/deploy.yml` after CI succeeds on `main`.

### Deployment flow

1. `CI` completes successfully for the `main` branch.
2. The deploy workflow checks out the exact commit tested in CI.
3. The project is rebuilt with:
   - `npm ci`
   - `npm run build --if-present`
4. The generated `dist/` directory is uploaded and deployed with the official GitHub Pages actions.
5. Deployment targets the `production` GitHub Environment.

> Configure required reviewers and any deployment secrets under:
> **Settings → Environments → production**.

### Rollback

1. Open **Actions → Deploy**.
2. Select a previous successful run for a known-good commit.
3. Use **Re-run jobs** to redeploy that artifact/commit to production.

If you need to roll back to a specific commit not already deployed recently, trigger CI for that commit (for example by reverting/cherry-picking on `main`) and let Deploy run again after CI succeeds.

### Redeploy current `main`

1. Open the latest successful **CI** run on `main`.
2. Re-run CI jobs.
3. After CI completes successfully, the Deploy workflow triggers automatically and publishes the rebuilt `dist/` output.
