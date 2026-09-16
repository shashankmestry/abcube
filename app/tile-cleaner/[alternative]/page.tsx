import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AlternativeLanding from "@/components/tile-cleaner/AlternativeLanding"
import {
  getAlternativeBySlug,
  tileCleanerAlternatives,
  tileCleanerKeywords
} from "@/lib/tile-cleaner"

const siteUrl = "https://abcube.in"

type AlternativePageProps = {
  params: Promise<{ alternative: string }>
}

export async function generateStaticParams() {
  return tileCleanerAlternatives.map((item) => ({ alternative: item.slug }))
}

export async function generateMetadata({
  params
}: AlternativePageProps): Promise<Metadata> {
  const { alternative: slug } = await params
  const alternative = getAlternativeBySlug(slug)

  if (!alternative) {
    return { title: "Page Not Found" }
  }

  return {
    title: { absolute: alternative.metaTitle },
    description: alternative.metaDescription,
    keywords: [
      `${alternative.competitor} alternative`,
      alternative.title,
      ...tileCleanerKeywords.slice(0, 12)
    ],
    alternates: {
      canonical: `/tile-cleaner/${alternative.slug}`
    },
    openGraph: {
      title: alternative.metaTitle,
      description: alternative.metaDescription,
      url: `/tile-cleaner/${alternative.slug}`,
      images: [{ url: "/products/tile-cleaner/tile-cleaner-product-banner.jpg" }]
    }
  }
}

export default async function AlternativePage({ params }: AlternativePageProps) {
  const { alternative: slug } = await params
  const alternative = getAlternativeBySlug(slug)

  if (!alternative) {
    notFound()
  }

  const pageUrl = `${siteUrl}/tile-cleaner/${alternative.slug}`
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: alternative.metaTitle,
        description: alternative.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` }
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
          },
          {
            "@type": "ListItem",
            position: 3,
            name: alternative.title,
            item: pageUrl
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
      <AlternativeLanding alternative={alternative} />
    </>
  )
}
