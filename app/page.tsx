
import type { Metadata } from "next"
import Products from "@/components/Products"
import Manufacturing from "@/components/Manufacturing"
import WhyChooseUs from "@/components/WhyChooseUs"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import CTA from "@/components/CTA"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Home Cleaning Product Manufacturer in India",
  description:
    "Explore ABCube Industries for floor, kitchen, washroom, and hand hygiene products with private label and contract manufacturing support.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Home Cleaning Product Manufacturer in India",
    description:
      "Explore ABCube Industries for floor, kitchen, washroom, and hand hygiene products with private label and contract manufacturing support.",
    url: "/"
  }
}

export default function Home() {
  const siteUrl = "https://abcube.in"
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Home Cleaning Product Manufacturer in India",
        description:
          "Explore ABCube Industries for floor, kitchen, washroom, and hand hygiene products with private label and contract manufacturing support.",
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          }
        ]
      }
    ]
  }

  return (
    <main id="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Navbar />
      <Hero />
      <Products />
      <Manufacturing />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}