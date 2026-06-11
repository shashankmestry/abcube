"use client"

import { useMemo, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"
import { products } from "@/lib/products"
import ProductImageCarousel from "@/components/ProductImageCarousel"

const categories = ["Floor Care", "Kitchen Care", "Washroom Care", "Hand Hygiene"]

export default function ProductsPageClient() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const filteredProducts = useMemo(
    () =>
      selectedCategories.length === 0
        ? products
        : products.filter((product) => selectedCategories.includes(product.category)),
    [selectedCategories]
  )

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    )
  }

  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
            Product Catalogue
          </p>
          <h1 className="section-title mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Home Cleaning Products for Retail, Distribution, and Institutional Supply
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            Abcube offers a complete range of floor care, kitchen care, washroom
            care, and hand hygiene products. Available in retail packs and bulk
            sizes with private label support.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-800">Retail Ready</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Bottle formats for daily consumer use</p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-800">Bulk Supply</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Large packs for institutions and distributors</p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-800">Private Label</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Custom branding and pack-size options</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-4">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggleCategory(item)}
              className={`rounded-2xl border p-4 text-center cursor-pointer transition ${
                selectedCategories.includes(item)
                  ? "border-green-700 bg-green-700 text-white shadow-lg shadow-green-200"
                  : "border-green-200 bg-green-50/60 text-green-900 hover:bg-green-100"
              }`}
            >
              <p className="font-bold">{item}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.slug}
              className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-100"
            >
              <ProductImageCarousel
                images={product.gallery ?? [product.image]}
                name={product.name}
                // aspectClass="aspect-[4/5]"
              />
              <div className="p-5">
                <h2 className="section-title text-xl font-bold text-slate-900">{product.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <div className="mt-4 rounded-2xl border border-green-100 bg-green-50/70 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-green-800">Variants</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <span
                        key={`${product.slug}-${variant}`}
                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-green-200"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-700">Pack Sizes</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={`${product.slug}-${size}`}
                        className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filteredProducts.length === 0 ? (
          <p className="mx-auto mt-8 max-w-7xl px-4 text-sm font-medium text-slate-600">
            No products for selected filters. Select one or more categories.
          </p>
        ) : null}
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
