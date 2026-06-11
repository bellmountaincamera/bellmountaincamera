# Ecommerce Integration Notes

Bell Mountain Camera is currently ecommerce-ready at the frontend level only.
Payments, live cart state, shipping rates, inventory sync, and order emails are
not connected yet.

## Current Product Shape

Products live in `lib/products.ts` and are intentionally provider-neutral. The
shape is prepared to map to Shopify, Square, Stripe Checkout, or Snipcart:

- `id`
- `slug`
- `name`
- `brand`
- `category`
- `price`
- `status` / `inventoryStatus`
- `quantity`
- `image` / `images`
- `localPickup`
- `shippingAvailable`
- `description`
- camera-only fields such as `condition`, `testedStatus`, `included`, and `notes`

## Provider Fit

- **Shopify**: best if BMC wants a full store backend, inventory management,
  discount codes, order management, shipping tools, and admin editing.
- **Square**: strong option if BMC already plans to use Square point-of-sale in
  the physical shop.
- **Stripe Checkout**: cleanest developer-owned option if BMC wants to keep this
  Next.js site and add a focused checkout without a full storefront backend.
- **Snipcart**: quickest static-site cart option if BMC wants a lightweight
  cart while keeping product data mostly in code.

## Recommendation

For the current code structure, Stripe Checkout is the cleanest next technical
step because the site already has product data, static pages, and no CMS. If BMC
needs easy non-code inventory editing immediately, Shopify or Square should be
chosen before connecting checkout.
