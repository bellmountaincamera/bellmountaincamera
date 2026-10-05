# Bell Mountain Camera

## Project
- Preserve the existing architecture, accessibility, functionality, and responsive mobile/desktop layouts. Make no unrelated visual or architectural changes.
- Stack: Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS 4; npm with `package-lock.json`. Vercel uses Node 24.x.
- Routes: `app/`; shared UI: `components/`; content/helpers: `lib/`; assets: `public/`; operational notes: `docs/`; tests: `tests/*.test.mjs`.
- Keep Shopify credentials server-only in `lib/shopify.ts`; never commit secrets or environment files.

## Working style and continuity
- Make the smallest clean change that fully solves the request. Prefer existing components and patterns; do not refactor unrelated working code or create duplicates.
- Reuse context from this ongoing task. Do not re-audit the repository for each small edit unless something material changed. Inspect dependencies and related files when affected.
- Prioritize correctness, fast updates, and efficient Codex usage. Scale investigation and validation to risk; avoid duplicate checks, unnecessary branches, and repeated explanations.

## Commands and validation
- Install dependencies when needed: `npm ci` (Node 24.x).
- Development: `npm run dev`. Production build: `npm run build`. Production server: `npm run start`.
- Type-check: `npm run typecheck` (`tsc --noEmit`). A production build also checks TypeScript and generates Next route types.
- Lint: `npm run lint` (`eslint .`) uses `eslint.config.mjs` with Next.js Core Web Vitals and TypeScript rules. ESLint 9 matches the React/accessibility plugins' supported peer versions; check their compatibility before upgrading to ESLint 10. Existing warnings remain visible for fonts, an image element, an unused parameter, and the carousel's state-in-effect pattern (warning scoped to `HomeGifCarousel.tsx` to avoid changing playback during lint setup). Do not add broad rule suppressions to hide new problems.
- No npm test script exists. Use `node --test tests/<relevant-file>.test.mjs`; full suite: `node --test tests/*.test.mjs`.
- `continuous-gallery.test.mjs` needs installed dependencies; `security-audit.test.mjs` needs a completed production build. `film-lab-content.test.mjs` and `newsletter-embed.test.mjs` require a running site (default `http://127.0.0.1:3102`; override with `BMC_TEST_URL`). Start a local production server with `npm run start -- --hostname 127.0.0.1 --port 3102` before the full suite.
- Review the diff before publishing. Run targeted checks appropriate to the change; run the production build before publishing production-code changes.
- For changes affecting TypeScript, linting, routing, forms, dependencies, configuration, or shared components, run the relevant checks and test affected behavior. Check mobile/desktop and accessibility for UI changes.
- Fix errors introduced by the requested change before publishing. Never knowingly publish a broken build. Record pre-existing failures accurately without unrelated fixes.
- Documentation-only edits normally need diff/content checks, not a repeat application build.

## Publishing
- Standing user authorization: REQUEST → EDIT → VERIFY → BUILD/CHECK → COMMIT → PUSH TO PRODUCTION → VERCEL DEPLOY. Do not wait for a separate request to commit, push, merge, finalize, or deploy normal verified edits.
- Repository: `https://github.com/bellmountaincamera/bellmountaincamera`; production/default branch: `main` (confirmed by successful Git-origin production deployments).
- Vercel Git integration deploys pushes to `main`. Primary production project: `bell-mountain-camera` (`prj_rcnP46lALLs4GQ4Di0kTOt42sOcA`), serving `bellmountaincamera.com` and `www.bellmountaincamera.com`. A second project, `bellmountaincamera` (`prj_o8BJna3AtI0q4ngViIB9Qdib6oTd`), also deploys this repository. Do not reconfigure either without a relevant request.
- Deployment settings are managed in Vercel; no tracked `vercel.json` or GitHub Actions deployment workflow was present at setup. Prefer the existing Git deployment path; do not create duplicate CLI deployments.
- At setup, GitHub reported push permission, `main` unprotected, and no active branch rules. Safely push verified changes directly to `main` while allowed. Fetch/check for remote changes first; preserve others' changes and never force-push or bypass security/branch protection.
- The user installed ChatGPT Codex Connector for this repository after the initial HTTP 403. Git transport still returned authentication errors, but authenticated GitHub Git Data API writes work. If ordinary `git push` fails for this transport reason, publish the verified Git objects through `gh api` and update `refs/heads/main` with `force: false`; preserve commit contents/history and verify the resulting remote SHA. This alternative must honor repository rules and permissions, never bypass them.
- If permissions/protection require a PR or merge, use the minimum required workflow and honor required checks. If access is blocked, report the exact blocker.
- Confirm whether push succeeded and check deployment status for the pushed commit when available. GitHub commit statuses/deployment records expose both Vercel projects; individual Vercel project/deployment reads also work. Team-scoped Vercel deployment listing returned 403 during setup; use the working status sources rather than repeatedly retrying it.
- This standing authorization supersedes older task-specific notes in `docs/` asking for separate deployment approval.
