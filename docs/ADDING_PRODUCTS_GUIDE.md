# Adding Products Guide

This site uses mock product data until Shopify is connected.

## Add a Film Product

1. Open `lib/products.ts`.
2. Add a new object to `mockProducts`.
3. Use `kind: "film"`.
4. Use a stable slug, such as `kodak-ultramax-400`.
5. Add matching images to `public/images/products/film/`.
6. Add the image list to `lib/product-images.ts`.

Required film fields:
- `kind`
- `slug`
- `name`
- `brand`
- `category`
- `format`
- `iso`
- `filmType`
- `price`
- `status`
- `quantity`
- `localPickup`
- `shippingAvailable`
- `image`
- `description`

## Add a Used Camera Product

1. Open `lib/products.ts`.
2. Add a new object to `mockProducts`.
3. Use `kind: "camera"`.
4. Set `quantity: 1` unless it is sold.
5. Add camera images to `public/images/products/cameras/`.
6. Add the image list to `lib/product-images.ts`.

Required camera fields:
- `kind`
- `slug`
- `name`
- `brand`
- `model`
- `category`
- `format`
- `condition`
- `testedStatus`
- `included`
- `notes`
- `price`
- `status`
- `quantity`
- `localPickup`
- `shippingAvailable`
- `image`
- `description`

## Image Naming

Use product slug plus a two-digit number:

```text
kodak-ultramax-400-01.jpg
kodak-ultramax-400-02.jpg
canon-ae1-program-01.jpg
canon-ae1-program-02.jpg
```

Do not use vague names like `IMG_4938.JPG`, `photo1.jpg`, or `01.jpg`.

## Shopify Later

When Shopify is connected, products should be edited in Shopify Admin. This mock data will remain as a fallback.
