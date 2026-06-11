# Ecommerce Integration Notes

Bell Mountain Camera is currently ecommerce-ready at the frontend level only.
Payments, Shopify checkout, live cart state, shipping rates, inventory sync, and
order emails are not connected yet.

## Provider Decision

Use Shopify as the ecommerce backend while keeping this Next.js site as the
custom public frontend.

Shopify was chosen because BMC needs product editing without rebuilding the
site, inventory tracking, shipping, local pickup, one-off used camera listings,
product photos, sold-out handling, and a clear path toward in-person sales
support. Stripe Checkout would be simpler to wire to the current mock product
data, but it would not give Isai a practical store admin for rotating film and
camera inventory.

## What Shopify Will Handle

- Product records
- Product photos
- Inventory quantities
- Sold-out status
- Used camera quantity-one listings
- Cart and hosted checkout
- Payments
- Shipping setup
- Local pickup setup
- Taxes
- Discount codes if needed later
- Order confirmations and order records

## What Next.js Will Handle

- Bell Mountain Camera public frontend
- Brand styling, page layout, and SEO
- Product listing and product detail presentation
- Film lab, services, about, contact, FAQ, and policy pages
- Cart/checkout preview pages until Shopify checkout is connected
- Mock product fallback while Shopify credentials/products are not connected

## Required Environment Variables

Add these only when Shopify integration is implemented:

- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `SHOPIFY_API_VERSION`

Do not expose Shopify Admin API tokens in frontend code. Admin tokens, private
app secrets, Vercel tokens, and payment credentials must stay out of Git.

## Product Mapping Notes

Local products live in `lib/products.ts` and now include fields that can map to
Shopify:

- `externalProvider`
- `externalProductId`
- `externalVariantId`
- `sku`
- `barcode`
- `weight`
- `taxable`
- `requiresShipping`
- `pickupEligible`
- `conditionGrade`
- `soldAt`

For Shopify, `externalProductId` should map to the Shopify product ID and
`externalVariantId` should map to the Shopify variant ID. The local `slug`
should map to the Shopify handle.

## Used Camera Notes

Each used camera should be its own Shopify product with quantity `1`. Public
fields should include condition, tested status, included lens/accessories,
known issues, photos, price, shipping availability, and local pickup
availability. Private serial numbers or internal buying notes should not be
stored in public frontend data.

## Local Pickup Notes

Local pickup should be configured in Shopify for:

Bell Mountain Camera  
Inside Wild Goose Vintage & Thrift Store  
21810 CA-18 Unit #2  
Apple Valley, CA 92307

Pickup hours: Tuesday - Saturday, 10:00 AM - 4:00 PM.

## Shipping Notes

Shipping is planned but not finalized. Shopify should eventually own shipping
rates, shipping zones, carrier rules, and order fulfillment settings. The
public shipping policy remains editable until final rules are confirmed.

## Current Preview Status

- Cart remains `Cart Preview`.
- Checkout remains `Checkout Preview`.
- Order confirmation remains `Order Confirmation Preview`.
- Product CTAs remain contact/pickup focused.
- Do not show `Buy Now`, `Add to Cart`, `Complete Order`, or `Pay Now` until
  Shopify checkout is connected and tested.

## Mock Data Still In Use

The site currently uses `lib/products.ts` as mock/fallback data. `lib/commerce.ts`
provides a provider boundary, and `lib/shopify.ts` contains placeholder
configuration/mapping helpers. No live Shopify API calls are made yet.
