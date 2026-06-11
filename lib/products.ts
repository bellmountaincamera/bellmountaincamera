export type ProductStatus =
  | "In Stock"
  | "Low Stock"
  | "Out of Stock"
  | "Sold"
  | "Coming Soon"
  | "Rotating Stock";

export type ProductCategory =
  | "Film"
  | "Cameras"
  | "Accessories"
  | "Instant film"
  | "110 film"
  | "Specialty film";

export type ExternalProvider = "mock" | "shopify" | "square" | "stripe";

export type BaseProduct = {
  id?: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  status: ProductStatus;
  inventoryStatus?: ProductStatus;
  quantity: number;
  localPickup: boolean;
  shippingAvailable: boolean;
  image: string;
  images?: string[];
  description: string;
  featured?: boolean;
  externalProvider?: ExternalProvider;
  externalProductId?: string;
  externalVariantId?: string;
  sku?: string;
  barcode?: string;
  weight?: number;
  taxable?: boolean;
  requiresShipping?: boolean;
  pickupEligible?: boolean;
  soldAt?: string | null;
};

export type FilmProduct = BaseProduct & {
  kind: "film";
  brand: string;
  format: string;
  iso: string;
  filmType: string;
};

export type CameraProduct = BaseProduct & {
  kind: "camera";
  brand: string;
  model: string;
  format: string;
  condition: string;
  testedStatus: string;
  included: string;
  notes: string;
  conditionGrade?: string;
};

export type Product = FilmProduct | CameraProduct;

// Ecommerce integration notes:
// - Shopify can map `externalProductId` and `externalVariantId` to product/variant IDs.
// - Square can map those same fields to catalog item and variation IDs.
// - Stripe Checkout can map `slug`, `name`, `price`, `images`, and quantity to Product/Price records.
// - Keep private/internal notes, serials, admin tokens, and provider secrets out of this public product data.

export const productCategories: ProductCategory[] = [
  "Film",
  "Cameras",
  "Accessories",
  "Instant film",
  "110 film",
  "Specialty film"
];

type CommerceManagedFields =
  | "id"
  | "externalProvider"
  | "externalProductId"
  | "externalVariantId"
  | "sku"
  | "barcode"
  | "weight"
  | "taxable"
  | "requiresShipping"
  | "pickupEligible"
  | "soldAt"
  | "images";

type ProductSeed =
  | Omit<FilmProduct, CommerceManagedFields>
  | Omit<CameraProduct, CommerceManagedFields>;

function toSku(slug: string) {
  return `BMC-${slug.replaceAll("-", "_").toUpperCase()}`;
}

function withMockCommerceFields(product: ProductSeed): Product {
  const base = {
    ...product,
    id: `mock_${product.slug}`,
    externalProvider: "mock" as const,
    externalProductId: undefined,
    externalVariantId: undefined,
    sku: toSku(product.slug),
    barcode: undefined,
    weight: product.kind === "camera" ? 2 : 0.1,
    taxable: true,
    requiresShipping: product.shippingAvailable,
    pickupEligible: product.localPickup,
    soldAt: product.status === "Sold" ? new Date().toISOString() : null,
    images: [product.image]
  };

  if (base.kind === "camera") {
    return {
      ...base,
      quantity: base.status === "Sold" ? 0 : Math.min(base.quantity || 1, 1)
    };
  }

  return base;
}

