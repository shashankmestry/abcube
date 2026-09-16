import type { Metadata } from "next"
import TileCleanerLanding from "@/components/tile-cleaner/TileCleanerLanding"
import { packSizes, tileCleanerFaqs, tileCleanerKeywords } from "@/lib/tile-cleaner"

const siteUrl = "https://abcube.in"
const title = "Tile Cleaner Manufacturer in India | OEM & Private Label"
const description =
  "ABCube manufactures professional Tile Cleaner solutions for ceramic, vitrified and porcelain surfaces. OEM, private label, bulk supply and custom manufacturing available."

export const metadata: Metadata = {
  title: {
    absolute: "Tile Cleaner Manufacturer in India | OEM & Private Label | ABCube"
  },
  description,
  keywords: tileCleanerKeywords,
  alternates: {
    canonical: "/tile-cleaner"
  },
  openGraph: {
    title,
    description,
    url: "/tile-cleaner",
    images: [{ url: "/products/tile-cleaner/tile-cleaner-product-banner.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/products/tile-cleaner/tile-cleaner-product-banner.jpg"]
  }
}

export default function TileCleanerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/tile-cleaner#webpage`,
        url: `${siteUrl}/tile-cleaner`,
        name: title,
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` }
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}/tile-cleaner#product`,
        name: "Tile Cleaner - Rapid Action Tile & Ceramic Cleaner",
        description,
        category: "Tile Cleaning Chemical",
        image: [`${siteUrl}/products/tile-cleaner/tile-cleaner-product-banner.jpg`],
        brand: { "@type": "Brand", name: "Eco Hygiene by ABCube Industries" },
        manufacturer: { "@id": `${siteUrl}/#organization` },
        material: "Liquid tile and ceramic cleaning concentrate",
        additionalProperty: packSizes.map((pack) => ({
          "@type": "PropertyValue",
          name: "Pack Size",
          value: pack.size
        }))
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/tile-cleaner#oem-service`,
        name: "Tile Cleaner OEM and Private Label Manufacturing",
        serviceType: "Contract manufacturing of tile cleaning chemicals",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "IN",
        url: `${siteUrl}/tile-cleaner`
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/tile-cleaner#faq`,
        mainEntity: tileCleanerFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tile Cleaner",
            item: `${siteUrl}/tile-cleaner`
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
      <TileCleanerLanding />
    </>
  )
}
