export const companyContact = {
  phone: "+91 9096 668 710",
  phoneHref: "tel:+919096668710",
  whatsappNumber: "919096668710",
  email: "info@abcube.in",
  emailHref: "mailto:info@abcube.in"
}

export const tileCleanerWhatsappMessage =
  "Hello ABCube Team, I am interested in your Tile Cleaner. I would like to know about sample/bulk/OEM/private-label options."

export function whatsappLink(message: string = tileCleanerWhatsappMessage) {
  return `https://wa.me/${companyContact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const heroAudience = ["Brands", "Distributors", "Institutions", "OEM Customers"]

export const heroReasons = [
  "Manufacturer Direct",
  "Bulk Supply",
  "OEM",
  "Private Label"
]

export const uspStrip = ["OEM", "Private Label", "Bulk Supply", "Custom Development"]

export const productFeatures = [
  {
    title: "Rapid Action Formula",
    description:
      "A professional tile and ceramic cleaning formulation developed for routine and periodic tile maintenance."
  },
  {
    title: "Removes Stains",
    description:
      "Formulated to work on everyday tile soiling, grime and surface stains as per the approved product label."
  },
  {
    title: "Maintains Beauty of Tiles",
    description:
      "Developed to clean tile surfaces while helping retain their original appearance and shine."
  },
  {
    title: "Can Be Diluted in Water",
    description:
      "Dilution-friendly usage helps customers manage cost-per-use across housekeeping and commercial cleaning."
  }
]

export const suitableSurfaces = [
  { name: "Ceramic Tiles", icon: "◧" },
  { name: "Vitrified Tiles", icon: "◨" },
  { name: "Porcelain Tiles", icon: "▣" },
  { name: "Mosaic Tiles", icon: "▦" },
  { name: "Bathroom Tiles", icon: "◍" },
  { name: "Kitchen Tiles", icon: "◫" },
  { name: "Commercial Floors", icon: "▤" },
  { name: "Wall Tiles", icon: "▥" }
]

export const applicationDisclaimer =
  "Always test the product on a small, inconspicuous area before full-scale application and follow the product's technical/application instructions."

export const cleaningProblems = [
  {
    problem: "Dirt and grime",
    detail: "Everyday traffic soiling on floor and wall tiles in homes and commercial spaces."
  },
  {
    problem: "Greasy residues",
    detail: "Oil and grease build-up on kitchen tiles and food preparation areas."
  },
  {
    problem: "Soap deposits",
    detail: "Soap and shampoo residue accumulation on bathroom and washroom tiles."
  },
  {
    problem: "Mineral deposits",
    detail: "Hard water marks and deposits that dull the appearance of tile surfaces."
  },
  {
    problem: "Surface stains",
    detail: "General surface staining that develops on tiles with regular use."
  },
  {
    problem: "Construction-related residues",
    detail: "Post-construction and post-renovation tile cleaning requirements."
  },
  {
    problem: "General tile-cleaning requirements",
    detail: "Scheduled housekeeping and deep-cleaning cycles for facilities and institutions."
  }
]

export const claimsNote =
  "Performance on specific stains and residues depends on the approved formulation, dilution and surface condition. Our technical team shares validated performance details and test data for your specific requirement during evaluation."

export const supplyCapabilities = [
  {
    heading: "Tile Cleaner Bulk Supplier & Wholesale Supply",
    body:
      "As a tile cleaner bulk supplier, ABCube handles Tile Cleaner wholesale volumes for distributors, dealers and institutional buyers. Commercial tile cleaner packs are available in 5 Litre and customised bulk formats for high-consumption sites."
  },
  {
    heading: "Tile Cleaner OEM Manufacturer & Private Label",
    body:
      "Our tile cleaner OEM manufacturing and private label tile cleaner programs allow brands to sell under their own label. We also take up Tile Cleaner contract manufacturing and Tile Cleaner third party manufacturing as a cleaning chemical OEM manufacturer in India."
  },
  {
    heading: "Professional Tile Cleaning Chemical for Every Surface",
    body:
      "The same professional tile cleaning chemical is supplied as a ceramic tile cleaner, vitrified tile cleaner and porcelain tile cleaner, selected according to the surface and application at your site."
  }
]

export const businessSnapshot = [
  { label: "Product", value: "Tile Cleaner (Professional Tile Cleaning Chemical)" },
  {
    label: "Business Type",
    value: "Tile Cleaner Manufacturer India, Tile Cleaner Supplier India & Exporter"
  },
  {
    label: "Manufacturing Services",
    value:
      "Tile Cleaner OEM Manufacturer, Tile Cleaner Private Label Manufacturer, Tile Cleaner Contract Manufacturing, Tile Cleaner Third Party Manufacturing"
  },
  {
    label: "Supply Models",
    value:
      "Tile Cleaner Bulk Supplier, Tile Cleaner Wholesale, Institutional & Commercial Tile Cleaner Supply"
  },
  {
    label: "Category",
    value:
      "Tile Cleaning Chemical Manufacturer, Tile Cleaning Chemical Supplier & Cleaning Chemical OEM Manufacturer India"
  },
  {
    label: "Suitable Surfaces",
    value: "Ceramic, Vitrified, Porcelain, Mosaic, Wall & Floor Tiles"
  },
  { label: "Pack Sizes", value: "200 ml, 500 ml, 1 Litre, 5 Litre, Bulk / Customised" },
  { label: "Supply Area", value: "Pan-India supply, export enquiries welcome" }
]

export const searchIntentNote =
  "Buyers reach us searching for a tile stain remover, tile cleaning chemical supplier or commercial tile cleaner for regular maintenance contracts. If that matches your requirement, our team will recommend the right dilution, pack size and supply model. Performance details for specific stains are shared from validated test data during evaluation."

export const whyAbcube = [
  {
    title: "Manufacturer Direct",
    description: "Buy directly from the manufacturing unit without intermediate trading margins."
  },
  {
    title: "OEM Manufacturing",
    description: "Complete OEM production of tile cleaner under your brand and specification."
  },
  {
    title: "Private Label Manufacturing",
    description: "Private label programs with packaging and artwork coordination support."
  },
  {
    title: "Bulk Supply",
    description: "Bulk and institutional pack formats for high-consumption requirements."
  },
  {
    title: "Custom Product Development",
    description: "Formulation development aligned to your target performance and price point."
  },
  {
    title: "Packaging Support",
    description: "Bottle, closure, carton and label options for retail and commercial packs."
  },
  {
    title: "Quality Control",
    description: "In-process and finished-goods checks before batch clearance and dispatch."
  },
  {
    title: "Batch-wise Production",
    description: "Batch-wise manufacturing with traceable production records."
  },
  {
    title: "Technical Support",
    description: "Technical assistance on product selection, dilution and application guidance."
  },
  {
    title: "Pan-India Supply",
    description: "Dispatch and supply support for customers across India."
  },
  {
    title: "Export Supply",
    description: "Export enquiries welcome with documentation and packaging support."
  }
]

export const endToEndProcess = [
  "Requirement Discussion",
  "Product Development",
  "Sample & Approval",
  "Manufacturing & Quality Check",
  "Packing & Dispatch"
]

export const oemServices = [
  "Product formulation",
  "Product customisation",
  "Fragrance selection",
  "Packaging selection",
  "Bottle sourcing",
  "Label / artwork coordination",
  "Filling & packing",
  "Bulk manufacturing",
  "Quality documentation",
  "Commercial production",
  "Dispatch"
]

export const bulkSegments = [
  "Hotels",
  "Hospitals",
  "Restaurants",
  "Facility Management Companies",
  "Housekeeping Agencies",
  "Malls",
  "Commercial Buildings",
  "Industrial Facilities",
  "Construction Companies",
  "Distributors",
  "Institutional Buyers"
]

export const distributorRoles = [
  "Distributor",
  "Dealer",
  "Regional Distributor",
  "Institutional Supplier"
]

export const packSizes = [
  { size: "200 ml", note: "Retail trial pack" },
  { size: "500 ml", note: "Retail and household pack" },
  { size: "1 Litre", note: "Regular consumption pack" },
  { size: "5 Litre", note: "Institutional and housekeeping pack" },
  { size: "Bulk / Customised", note: "Customised pack sizes on requirement" }
]

export const technicalDocuments = [
  { name: "Technical Data Sheet (TDS)", detail: "Product specification and usage parameters" },
  { name: "Safety Data Sheet (SDS)", detail: "Handling, storage and safety information" },
  { name: "Product Specification", detail: "Approved specification for the supplied grade" },
  { name: "Method of Analysis (MoA)", detail: "Analytical method reference for quality checks" },
  { name: "Application Guide", detail: "Dilution and application recommendations" },
  { name: "Sample COA", detail: "Certificate of analysis format for supplied batches" },
  { name: "Packaging Specification", detail: "Bottle, closure, label and carton details" }
]

export const interestOptions = [
  "Product Sample",
  "Bulk Purchase",
  "Distributor Supply",
  "OEM Manufacturing",
  "Private Label",
  "Institutional Supply",
  "Export"
]

export const requirementVolumes = [
  "50–100 L/month",
  "100–500 L/month",
  "500–1,000 L/month",
  "1,000–5,000 L/month",
  "5,000+ L/month",
  "One-time requirement",
  "Not decided yet"
]

export const tileCleanerFaqs = [
  {
    question: "Is ABCube a Tile Cleaner manufacturer in India?",
    answer:
      "Yes. ABCube manufactures cleaning and hygiene products and provides bulk, OEM and private-label manufacturing solutions."
  },
  {
    question: "Do you provide private-label Tile Cleaner manufacturing?",
    answer: "Yes, subject to product requirements, MOQ and commercial feasibility."
  },
  {
    question: "Can I purchase Tile Cleaner in bulk?",
    answer:
      "Yes. ABCube can supply Tile Cleaner for institutional, commercial, distributor and bulk requirements."
  },
  {
    question: "Can I get a Tile Cleaner sample before placing a bulk order?",
    answer: "Sample availability can be discussed based on the customer's requirement."
  },
  {
    question: "Do you manufacture Tile Cleaner for other brands?",
    answer: "Yes, ABCube offers OEM/private-label manufacturing solutions."
  },
  {
    question: "What pack sizes are available?",
    answer:
      "Tile Cleaner is currently offered in 200 ml, 500 ml, 1 Litre and 5 Litre packs, along with bulk and customised pack options based on the approved product configuration."
  },
  {
    question: "Can the formulation or fragrance be customised?",
    answer: "Customisation can be evaluated based on technical requirements, MOQ and feasibility."
  },
  {
    question: "Do you supply Tile Cleaner to distributors?",
    answer: "Yes. Distributor and bulk supply enquiries are welcome."
  }
]

export type TileCleanerAlternative = {
  slug: string
  competitor: string
  title: string
  metaTitle: string
  metaDescription: string
  heading: string
  intro: string
  searchContext: string
  comparisonPoints: string[]
}

export const tileCleanerAlternatives: TileCleanerAlternative[] = [
  {
    slug: "roff-cera-clean-alternative",
    competitor: "Pidilite Roff Cera Clean / Roff T16 Cera Clean",
    title: "Roff Cera Clean Alternative",
    metaTitle: "Roff Cera Clean Alternative | Tile Cleaner Manufacturer India",
    metaDescription:
      "Looking for a Roff Cera Clean alternative? ABCube manufactures professional Tile Cleaner with OEM, private label and bulk supply options across India.",
    heading: "Looking for a Roff Cera Clean Alternative?",
    intro:
      "Buyers comparing Pidilite Roff Cera Clean and Roff T16 Cera Clean often need a supply partner rather than a single retail product. ABCube manufactures professional tile and ceramic cleaning solutions with bulk supply, OEM and private-label manufacturing options.",
    searchContext:
      "Roff Cera Clean and Roff T16 Cera Clean are widely used tile cleaning products in the Indian construction chemicals market. Businesses evaluating alternatives are typically looking for manufacturer-direct supply, flexible pack sizes, own-brand manufacturing or better commercial terms for repeat volumes.",
    comparisonPoints: [
      "Manufacturer-direct supply instead of purchasing only through retail or trade channels",
      "OEM and private-label manufacturing so you can sell under your own brand",
      "Flexible pack sizes from 200 ml retail packs to 5 Litre institutional packs and bulk formats",
      "Custom formulation and fragrance evaluation based on your target specification and price point",
      "Batch-wise production with quality documentation support for institutional buyers"
    ]
  },
  {
    slug: "myk-laticrete-alternative",
    competitor: "MYK LATICRETE Tile Cleaning Products",
    title: "MYK LATICRETE Tile Cleaner Alternative",
    metaTitle: "MYK LATICRETE Tile Cleaner Alternative | OEM Manufacturer India",
    metaDescription:
      "Searching for a MYK LATICRETE tile cleaner alternative? ABCube offers OEM, private label and bulk Tile Cleaner manufacturing for brands and institutions.",
    heading: "Looking for a MYK LATICRETE Tile Cleaner Alternative?",
    intro:
      "If you are evaluating MYK LATICRETE tile cleaning products, ABCube offers an alternative route: manufacturer-direct tile cleaner supply with OEM and private-label manufacturing for brands, distributors and institutional buyers.",
    searchContext:
      "MYK LATICRETE supplies tile care products to the construction chemicals segment. Companies searching for alternatives usually need contract manufacturing capacity, own-brand production or bulk supply for projects and facility management contracts.",
    comparisonPoints: [
      "Contract and third-party manufacturing capacity for tile cleaning products",
      "Private label programs with packaging, label artwork and bottle sourcing support",
      "Bulk and institutional supply for facility management, hospitality and construction requirements",
      "Technical support on dilution, application guidance and documentation",
      "Pan-India dispatch with export enquiries welcome"
    ]
  },
  {
    slug: "weberklin-ceraplus-alternative",
    competitor: "Weberklin Ceraplus",
    title: "Weberklin Ceraplus Alternative",
    metaTitle: "Weberklin Ceraplus Alternative | Tile Cleaner Manufacturer India",
    metaDescription:
      "Need a Weberklin Ceraplus alternative? ABCube manufactures Tile Cleaner with bulk supply, OEM and private-label manufacturing options in India.",
    heading: "Looking for a Weberklin Ceraplus Alternative?",
    intro:
      "Businesses comparing Weberklin Ceraplus for tile cleaning requirements often need a manufacturing partner for sustained volumes. ABCube manufactures professional tile and ceramic cleaning solutions with bulk, OEM and private-label options.",
    searchContext:
      "Weberklin Ceraplus is used for tile cleaning applications in the construction chemicals category. Alternative searches typically come from distributors, project buyers and brands that want manufacturer-direct pricing or their own labelled product.",
    comparisonPoints: [
      "Direct manufacturing relationship for repeat and project-based volumes",
      "Own-brand tile cleaner production under OEM or private label arrangements",
      "Custom pack sizes and packaging configurations for retail or institutional channels",
      "Formulation development support aligned to your performance requirement",
      "Quality control and batch-wise production records"
    ]
  }
]

export const tileCleanerKeywords = [
  "Tile Cleaner Manufacturer in India",
  "Tile Cleaner Manufacturer",
  "Tile Cleaning Chemical Manufacturer",
  "Tile Cleaner Supplier India",
  "Tile Cleaner Manufacturer India",
  "Tile Cleaner Bulk Supplier",
  "Tile Cleaner Wholesale",
  "Professional Tile Cleaner",
  "Commercial Tile Cleaner",
  "Tile Cleaning Chemical Supplier",
  "Tile Cleaner OEM",
  "Tile Cleaner OEM Manufacturer",
  "Private Label Tile Cleaner",
  "Tile Cleaner Private Label Manufacturer",
  "Tile Cleaner Contract Manufacturing",
  "Tile Cleaner Third Party Manufacturing",
  "Cleaning Chemical OEM Manufacturer India",
  "Tile Cleaner",
  "Ceramic Tile Cleaner",
  "Vitrified Tile Cleaner",
  "Porcelain Tile Cleaner",
  "Tile Cleaning Chemical",
  "Tile Stain Remover",
  "Professional Tile Cleaning Chemical"
]

export function getAlternativeBySlug(slug: string) {
  return tileCleanerAlternatives.find((item) => item.slug === slug)
}
