"use client"
import { useEffect, useState } from "react"
import { products } from "../lib/products"
import Image from "next/image"
import { motion } from "framer-motion"

const headingText = "High-demand home cleaning products from our own brand catalogue"
const headingWords = headingText.split(" ")

function ProductImageCarousel({
  images,
  name
}: {
  images: string[]
  name: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [images.length])

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-emerald-100/70 via-white to-cyan-50/50">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${name} product view ${index + 1}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-green-900 shadow-md backdrop-blur transition hover:bg-white"
            aria-label={`Show previous ${name} image`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-green-900 shadow-md backdrop-blur transition hover:bg-white"
            aria-label={`Show next ${name} image`}
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-2 py-1 shadow-sm backdrop-blur">
            {images.map((image, index) => (
              <button
                key={`${image}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-5 bg-green-800" : "w-2 bg-green-300"
                }`}
                aria-label={`Show ${name} image ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="relative bg-white py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-green-50/80 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
            Product Portfolio
          </p>
          <motion.h2
            className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={{
                  hidden: { opacity: 0, x: -14, filter: "blur(2px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className="mt-4 text-slate-600">
            Organify-style visual product cards redesigned for home care and
            institutional hygiene segments.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["Floor Care", "Kitchen Care", "Washroom Care", "Hand Hygiene"].map((item) => (
              <span
                key={item}
                className="rounded-full border-2 border-green-300 bg-white px-5 py-2 text-sm font-bold tracking-wide text-green-900 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-[#e9f8ea] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-800">Featured Range</p>
            <h3 className="section-title mt-2 text-2xl font-bold text-slate-900">Herbal Home Care Collection</h3>
            <p className="mt-2 text-sm text-slate-600">Naturally inspired fragrances with strong cleaning performance.</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-[#fff4e8] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">Bulk Supply</p>
            <h3 className="section-title mt-2 text-2xl font-bold text-slate-900">Institutional & Distributor Packs</h3>
            <p className="mt-2 text-sm text-slate-600">High-volume can and jar formats for commerce and HoReCa channels.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group glass-card overflow-hidden rounded-2xl border border-white/70 shadow-sm transition hover:shadow-2xl hover:shadow-emerald-100/70"
            >
              <ProductImageCarousel images={product.gallery ?? [product.image]} name={product.name} />
              <div className="p-5">
                <h3 className="section-title font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.keywords.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-xs text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">Variants:</span>{" "}
                    {product.variants.join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Sizes:</span>{" "}
                    {product.sizes.join(" / ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}