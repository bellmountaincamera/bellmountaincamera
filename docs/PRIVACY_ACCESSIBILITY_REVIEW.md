# BMC Website Review

Reviewed September 11, 2026. This is an implementation review, not legal advice,
a legal-compliance certification, or a guarantee against claims.

## Owner confirmations

- The owner confirmed permission to publish all photos and video, including
  customer scans and product images. Keep the underlying permissions and licenses.
- The owner's latest instruction is a **full refund within 30 days of purchase**
  for used cameras and equipment. This replaces the earlier equal-value exchange
  instruction. Existing film, opened-consumable, and completed-service exclusions
  remain subject to applicable consumer rights.

## Implemented

- Shared privacy, cookie, terms, and returns content with a visible effective date,
  contact information, and footer links. Policy summaries use shared site content.
- Forms open an email draft, not a server submission. Name, email, and relevant
  request details are used; no account, payment, or identification fields added.
- Unchecked contact-permission controls and a separate newsletter opt-in. Newsletter
  draft records the request, opt-in wording, and privacy-policy version. BMC must
  still process sent signup and unsubscribe messages manually.
- Google Maps is not requested before the visitor chooses to load it. The notice
  explains Google's connection and potential cookie use. Hiding the map removes
  the iframe but cannot clear Google's cookies. Approval is not persisted.
- No advertising pixels, analytics scripts, or first-party cookie/storage calls
  found in application code. Fonts are downloaded at build time and served locally.
- LED status uses a slow CSS translation without flashing. A keyboard-operable
  pause control reveals the complete static message. Reduced-motion users receive
  the static message automatically. Screen readers receive the status once.
- Removed the unsupported blanket claim that all listed cameras are tested.
  No reviews or testimonials were found in the reviewed public components.
- Added nosniff, referrer-policy, and permissions-policy response headers.
- ASCII page headers share Home's centered masthead spacing and type size. Main
  and policy pages use short titles to avoid oversized multi-line title blocks.

## Verification

- Production build and TypeScript checks passed (41 generated routes).
- Axe-core 4.10.3: no reported WCAG A/AA violations across 20 main, shop, and
  utility pages at 390px, with the optional map unloaded. This is not a full WCAG audit.
- Layout checks at 390, 414, 430, 768, and 1440px: no page overflow, clipped ASCII,
  missing image alt attributes, or form fields under 16px on the checked pages.
- Ticker movement, pause, pause persistence during internal navigation, and
  reduced-motion behavior checked in Chromium.
- Contact and newsletter validation rejected unconfirmed consent and accepted
  complete inputs after opt-in. No email was sent during testing.
- On a fresh local Contact visit: only same-origin requests; no cookies, local
  storage, session storage, or map iframe. The map request appeared only after
  selecting Load Google Map. Hide Google Map removed the iframe.
- Browser keyboard checks cover form fields, consent, links, and action buttons.
  Third-party map accessibility and email-app behavior remain outside BMC's control.

## Owner follow-up

1. Have California counsel review these policies against actual store practices.
   A website policy does not replace applicable in-store disclosures. Display the
   30-day refund policy at the sales counter and ensure staff follow it. Refund
   payment method and processing time were not specified and were not invented.
2. Confirm scan-download provider, access controls, file expiry, record retention,
   hosting/log settings, and any tools used outside this repository. Specify actual
   retention periods once confirmed; enable MFA on business email and hosting.
3. Keep newsletter consent records and process opt-outs. Marketing emails need
   accurate sender details, a valid postal address, and a working opt-out method.
   Honor opt-outs within the applicable deadline; the website alone cannot do this.
4. Keep condition, testing, pricing, inventory, and turnaround claims current.
   Inventory is manually maintained, not connected to a live stock system.
5. Test with real iPhone Safari and assistive technologies. Automated checks cannot
   verify every image description, video frame's contrast, or real-world task flow.
6. Reassess tracking and consent before adding analytics, ad pixels, embeds, online
   payments, or mailing-list providers. No site-wide cookie banner was added for
   the current application; optional Google Maps instead requires a separate choice.
7. CCPA applicability depends on business facts outside the code, including revenue,
   data volume, relationships, and data uses. No exemption was assumed or certified.
   Reassess other jurisdictions if BMC targets customers outside its current local market.

## Primary references

- [California Business and Professions Code 22575](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22575.):
  commercial-site privacy disclosures, data categories, policy changes, date, and
  tracking disclosures informed the privacy-page structure.
- [California Privacy Protection Agency FAQ](https://cppa.ca.gov/faq):
  coverage thresholds include $26.625 million annual revenue, 100,000 consumers or
  households' data bought/sold/shared, or 50% of revenue from selling/sharing data,
  with additional coverage rules. Owner business facts require separate review.
- [California AG refund guidance](https://oag.ca.gov/consumers/general/refunds):
  explains return-policy display requirements and rights involving defective goods.
- [FTC CAN-SPAM guidance](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business):
  marketing sender information, postal address, opt-out access, and honoring opt-outs
  within 10 business days remain business operations responsibilities.
- [DOJ web accessibility guidance](https://www.ada.gov/resources/web-guidance/):
  public-facing businesses should address barriers including forms, keyboard access,
  alt text, and contrast. A passing automated test is not legal certification.
- [W3C Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html):
  the continuous LED animation has a user control; reduced motion has a static fallback.
