# BMC security audit

Date: 2026-09-16. Scope: local working tree and its production build.

## Credentials

- No hardcoded secret was identified in the reviewed application code. The automated scan checks common provider credentials, private keys, JWTs, and literal credential assignments without printing their values.
- `lib/shopify.ts` reads three server environment variables. Its unused configuration helper now has an explicit `import "server-only"` guard to prevent accidental import into a Client Component. No credential needed moving from source code.
- No local `.env` files were present at review time. Secret environment files are ignored by Git; the regression test checks that none are tracked.
- MailerLite account `2637966` and form `6zJeIZ` are intentionally public embed identifiers, not API credentials. The embedded signup does not require a MailerLite API key.
- Browser JS and generated HTML/RSC are scanned after the production build. Pattern checks cannot prove the absence of every possible arbitrary or obfuscated secret.

Next.js documents the server-only boundary here: [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components#preventing-environment-poisoning).

## Customer data and ownership

- No application API route handlers, Server Actions, login system, database, or Supabase integration were found.
- Product pages read the public local inventory in `lib/products.ts`. Cart, checkout, and order-confirmation pages do not retrieve customer records. Checkout is disabled; pickup inquiries open email drafts.
- Contact and service forms construct an email draft in the visitor's browser. They do not save or retrieve customer records through BMC's server.
- Newsletter subscriptions are handled by MailerLite's external form. Its subscriber permissions and internal backend are outside this repository.
- Cross-user record-access tests and RLS are not applicable to the current site. No such tests are claimed. Architecture checks flag new API handlers or Server Actions for a fresh audit; they are not substitutes for authorization tests when a backend is added.

## AI endpoints

No AI SDK, model call, or AI endpoint was found. No model authentication, per-user quotas, daily usage caps, or provider spend alerts were added. Those controls would be required before introducing a paid model endpoint; they cannot be configured for a provider account that this project does not use.

## Third-party boundary

The optional MailerLite iframe loads the vendor's JavaScript only after the visitor opens signup. It is same-origin and not a security sandbox; MailerLite scripts are trusted third-party code. The parent checks both message origin and iframe source before accepting height/status messages. Public embed code is not a customer-data authorization API.

## Verification and limits

Results: production build passed (41 generated pages), TypeScript passed, and all 10 security/newsletter tests passed. The scan covered 95 source/configuration text files and 375 generated browser assets and HTML/RSC responses, with no recognized credentials found. The initial sandbox build could not download Google Fonts; the network-enabled retry succeeded.

Run a production build, then:

```sh
node --test tests/security-audit.test.mjs
```

The scan covers application source, configuration, docs, public text assets, browser build assets, and rendered HTML/RSC. It excludes binary media, dependency internals, Git history, remote Vercel settings/deployments, mailboxes, and MailerLite account internals. It is not a penetration test or full dependency-vulnerability audit. No deployment or provider settings were changed.

Files changed for this audit only:

- `lib/shopify.ts`
- `tests/security-audit.test.mjs`
- `docs/SECURITY_AUDIT.md`

Pre-existing newsletter edits are preserved separately. Account/form publishing and confirmation-email verification remain part of that unfinished signup task.