const mockProducts: ProductSeed[] = [
  {
    kind: "film",
    slug: "reflex-lab-400d",
    name: "REFLX LAB 400D",
    brand: "REFLX LAB",
    category: "Specialty film",
    format: "35mm",
    iso: "400",
    filmType: "Color Negative / Specialty",
    price: 13.5,
    status: "In Stock",
    quantity: 8,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/reflex-lab-400d.jpg",
    featured: true,
    description:
      "A flexible 35mm color negative film option for everyday daylight shooting, travel, and desert color."
  },
  {
    kind: "film",
    slug: "reflex-lab-800t",
    name: "REFLX LAB 800T",
    brand: "REFLX LAB",
    category: "Specialty film",
    format: "35mm",
    iso: "800",
    filmType: "Color Negative / Tungsten",
    price: 13.5,
    status: "In Stock",
    quantity: 6,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/reflex-lab-800t.jpg",
    featured: true,
    description:
      "A tungsten-balanced 35mm color negative film for night scenes, mixed light, and cinematic color."
  },
  {
    kind: "film",
    slug: "reflex-lab-100d",
    name: "REFLX LAB 100D",
    brand: "REFLX LAB",
    category: "Specialty film",
    format: "35mm",
    iso: "100",
    filmType: "Daylight Balanced / Specialty",
    price: 13.5,
    status: "In Stock",
    quantity: 5,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/reflex-lab-100d.jpg",
    description:
      "A daylight-balanced 35mm film for bright conditions, clean color, and slower-speed shooting."
  },
  {
    kind: "film",
    slug: "lucky-color-200",
    name: "Lucky Color 200",
    brand: "Lucky",
    category: "Film",
    format: "35mm",
    iso: "200",
    filmType: "Color Negative",
    price: 10,
    status: "In Stock",
    quantity: 10,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/lucky-color-200.jpg",
    description:
      "Affordable 35mm color negative film for everyday cameras, quick walks, and casual rolls."
  },
  {
    kind: "film",
    slug: "luckypan-shd100",
    name: "Luckypan SHD100",
    brand: "Lucky",
    category: "Film",
    format: "35mm",
    iso: "100",
    filmType: "Black & White",
    price: 7,
    status: "In Stock",
    quantity: 12,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/luckypan-shd100.jpg",
    description:
      "Slow black-and-white 35mm film for bright light, clean contrast, and deliberate shooting."
  },
  {
    kind: "film",
    slug: "luckypan-shd400",
    name: "Luckypan SHD400",
    brand: "Lucky",
    category: "Film",
    format: "35mm",
    iso: "400",
    filmType: "Black & White",
    price: 7,
    status: "In Stock",
    quantity: 12,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/luckypan-shd400.jpg",
    description:
      "Faster black-and-white 35mm film for handheld shooting, shade, interiors, and daily carry."
  },
  {
    kind: "film",
    slug: "kodak-colorplus-200",
    name: "Kodak ColorPlus 200",
    brand: "Kodak",
    category: "Film",
    format: "35mm",
    iso: "200",
    filmType: "Color Negative",
    price: 11.5,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/kodak-colorplus-200.jpg",
    description:
      "Classic Kodak 35mm color negative film. Availability rotates with shelf stock."
  },
  {
    kind: "film",
    slug: "kodak-ultramax-400",
    name: "Kodak UltraMax 400",
    brand: "Kodak",
    category: "Film",
    format: "35mm",
    iso: "400",
    filmType: "Color Negative",
    price: 12.5,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/kodak-ultramax-400.jpg",
    description:
      "A flexible Kodak 400-speed color film for everyday shooting. Availability rotates with stock."
  },
  {
    kind: "film",
    slug: "kodak-kodacolor-100",
    name: "Kodak Kodacolor 100",
    brand: "Kodak",
    category: "Film",
    format: "35mm",
    iso: "100",
    filmType: "Color Negative",
    price: 11.5,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/kodak-kodacolor-100.jpg",
    description:
      "A slower Kodak color negative film option when available in rotating stock."
  },
  {
    kind: "film",
    slug: "kodak-eastman-100d",
    name: "Kodak Eastman 100D",
    brand: "Kodak",
    category: "Specialty film",
    format: "35mm",
    iso: "100",
    filmType: "Daylight Balanced / Specialty",
    price: 13.5,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/kodak-eastman-100d.jpg",
    description:
      "A Kodak daylight-balanced specialty stock when available in rotating inventory."
  },
  {
    kind: "film",
    slug: "kodak-pro-400",
    name: "Kodak Pro 400",
    brand: "Kodak",
    category: "Film",
    format: "35mm",
    iso: "400",
    filmType: "Color Negative",
    price: 14,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/kodak-pro-400.jpg",
    description:
      "Kodak 400-speed professional color negative film when available in rotating stock."
  },
  {
    kind: "film",
    slug: "kodak-pro-800",
    name: "Kodak Pro 800",
    brand: "Kodak",
    category: "Film",
    format: "35mm",
    iso: "800",
    filmType: "Color Negative",
    price: 16,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/kodak-pro-800.jpg",
    description:
      "Kodak 800-speed professional color negative film when available in rotating stock."
  },
  {
    kind: "film",
    slug: "lomography-metropolis-110",
    name: "Lomography Metropolis 110",
    brand: "Lomography",
    category: "110 film",
    format: "110",
    iso: "100-400",
    filmType: "Color Negative",
    price: 9.9,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/lomography-metropolis-110.jpg",
    description:
      "110 color negative film for pocket cameras when available in rotating stock."
  },
  {
    kind: "film",
    slug: "fujifilm-instax-wide",
    name: "FUJIFILM instax WIDE",
    brand: "FUJIFILM",
    category: "Instant film",
    format: "Instant",
    iso: "800",
    filmType: "Instant Film",
    price: 19.99,
    status: "Rotating Stock",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/film/fujifilm-instax-wide.jpg",
    description:
      "Instant film for FUJIFILM instax WIDE cameras when available in rotating stock."
  },
  {
    kind: "camera",
    slug: "used-35mm-camera-intake",
    name: "Used 35mm Camera Inventory",
    brand: "Rotating",
    model: "Various",
    category: "Cameras",
    format: "35mm",
    condition: "Varies by camera",
    testedStatus: "Tested status listed per camera",
    included: "Lens/accessories listed per camera",
    notes:
      "Used camera inventory changes often. Contact BMC with any questions about condition, functionality, or availability.",
    price: 0,
    status: "Coming Soon",
    quantity: 0,
    localPickup: true,
    shippingAvailable: true,
    image: "/images/cameras/used-35mm-camera-intake.jpg",
    featured: true,
    description:
      "A future product listing area for one-off used film cameras with condition notes, tested status, lens details, price, shipping, and pickup options."
  }
];

export const products: Product[] = mockProducts.map(withMockCommerceFields);

export function formatPrice(price: number) {
  if (price === 0) {
    return "Price listed per item";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);
}

export function isPurchasable(product: Product) {
  return false;
}

export function getInventoryStatus(product: Product) {
  return product.inventoryStatus ?? product.status;
}

export function getProductImages(product: Product) {
  return product.images ?? [product.image];
}

export function getContactCta(product: Product) {
  if (product.kind === "camera") {
    return "Ask About This Camera";
  }

  return "Ask About This Film";
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  const featuredFilm = [
    "reflex-lab-400d",
    "reflex-lab-800t",
    "lucky-color-200",
    "luckypan-shd400"
  ];

  return products.filter((product) => featuredFilm.includes(product.slug));
}

export function getFilmProducts() {
  return products.filter((product) => product.kind === "film");
}

export function getCameraProducts() {
  return products.filter((product) => product.kind === "camera");
}
