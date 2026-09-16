import type { MetadataRoute } from "next"
import { detailPageProducts } from "@/lib/products"
import { tileCleanerAlternatives } from "@/lib/tile-cleaner"

const siteUrl = "https://abcube.in"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/tile-cleaner`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/manufacturing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...tileCleanerAlternatives.map((alternative) => ({
      url: `${siteUrl}/tile-cleaner/${alternative.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...detailPageProducts.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ]
}
