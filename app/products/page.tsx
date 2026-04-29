import type { Metadata } from "next"
import ProductsPageClient from "@/components/ProductsPageClient"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse ABCube's floor care, kitchen care, washroom care, and hand hygiene product catalogue for retail and bulk requirements.",
  alternates: {
    canonical: "/products"
  },
  openGraph: {
    title: "Home Care Product Catalogue",
    description:
      "Browse ABCube's floor care, kitchen care, washroom care, and hand hygiene product catalogue for retail and bulk requirements.",
    url: "/products"
  }
}

export default function ProductsPage() {
  const siteUrl = "https://abcube.in"
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/products#webpage`,
        url: `${siteUrl}/products`,
        name: "Home Care Product Catalogue",
        description:
          "Browse ABCube's floor care, kitchen care, washroom care, and hand hygiene product catalogue for retail and bulk requirements.",
        isPartOf: {
          "@id": `${siteUrl}/#website`
        }
      },
      {
        "@type": "ItemList",
        name: "ABCube Product Categories",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Floor Care" },
          { "@type": "ListItem", position: 2, name: "Kitchen Care" },
          { "@type": "ListItem", position: 3, name: "Washroom Care" },
          { "@type": "ListItem", position: 4, name: "Hand Hygiene" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${siteUrl}/products`
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
          __html: JSON.stringify(structuredData)
        }}
      />
      <ProductsPageClient />
    </>
  )
}
