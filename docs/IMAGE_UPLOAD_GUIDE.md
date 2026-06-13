# Image Upload Guide

For now, images live in local folders. Shopify will handle product media later.

## Folders

```text
public/images/products/film/
public/images/products/cameras/
public/images/shop/
public/images/about/
```

## Product Filenames

Use product slugs:

```text
product-slug-01.jpg
product-slug-02.jpg
product-slug-03.jpg
```

Film image order:
1. Front
2. Angled
3. Expiration/date if needed

Camera image order:
1. Front
2. Top
3. Back
4. Bottom
5. Film chamber
6. Battery compartment
7. Lens/front glass
8. Viewfinder
9. Damage/wear
10. Accessories

## Recommended Sizes

Product photos:
- 1600 x 1600 px
- Square crop
- JPG or WebP
- sRGB
- Under 500 KB to 1 MB if possible

Page photos:
- Hero: 2400 x 1350 px
- Shop interior: 2000 x 1333 px
- About/location: 2000 x 1333 px
- Banner: 2400 x 1000 px

## Connect Images to Products

Add image paths in `lib/product-images.ts`.

If an image is missing, the site shows `Product image coming soon` instead of a broken image icon.
