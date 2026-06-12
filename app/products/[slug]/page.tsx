import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductDetailClient from "@/components/ProductDetailClient"
import { getProductBySlug, products } from "@/lib/products"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found"
    }
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [{ url: product.image }]
    }
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const siteUrl = "https://abcube.in"
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.gallery?.length ? product.gallery : [product.image],
        brand: {
          "@type": "Brand",
          name: "ABCube Industries"
        },
        category: product.category
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
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `${siteUrl}/products/${product.slug}`
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
      <ProductDetailClient product={product} />
    </>
  )
}
