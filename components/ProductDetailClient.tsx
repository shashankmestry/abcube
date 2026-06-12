"use client"

import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"
import ProductGallery from "@/components/ProductGallery"
import type { Product } from "@/lib/products"
import { getProductImages, getRelatedProducts } from "@/lib/products"

const categoryHighlights: Record<Product["category"], string[]> = {
  "Floor Care": [
    "Suitable for daily home and light commercial floor maintenance",
    "Developed for effective soil removal with a fresh finish",
    "Available in multiple pack sizes for retail and bulk supply"
  ],
  "Kitchen Care": [
    "Formulated for grease and residue removal on utensils and surfaces",
    "Balanced cleaning performance with consumer-friendly fragrances",
    "Ideal for household kitchens and institutional food prep areas"
  ],
  "Washroom Care": [
    "Designed for washroom hygiene and stain management",
    "Supports routine bathroom cleaning with dependable results",
    "Suitable for homes, offices, and facility management use"
  ],
  "Hand Hygiene": [
    "Supports everyday hand hygiene routines for families and workplaces",
    "Available in convenient retail and refill-friendly pack formats",
    "Suitable for homes, institutions, and high-traffic environments"
  ]
}

type ProductDetailClientProps = {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const images = getProductImages(product)
  const relatedProducts = getRelatedProducts(product)
  const highlights = categoryHighlights[product.category]

  return (
    <main>
      <Navbar />

      <section className="border-b border-green-100 bg-gradient-to-b from-green-50 to-white py-8">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-green-800">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/products" className="hover:text-green-800">
                  Products
                </Link>
              </li>
              <li>/</li>
              <li className="font-medium text-slate-900">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-800">
              Product Gallery
            </p>
            <div className="mt-4">
              <ProductGallery images={images} productName={product.name} />
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
              {product.category}
            </span>
            <h1 className="section-title mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{product.description}</p>

            <div className="mt-6 rounded-2xl border border-green-100 bg-green-50/60 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-green-800">Available Variants</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <span
                    key={variant}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-green-200"
                  >
                    {variant}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700">Pack Sizes</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:info@abcube.in"
                className="rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-800"
              >
                Request Quote
              </a>
              <a
                href="tel:+919096668710"
                className="rounded-full border border-green-300 px-5 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
              >
                Call for Bulk Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-green-100 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title text-2xl font-bold text-slate-900 md:text-3xl">Product Overview</h2>
          <p className="mt-4 max-w-4xl text-slate-600">
            {product.name} is part of the Abcube home care portfolio, manufactured for
            consistent quality, dependable performance, and scalable supply across retail,
            distribution, and institutional channels.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-green-100 bg-green-50/50 p-4 text-sm font-medium text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-medium text-green-800"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="border-t border-green-100 bg-green-50/40 py-14">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="section-title text-2xl font-bold text-slate-900">Related Products</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-green-800">
                      {item.category}
                    </p>
                    <h3 className="section-title mt-1 font-bold text-slate-900">{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTA />
      <Footer />
    </main>
  )
}
