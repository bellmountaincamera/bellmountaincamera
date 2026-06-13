# Shopify Setup Checklist

## Account

- [ ] Create Shopify account.
- [ ] Add Bell Mountain Camera business information.
- [ ] Add public email: `bellmountaincamera@gmail.com`.
- [ ] Add public phone: `760-669-8544`.
- [ ] Add location: Bell Mountain Camera inside Wild Goose Vintage & Thrift Store, 21810 CA-18 Unit #2, Apple Valley, CA 92307.

## Products

- [ ] Add film products.
- [ ] Add used camera products as quantity-one products.
- [ ] Add accessories if they are ready for launch.
- [ ] Upload real BMC product photos.
- [ ] Set SKU values.
- [ ] Set inventory quantities.
- [ ] Mark sold used cameras as sold/out of stock.
- [ ] Confirm prices before publishing.

## Fulfillment

- [ ] Set shipping rates.
- [ ] Set shipping zones.
- [ ] Confirm shipping processing time.
- [ ] Set local pickup location.
- [ ] Confirm pickup hours: Tuesday - Saturday, 10:00 AM - 4:00 PM.
- [ ] Decide whether local pickup orders are prepaid or pay-at-pickup.

## Store Settings

- [ ] Set tax settings.
- [ ] Set payment provider.
- [ ] Set return policy.
- [ ] Set shipping policy.
- [ ] Set privacy policy.
- [ ] Set terms of service.
- [ ] Confirm used camera final-sale policy if applicable.
- [ ] Confirm film return policy.

## Developer Setup

- [ ] Create Storefront API access token.
- [ ] Confirm Shopify store domain.
- [ ] Choose Shopify API version.
- [ ] Add `SHOPIFY_STORE_DOMAIN` to Vercel.
- [ ] Add `SHOPIFY_STOREFRONT_ACCESS_TOKEN` to Vercel.
- [ ] Add `SHOPIFY_API_VERSION` to Vercel.
- [ ] Keep Admin API tokens out of frontend code and Git.

## Testing

- [ ] Test product fetch from Shopify.
- [ ] Test product detail pages with Shopify data.
- [ ] Test sold-out handling.
- [ ] Test Shopify cart creation.
- [ ] Test Shopify checkout redirect.
- [ ] Test local pickup order.
- [ ] Test shipping order.
- [ ] Test tax calculation.
- [ ] Test order confirmation emails.
- [ ] Test mobile checkout flow.
# Shopify Setup Checklist

Do this after the static site is reviewed.

- Create or confirm Shopify account
- Confirm Shopify store domain
- Add film products
- Add used camera products as quantity 1 items
- Upload product photos
- Set inventory quantities
- Configure local pickup
- Configure shipping zones/rates
- Configure taxes
- Set product statuses
- Create Storefront API token
- Add Storefront token to Vercel environment variables
- Test cart
- Test checkout
- Test local pickup
- Test shipping
- Test order confirmation email

Do not commit Shopify secrets or `.env` files.
