export type Product = {
  name: string
  category: "Floor Care" | "Kitchen Care" | "Washroom Care" | "Hand Hygiene"
  slug: string
  description: string
  image: string
  gallery: string[]
  keywords: string[]
  variants: string[]
  sizes: string[]
}

/** Featured products shown on the home page */
export const homeProducts: Product[] = [
  {
    name: "Herbal Floor Cleaner",
    category: "Floor Care",
    slug: "herbal-floor-cleaner",
    description:
      "Lemongrass and Neem based antibacterial floor cleaner for hygienic homes.",
    image: "/catalogue/herbal-floor-cleaner.jpg",
    gallery: [
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-1.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-2.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-3.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-4.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-5.png"
    ],
    keywords: ["floor cleaner", "herbal floor cleaner", "neem cleaner", "lemongrass cleaner"],
    variants: ["Lemongrass", "Neem Fresh", "Pine Fresh"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Natural Floor Cleaner",
    category: "Floor Care",
    slug: "natural-floor-cleaner-citronella",
    description:
      "Heavy-duty concentrated cleaner for commercial and home use.",
    image: "/catalogue/natural-floor-cleaner.jpg",
    gallery: [
      "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-1.png",
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-1.png",
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-1.png",
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-1.png",
      "/products/natural-floor-cleaner/rose/natural-floor-cleaner-rose-1.png"
    ],
    keywords: ["floor cleaner", "natural floor cleaner", "citronella cleaner", "lavender cleaner", "lemon cleaner", "pine cleaner", "rose cleaner"],
    variants: ["Citronella", "Lavender", "Lemon", "Pine", "Rose"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Green Concentrate Floor Cleaner",
    category: "Floor Care",
    slug: "green-concentrate-cleaner",
    description:
      "Green concentrate floor cleaner for hygienic homes.",
    image: "/products/green-concentrated-cleaner/green-concentrated-cleaner-1.png",
    gallery: [
      "/products/green-concentrated-cleaner/green-concentrated-cleaner-1.png",
      "/products/green-concentrated-cleaner/green-concentrated-cleaner-2.png",
      "/products/green-concentrated-cleaner/green-concentrated-cleaner-3.png",
      "/products/green-concentrated-cleaner/green-concentrated-cleaner-4.png",
      "/products/green-concentrated-cleaner/green-concentrated-cleaner-5.png",
      "/products/green-concentrated-cleaner/green-concentrated-cleaner-6.png",
    ],
    keywords: ["floor cleaner", "green concentrate floor cleaner", "surface cleaner"],
    variants: ["Green"],
    sizes: ["500 ml", "1 L", "5 L", "5 L"]
  },
  {
    name: "Dish Wash Gel",
    category: "Kitchen Care",
    slug: "dish-wash-gel",
    description:
      "Powerful grease removal dishwash gel with refreshing fragrance.",
    image: "/catalogue/dish-wash-gel.jpg",
    gallery: ["/catalogue/dish-wash-gel.jpg"],
    keywords: ["dishwash gel", "utensil cleaner", "kitchen cleaner"],
    variants: ["Lemon", "Orange", "Classic"],
    sizes: ["250 ml", "500 ml", "750 ml"]
  },
  {
    name: "Hand Wash",
    category: "Hand Hygiene",
    slug: "hand-wash",
    description:
      "Moisturizing gel hand wash available in multiple fragrances.",
    image: "/catalogue/gel-hand-soap.jpg",
    gallery: ["/catalogue/gel-hand-soap.jpg"],
    keywords: ["hand wash", "liquid soap", "antibacterial handwash"],
    variants: ["Rose", "Lemon", "Aloe Vera"],
    sizes: ["250 ml", "500 ml", "1 L"]
  },
  {
    name: "Toilet Cleaner",
    category: "Washroom Care",
    slug: "toilet-cleaner",
    description:
      "99.9% germ kill toilet cleaner with deep stain removal formula.",
    image: "/catalogue/toilet-cleaner.jpg",
    gallery: [
      "/products/toilet-cleaner/toilet-cleaner-1.png",
      "/products/toilet-cleaner/toilet-cleaner-2.png",
      "/products/toilet-cleaner/toilet-cleaner-3.png",
      "/products/toilet-cleaner/toilet-cleaner-4.png",
      "/products/toilet-cleaner/toilet-cleaner-5.png",
      "/products/toilet-cleaner/toilet-cleaner-6.png",
    ],
    keywords: ["toilet cleaner", "bathroom cleaner", "germ killer"],
    variants: ["Regular", "Power Plus"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Instant Sanitizer",
    category: "Hand Hygiene",
    slug: "sanitizer",
    description:
      "Fast-acting hand sanitizer that kills germs instantly.",
    image: "/catalogue/instant-sanitizer.jpg",
    gallery: ["/catalogue/instant-sanitizer.jpg"],
    keywords: ["hand sanitizer", "alcohol sanitizer"],
    variants: ["70% IPA", "80% Ethyl", "Moisturizing Gel"],
    sizes: ["100 ml", "250 ml", "500 ml", "5 L"]
  } 
]

/** Full product catalogue for the /products page */
export const products: Product[] = [
  {
    name: "Herbal Floor Cleaner",
    category: "Floor Care",
    slug: "herbal-floor-cleaner",
    description:
      "Lemongrass and Neem based antibacterial floor cleaner for hygienic homes.",
    image: "/catalogue/herbal-floor-cleaner.jpg",
    gallery: [
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-1.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-2.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-3.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-4.png",
      "/products/herbal-floor-cleaner/herbal-floor-cleaner-5.png"
    ],
    keywords: ["floor cleaner", "herbal floor cleaner", "neem cleaner", "lemongrass cleaner"],
    variants: ["Lemongrass", "Neem Fresh", "Pine Fresh"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Natural Floor Cleaner - Citronella",
    category: "Floor Care",
    slug: "natural-floor-cleaner-citronella",
    description:
      "Citronella based floor cleaner for hygienic homes.",
    image: "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-1.png",
    gallery: [
      "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-1.png",
      "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-2.png",
      "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-3.png",
      "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-4.png",
      "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-5ltr.png",
      "/products/natural-floor-cleaner/citronella/natural-floor-cleaner-citronella-5.png"
    ],
    keywords: ["floor cleaner", "natural floor cleaner", "citronella cleaner"],
    variants: ["Citronella"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Natural Floor Cleaner - Lavender",
    category: "Floor Care",
    slug: "natural-floor-cleaner-lavender",
    description:
      "Lavender based floor cleaner for hygienic homes.",
    image: "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-1.png",
    gallery: [
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-1.png", 
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-2.png", 
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-3.png", 
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-4.png", 
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-5.png",
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-6.png",
      "/products/natural-floor-cleaner/lavender/natural-floor-cleaner-lavender-7.png"
    ],
    keywords: ["floor cleaner", "natural floor cleaner", "lavender cleaner"],
    variants: ["Lavender"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Natural Floor Cleaner - Lemon",
    category: "Floor Care",
    slug: "natural-floor-cleaner-lemon",
    description:
      "Lemon based floor cleaner for hygienic homes.",
    image: "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-1.png",
    gallery: [
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-1.png", 
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-2.png", 
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-3.png", 
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-4.png", 
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-5.png",
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-6.png",
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-5ltr.png",
      "/products/natural-floor-cleaner/lemon/natural-floor-cleaner-lemon-7.png"
    ],
    keywords: ["floor cleaner", "natural floor cleaner", "lemon cleaner"],
    variants: ["Lemon"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Natural Floor Cleaner - Pine",
    category: "Floor Care",
    slug: "natural-floor-cleaner-pine",
    description:
      "Pine based floor cleaner for hygienic homes.",
    image: "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-1.png",
    gallery: [
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-1.png",
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-2.png",
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-3.png",
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-4.png",
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-5.png",
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-5ltr.png",
      "/products/natural-floor-cleaner/pine/natural-floor-cleaner-pine-6.png",
    ],
    keywords: ["floor cleaner", "natural floor cleaner", "pine cleaner"],
    variants: ["Pine"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Natural Floor Cleaner - Rose",
    category: "Floor Care",
    slug: "natural-floor-cleaner-rose",
    description:
      "Rose based floor cleaner for hygienic homes.",
    image: "/products/natural-floor-cleaner/rose/natural-floor-cleaner-rose-1.png",
    gallery: [
      "/products/natural-floor-cleaner/rose/natural-floor-cleaner-rose-1.png",
      "/products/natural-floor-cleaner/rose/natural-floor-cleaner-rose-2.png",
      "/products/natural-floor-cleaner/rose/natural-floor-cleaner-rose-3.png",
      "/products/natural-floor-cleaner/rose/natural-floor-cleaner-rose-4.png",
    ],
    keywords: ["floor cleaner", "natural floor cleaner", "rose cleaner"],
    variants: ["Rose"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Green Concentrated Floor Cleaner",
    category: "Floor Care",
    slug: "green-concentrated-floor-cleaner",
    description:
      "Green concentrated floor cleaner for hygienic homes.",
    image: "/products/green-concentrated-cleaner/green-concentrated-cleaner-1.png",
    gallery: ["/products/green-concentrated-cleaner/green-concentrated-cleaner-1.png", "/products/green-concentrated-cleaner/green-concentrated-cleaner-2.png", "/products/green-concentrated-cleaner/green-concentrated-cleaner-3.png", "/products/green-concentrated-cleaner/green-concentrated-cleaner-4.png", "/products/green-concentrated-cleaner/green-concentrated-cleaner-5.png", "/products/green-concentrated-cleaner/green-concentrated-cleaner-6.png"],
    keywords: ["floor cleaner", "green concentrated floor cleaner", "surface cleaner"],
    variants: ["Green"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Dish Wash Gel",
    category: "Kitchen Care",
    slug: "dish-wash-gel",
    description:
      "Powerful grease removal dishwash gel with refreshing fragrance.",
    image: "/catalogue/dish-wash-gel.jpg",
    gallery: ["/catalogue/dish-wash-gel.jpg"],
    keywords: ["dishwash gel", "utensil cleaner", "kitchen cleaner"],
    variants: ["Lemon", "Orange", "Classic"],
    sizes: ["250 ml", "500 ml", "750 ml", "5 L"]
  },
  {
    name: "Toilet Cleaner",
    category: "Washroom Care",
    slug: "toilet-cleaner",
    description:
      "99.9% germ kill toilet cleaner with deep stain removal formula.",
    image: "/catalogue/toilet-cleaner.jpg",
    gallery: [
      "/products/toilet-cleaner/toilet-cleaner-1.png",
      "/products/toilet-cleaner/toilet-cleaner-2.png",
      "/products/toilet-cleaner/toilet-cleaner-3.png",
      "/products/toilet-cleaner/toilet-cleaner-4.png",
      "/products/toilet-cleaner/toilet-cleaner-5.png",
      "/products/toilet-cleaner/toilet-cleaner-6.png",
    ],
    keywords: ["toilet cleaner", "bathroom cleaner", "germ killer"],
    variants: ["Regular", "Power Plus"],
    sizes: ["500 ml", "1 L", "5 L"]
  },
  {
    name: "Hand Wash",
    category: "Hand Hygiene",
    slug: "hand-wash",
    description:
      "Moisturizing gel hand wash available in multiple fragrances.",
    image: "/catalogue/gel-hand-soap.jpg",
    gallery: ["/catalogue/gel-hand-soap.jpg"],
    keywords: ["hand wash", "liquid soap", "antibacterial handwash"],
    variants: ["Rose", "Lemon", "Aloe Vera", "Lavender"],
    sizes: ["250 ml", "500 ml", "1 L", "5 L"]
  },
  {
    name: "Instant Sanitizer",
    category: "Hand Hygiene",
    slug: "sanitizer",
    description:
      "Fast-acting hand sanitizer that kills germs instantly.",
    image: "/catalogue/instant-sanitizer.jpg",
    gallery: ["/catalogue/instant-sanitizer.jpg"],
    keywords: ["hand sanitizer", "alcohol sanitizer"],
    variants: ["70% IPA", "80% Ethyl", "Moisturizing Gel"],
    sizes: ["100 ml", "250 ml", "500 ml", "5 L"]
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, limit)
}

export function getProductImages(product: Product): string[] {
  const images = product.gallery?.length ? product.gallery : [product.image]
  return [...new Set(images)]
}
