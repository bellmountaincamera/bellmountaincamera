# BMC embedded newsletter signup

Status: the supplied official Universal snippet and `data-form="6zJeIZ"` are
installed locally. MailerLite still returns an empty template, so launch is blocked
on saving the form design. No hosting migration, paid upgrade, or deployment.

## Existing account resources

- Group: **BMC Website Updates**, ID `198730433363445013`.
- Form: **BMC Website Signup**, ID `198733753286133592`, slug `6zJeIZ`.
- [Edit the form](https://dashboard.mailerlite.com/forms/198733753286133592/overview).
- Existing custom consent field: `bmc_signup_consent`, retained, not deleted.
- Connector verified the form targets the group above and `double_optin: true`.
- Rechecked September 16: `has_content: false` and `active: false`. It is not ready for
  embedding. Its Share URL must not be presented as a working signup yet.
- No campaigns, automations, imports, test subscriptions, or emails were sent.

## Owner action needed

Finish and save the form in MailerLite. The supplied code is already installed;
no further snippet or API token is needed. The connector can create and inspect
forms but cannot design their content. No connected browser was available for
editing the form. The public form response returned `template: ""`, and its
Share URL returned a 503 error during verification.

Use only an email field and a required, unchecked marketing-permission checkbox:
"I want BMC email updates. I can unsubscribe at any time."
Link https://www.bellmountaincamera.com/privacy beside signup.
Use "Join the list" for the button and "Check your inbox to confirm your signup."
for success; do not imply confirmed subscription before email confirmation.
Keep form double opt-in enabled. Verify MailerLite account approval, the sending
address, confirmation email, and actual business postal address. Keep MailerLite's
unsubscribe link in emails. Do not send campaigns for testing.

For styling, use a transparent/white background, black text, muted blue accents,
no decorative image, and narrow centered layout. Inputs must be at least 16px.
Website-side CSS applies responsive input sizing, blue buttons, and focus states.
Final provider-field typography and layout need review once content is available.

## Local integration

- `EmailSignupSection` retains the original section layout and title.
- `MailerLiteSignup` loads `/newsletter/embed.html` only on an explicit click.
- The frame contains the exact supplied bootstrap/account and form identifier.
  It isolates the provider lifecycle from Next.js navigation and is removed when
  closed or when leaving Home. No site-wide script or persistent consent flag.
- Loading status, a 12-second empty-template timeout, retry, close, and an email
  fallback prevent silent blank or false-success states. Message handling checks
  both origin and frame source and clamps the requested height.
- The inspected Universal script injects provider HTML/scripts and records form
  views through `/forms/{id}/takel`. It contains session and form cookie code.
  Optional scripts are not described as tracking-free. No API credentials used.
- Privacy and cookie disclosures now describe MailerLite, explicit loading,
  form activity, possible cookies, and separate marketing permission. Closing
  the frame does not claim to delete existing third-party cookies.

## Integration and verification remaining

1. Recheck the saved form's returned HTML, additional scripts, cookies, and fields.
   Do not invent a form action URL, consent field name, or submission payload.
2. Verify email and required unchecked marketing consent, confirmation messaging,
   success and validation states, and absence of duplicated headings.
3. Refine styling and disclosures against the actual published form. Preserve
   the separate contact/service email forms, which were not changed.
4. Test keyboard access, mobile layout, consent validation, and failure behavior.
5. Use the owner-approved test email provided in the conversation to verify group
   assignment, pending confirmation, email delivery, activation after confirmation,
   and unsubscribe behavior. Do not put that private address in source control.
6. Run the production build, then ask for approval before deploying.

## Removed API approach

The unused newsletter API route, server helper, API-only constants, token example,
and API unit tests were removed. There is no newsletter API token or API double
opt-in flag dependency. Existing MailerLite account resources were not deleted.
If credentials were added to Vercel earlier, they are not needed by this approach;
review and remove unused credentials separately without exposing their values.

Reference: https://www.mailerlite.com/help/how-to-create-an-embedded-form

## Local verification

September 16: production build and TypeScript passed (41 routes, no newsletter
API). Five automated checks passed: supplied identifiers/script syntax, empty
response timeout, same-origin ready/resize reporting, late-load recovery, and
initial homepage HTML without the provider script or iframe. The static embed
returns HTTP 200. Tests use a simulated provider DOM, not a real signup.

Local preview: http://localhost:3102
With that preview running: `node --test tests/newsletter-embed.test.mjs`.
Real embedded fields, mobile/keyboard behavior, sender approval, delivery, and
unsubscribe tests remain pending. No deployment, email, or test signup performed.
