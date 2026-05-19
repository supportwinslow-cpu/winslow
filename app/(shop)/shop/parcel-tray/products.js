const ALL_BRANDS = ["Maruti", "Hyundai", "Tata", "Mahindra", "Honda", "Toyota", "Ford", "Kia", "MG", "Volkswagen", "Skoda", "Renault", "Nissan", "BMW", "Mercedes", "Audi"];

const products = [

  // ─────────────────────────────────────────────
  // WINSLOW — PREMIUM PARCEL TRAY (Custom Fit)
  // ─────────────────────────────────────────────

  {
    id: "WIN-001",
    name: "Parcel Tray for Hyundai Creta 2020",
    slug: "parcel-tray-hyundai-creta-2020",
    sku: "WIN-001",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Creta 2020"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "creta", "hyundai", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Hyundai Creta 2020. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Creta 2020",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Creta 2020",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-001.png"],

    variants: [
      { name: "Black", sku: "WIN-001-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: true,
  },

  {
    id: "WIN-002",
    name: "Parcel Tray for Maruti Baleno 2022",
    slug: "parcel-tray-maruti-baleno-2022",
    sku: "WIN-002",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Baleno 2022"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "baleno", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Baleno 2022. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Baleno 2022",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Baleno 2022",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-002.png"],

    variants: [
      { name: "Black", sku: "WIN-002-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-003",
    name: "Parcel Tray for Maruti Brezza 2022",
    slug: "parcel-tray-maruti-brezza-2022",
    sku: "WIN-003",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Brezza 2022"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "brezza", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Brezza 2022. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Brezza 2022",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Brezza 2022",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-003.png"],

    variants: [
      { name: "Black", sku: "WIN-003-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-004",
    name: "Parcel Tray for Hyundai Venue 2022",
    slug: "parcel-tray-hyundai-venue-2022",
    sku: "WIN-004",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Venue 2022"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "venue", "hyundai", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Hyundai Venue 2022. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Venue 2022",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Venue 2022",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-004.png"],

    variants: [
      { name: "Black", sku: "WIN-004-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-005",
    name: "Parcel Tray for Mahindra XUV-300",
    slug: "parcel-tray-mahindra-xuv300",
    sku: "WIN-005",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Mahindra"],
    carModel: ["XUV300"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "xuv300", "mahindra", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Mahindra XUV-300. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Mahindra XUV-300",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Mahindra XUV-300",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-005.png"],

    variants: [
      { name: "Black", sku: "WIN-005-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-006",
    name: "Parcel Tray for Maruti Grand Vitara",
    slug: "parcel-tray-maruti-grand-vitara",
    sku: "WIN-006",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Grand Vitara"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "grand vitara", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Grand Vitara. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Grand Vitara",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Grand Vitara",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-006.png"],

    variants: [
      { name: "Black", sku: "WIN-006-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-007",
    name: "Parcel Tray for Tata Nexon",
    slug: "parcel-tray-tata-nexon",
    sku: "WIN-007",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Tata"],
    carModel: ["Nexon"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "nexon", "tata", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Tata Nexon. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Tata Nexon",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Tata Nexon",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-007.png"],

    variants: [
      { name: "Black", sku: "WIN-007-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-008",
    name: "Parcel Tray for Tata Punch",
    slug: "parcel-tray-tata-punch",
    sku: "WIN-008",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Tata"],
    carModel: ["Punch"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "punch", "tata", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Tata Punch. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Tata Punch",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Tata Punch",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-008.png"],

    variants: [
      { name: "Black", sku: "WIN-008-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-009",
    name: "Parcel Tray for Tata Tiago",
    slug: "parcel-tray-tata-tiago",
    sku: "WIN-009",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Tata"],
    carModel: ["Tiago"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "tiago", "tata", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Tata Tiago. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Tata Tiago",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Tata Tiago",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-009.png"],

    variants: [
      { name: "Black", sku: "WIN-009-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-010",
    name: "Parcel Tray for Maruti Fronx",
    slug: "parcel-tray-maruti-fronx",
    sku: "WIN-010",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Fronx"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "fronx", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Fronx. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Fronx",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Fronx",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-010.png"],

    variants: [
      { name: "Black", sku: "WIN-010-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-011",
    name: "Parcel Tray for Kia Sonet",
    slug: "parcel-tray-kia-sonet",
    sku: "WIN-011",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Kia"],
    carModel: ["Sonet"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "sonet", "kia", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Kia Sonet. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Kia Sonet",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Kia Sonet",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-011.png"],

    variants: [
      { name: "Black", sku: "WIN-011-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-012",
    name: "Parcel Tray for Nissan Magnite",
    slug: "parcel-tray-nissan-magnite",
    sku: "WIN-012",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Nissan"],
    carModel: ["Magnite"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "magnite", "nissan", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Nissan Magnite. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Nissan Magnite",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Nissan Magnite",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-012.png"],

    variants: [
      { name: "Black", sku: "WIN-012-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-013",
    name: "Parcel Tray for Tata Nexon 2023",
    slug: "parcel-tray-tata-nexon-2023",
    sku: "WIN-013",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Tata"],
    carModel: ["Nexon 2023"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "nexon 2023", "tata", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Tata Nexon 2023 facelift. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Tata Nexon 2023",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Tata Nexon 2023",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-013.png"],

    variants: [
      { name: "Black", sku: "WIN-013-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-014",
    name: "Parcel Tray for Hyundai Exter",
    slug: "parcel-tray-hyundai-exter",
    sku: "WIN-014",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Exter"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "exter", "hyundai", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Hyundai Exter. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Exter",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Exter",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-014.png"],

    variants: [
      { name: "Black", sku: "WIN-014-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-015",
    name: "Parcel Tray for Tata Altroz",
    slug: "parcel-tray-tata-altroz",
    sku: "WIN-015",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Tata"],
    carModel: ["Altroz"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "altroz", "tata", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Tata Altroz. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Tata Altroz",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Tata Altroz",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-015.png"],

    variants: [
      { name: "Black", sku: "WIN-015-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-016",
    name: "Parcel Tray for Maruti Wagon-R 2019",
    slug: "parcel-tray-maruti-wagonr-2019",
    sku: "WIN-016",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Wagon-R 2019"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.4,

    tags: ["parcel tray", "boot cover", "wagonr", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Wagon-R 2019 onwards. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Wagon-R 2019",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Wagon-R 2019",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-016.png"],

    variants: [
      { name: "Black", sku: "WIN-016-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-017",
    name: "Parcel Tray for Maruti Swift 2018 Onwards",
    slug: "parcel-tray-maruti-swift-2018",
    sku: "WIN-017",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Swift 2018", "Swift 2019", "Swift 2020", "Swift 2021", "Swift 2022", "Swift 2023"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "swift", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Swift 2018 onwards. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Swift 2018 Onwards",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Swift 2018 Onwards",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-017.png"],

    variants: [
      { name: "Black", sku: "WIN-017-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-018",
    name: "Parcel Tray for Hyundai Creta 2024",
    slug: "parcel-tray-hyundai-creta-2024",
    sku: "WIN-018",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Creta 2024"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.6,

    tags: ["parcel tray", "boot cover", "creta 2024", "hyundai", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for the all-new Hyundai Creta 2024. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Creta 2024",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Creta 2024",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-018.png"],

    variants: [
      { name: "Black", sku: "WIN-018-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: true,
  },

  {
    id: "WIN-019",
    name: "Parcel Tray for Kia Seltos 2023",
    slug: "parcel-tray-kia-seltos-2023",
    sku: "WIN-019",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Kia"],
    carModel: ["Seltos 2023"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "seltos 2023", "kia", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Kia Seltos 2023. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Kia Seltos 2023",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Kia Seltos 2023",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-019.png"],

    variants: [
      { name: "Black", sku: "WIN-019-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-019B",
    name: "Parcel Tray for Kia Seltos 2023 (with Bracket)",
    slug: "parcel-tray-kia-seltos-2023-bracket",
    sku: "WIN-019B",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Kia"],
    carModel: ["Seltos 2023"],

    price: 3120,
    originalPrice: 4800,
    discountPercentage: 35,
    rating: 4.6,

    tags: ["parcel tray", "boot cover", "seltos 2023", "kia", "custom fit", "with bracket"],

    description:
      "Winslow Premium Parcel Tray with Bracket custom-designed for Kia Seltos 2023. The bracket variant provides a more secure, flush-fit installation. Enhances interior aesthetics, protects luggage & rear cabin privacy.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Kia Seltos 2023",
      "Includes Mounting Bracket for Secure Fit",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Kia Seltos 2023",
      includes: "Parcel Tray + Bracket",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-019B.png"],

    variants: [
      { name: "Black with Bracket", sku: "WIN-019B-BLK", price: 3120, stock: 30 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-021",
    name: "Parcel Tray for Maruti Alto K-10 2022",
    slug: "parcel-tray-maruti-alto-k10-2022",
    sku: "WIN-021",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Alto K-10 2022"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.4,

    tags: ["parcel tray", "boot cover", "alto k10", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Alto K-10 2022. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Alto K-10 2022",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Alto K-10 2022",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-021.png"],

    variants: [
      { name: "Black", sku: "WIN-021-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-022",
    name: "Parcel Tray for Maruti Swift 2024",
    slug: "parcel-tray-maruti-swift-2024",
    sku: "WIN-022",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Swift 2024"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.6,

    tags: ["parcel tray", "boot cover", "swift 2024", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for the all-new Maruti Swift 2024. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Swift 2024",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Swift 2024",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-022.png"],

    variants: [
      { name: "Black", sku: "WIN-022-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-023",
    name: "Parcel Tray for Hyundai i20 2020",
    slug: "parcel-tray-hyundai-i20-2020",
    sku: "WIN-023",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["i20 2020"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "i20", "hyundai", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Hyundai i20 2020. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai i20 2020",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai i20 2020",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-023.png"],

    variants: [
      { name: "Black", sku: "WIN-023-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-024",
    name: "Parcel Tray for Hyundai Nios",
    slug: "parcel-tray-hyundai-nios",
    sku: "WIN-024",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Nios"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.4,

    tags: ["parcel tray", "boot cover", "nios", "hyundai", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Hyundai Nios (Grand i10 Nios). Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Nios",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Nios",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-024.png"],

    variants: [
      { name: "Black", sku: "WIN-024-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-025",
    name: "Parcel Tray for Hyundai i20 Elite",
    slug: "parcel-tray-hyundai-i20-elite",
    sku: "WIN-025",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["i20 Elite"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.4,

    tags: ["parcel tray", "boot cover", "i20 elite", "hyundai", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Hyundai i20 Elite. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai i20 Elite",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai i20 Elite",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-025.png"],

    variants: [
      { name: "Black", sku: "WIN-025-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-026",
    name: "Parcel Tray for Mahindra 3XO",
    slug: "parcel-tray-mahindra-3xo",
    sku: "WIN-026",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Mahindra"],
    carModel: ["3XO"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.6,

    tags: ["parcel tray", "boot cover", "3xo", "mahindra", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Mahindra 3XO. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Mahindra 3XO",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Mahindra 3XO",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-026.png"],

    variants: [
      { name: "Black", sku: "WIN-026-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-027",
    name: "Parcel Tray for Hyundai Nios (with Bracket)",
    slug: "parcel-tray-hyundai-nios-bracket",
    sku: "WIN-027",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Nios"],

    price: 3120,
    originalPrice: 4800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "nios", "hyundai", "custom fit", "with bracket"],

    description:
      "Winslow Premium Parcel Tray with Bracket custom-designed for Hyundai Nios. The bracket variant ensures a more secure, factory-finish fit. Enhances interior aesthetics and protects luggage.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Nios",
      "Includes Mounting Bracket for Secure Fit",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Nios",
      includes: "Parcel Tray + Bracket",
      packaging: "1 Pc. | Cartoon Packing: Pack of 10",
    },

    images: ["/products/parcel-tray/WIN-027.png"],

    variants: [
      { name: "Black with Bracket", sku: "WIN-027-BLK", price: 3120, stock: 30 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-028",
    name: "Parcel Tray for Maruti Baleno (Old Model)",
    slug: "parcel-tray-maruti-baleno-old",
    sku: "WIN-028",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Baleno Old"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.4,

    tags: ["parcel tray", "boot cover", "baleno old", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Baleno old model. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Baleno (Old Model)",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Baleno Old Model",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-028.png"],

    variants: [
      { name: "Black", sku: "WIN-028-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-029",
    name: "Parcel Tray for Maruti Brezza (Old Model)",
    slug: "parcel-tray-maruti-brezza-old",
    sku: "WIN-029",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Brezza Old"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.4,

    tags: ["parcel tray", "boot cover", "brezza old", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Brezza old model. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Brezza (Old Model)",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Brezza Old Model",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-029.png"],

    variants: [
      { name: "Black", sku: "WIN-029-BLK", price: 2470, stock: 50 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-030",
    name: "Parcel Tray for Tata Curvv",
    slug: "parcel-tray-tata-curvv",
    sku: "WIN-030",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Tata"],
    carModel: ["Curvv"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.6,

    tags: ["parcel tray", "boot cover", "curvv", "tata", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Tata Curvv. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Tata Curvv",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Tata Curvv",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-030.png"],

    variants: [
      { name: "Black", sku: "WIN-030-BLK", price: 2470, stock: 40 },
    ],

    isFeatured: true,
  },

  {
    id: "WIN-031",
    name: "Parcel Tray for Skoda Kylaq",
    slug: "parcel-tray-skoda-kylaq",
    sku: "WIN-031",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Skoda"],
    carModel: ["Kylaq"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "kylaq", "skoda", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Skoda Kylaq. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Skoda Kylaq",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Skoda Kylaq",
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-031.png"],

    variants: [
      { name: "Black", sku: "WIN-031-BLK", price: 2470, stock: 40 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-032",
    name: "Parcel Tray for MG Windsor (with Bracket)",
    slug: "parcel-tray-mg-windsor-bracket",
    sku: "WIN-032",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["MG"],
    carModel: ["Windsor"],

    price: 3120,
    originalPrice: 4800,
    discountPercentage: 35,
    rating: 4.7,

    tags: ["parcel tray", "boot cover", "windsor", "mg", "custom fit", "with bracket"],

    description:
      "Winslow Premium Parcel Tray with Bracket custom-designed for MG Windsor. The bracket variant provides a secure, factory-finish installation. Enhances interior aesthetics and protects luggage.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for MG Windsor",
      "Includes Mounting Bracket for Secure Fit",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — MG Windsor",
      includes: "Parcel Tray + Bracket",
      packaging: "1 Pc. | Cartoon Packing: Pack of 10",
    },

    images: ["/products/parcel-tray/WIN-032.png"],

    variants: [
      { name: "Black with Bracket", sku: "WIN-032-BLK", price: 3120, stock: 30 },
    ],

    isFeatured: true,
  },

  {
    id: "WIN-033",
    name: "Parcel Tray for Hyundai Creta Old (with Bracket)",
    slug: "parcel-tray-hyundai-creta-old-bracket",
    sku: "WIN-033",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Creta Old"],

    price: 3120,
    originalPrice: 4800,
    discountPercentage: 35,
    rating: 4.5,

    tags: ["parcel tray", "boot cover", "creta old", "hyundai", "custom fit", "with bracket"],

    description:
      "Winslow Premium Parcel Tray with Bracket custom-designed for Hyundai Creta old model. Bracket ensures a more secure, factory-finish fit. Enhances interior aesthetics and protects luggage.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Creta Old Model",
      "Includes Mounting Bracket for Secure Fit",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Creta Old",
      includes: "Parcel Tray + Bracket",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-033.png"],

    variants: [
      { name: "Black with Bracket", sku: "WIN-033-BLK", price: 3120, stock: 30 },
    ],

    isFeatured: false,
  },

  {
    id: "WIN-034",
    name: "Parcel Tray for Hyundai Venue 2025 — New Launch",
    slug: "parcel-tray-hyundai-venue-2025",
    sku: "WIN-034",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Hyundai"],
    carModel: ["Venue 2025"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.7,

    tags: ["parcel tray", "boot cover", "venue 2025", "hyundai", "custom fit", "new launch"],

    description:
      "Winslow Premium Parcel Tray custom-designed for the all-new Hyundai Venue 2025. New Launch 2026. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Hyundai Venue 2025",
      "Durable, Helps Protect Items, Flexible",
      "New Launch — 2026",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Hyundai Venue 2025"  ,
      packaging: "1 Pc. | Cartoon Packing: Pack of 12",
    },

    images: ["/products/parcel-tray/WIN-034.png"],

    variants: [
      { name: "Black", sku: "WIN-034-BLK", price: 2470, stock: 40 },
    ],

    isFeatured: true,
  },

  {
    id: "WIN-035",
    name: "Parcel Tray for Maruti Suzuki Victoris",
    slug: "parcel-tray-maruti-victoris",
    sku: "WIN-035",

    category: "interior",
    brand: "Winslow",
    series: "Premium Parcel Tray",

    carBrand: ["Maruti"],
    carModel: ["Victoris"],

    price: 2470,
    originalPrice: 3800,
    discountPercentage: 35,
    rating: 4.6,

    tags: ["parcel tray", "boot cover", "victoris", "maruti", "custom fit"],

    description:
      "Winslow Premium Parcel Tray custom-designed for Maruti Suzuki Victoris. Enhances interior aesthetics, protects luggage & rear cabin privacy. Easy installation — no expert required.",

    features: [
      "Enhances Car Interior Aesthetics",
      "Protects Luggage & Rear Cabin Privacy",
      "Easy Installation — No Expert Required",
      "Long-lasting & Easy to Clean",
      "Custom Designed for Maruti Victoris",
      "Durable, Helps Protect Items, Flexible",
    ],

    specifications: {
      material: "High-density injection-moulded ABS",
      finish: "Premium fabric / textured matte",
      durability: "Heat & wear resistant",
      fitment: "Custom fit — Maruti Victoris",
      packaging: "1 Pc. | Cartoon Packing: Pack of 6",
    },

    images: ["/products/parcel-tray/WIN-035.png"],

    variants: [
      { name: "Black", sku: "WIN-035-BLK", price: 2470, stock: 40 },
    ],

    isFeatured: false,
  },

];

export default products;