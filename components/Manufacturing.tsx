"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    title: "Contract Manufacturing",
    description:
      "From formulation transfer to batch manufacturing with quality checks and dispatch support."
  },
  {
    title: "Private Label & Branding",
    description:
      "Custom fragrance, color, packaging sizes, and label design support for your own product line."
  },
  {
    title: "Third-Party Manufacturing",
    description:
      "Scalable production for D2C brands, wholesalers, institutional suppliers, and regional distributors."
  },
  {
    title: "Custom Product Development",
    description:
      "R&D assistance for benchmark matching, stability, viscosity, and fragrance optimization."
  },
  {
    title: "Packaging & Filling",
    description:
      "Bottle sourcing, shrink sleeve/labeling, induction sealing, and carton packing services."
  },
  {
    title: "Regulatory & Documentation",
    description:
      "Batch records, QC reports, and specification documents to simplify distributor onboarding."
  }
]

const serviceIcons = ["⚙", "🏷", "🏭", "🧪", "📦", "📋"]

const highlights = [
  { title: "Modern blending units", label: "01" },
  { title: "Stringent QC process", label: "02" },
  { title: "Flexible MOQ options", label: "03" },
  { title: "Pan-India dispatch", label: "04" }
]

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="relative overflow-hidden bg-gradient-to-b from-green-50 to-lime-50/40 py-20">
      <div className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-green-300/25 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
              Manufacturing Services
            </p>
            <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              End-to-end support to launch and scale your cleaning brand
            </h2>
            <p className="mt-4 text-slate-600">
              Beyond our own brand products, Abcube supports businesses that want
              reliable production and fast market entry in the home care category.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 text-sm">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-green-200 bg-white p-5 shadow-lg shadow-green-100/70"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lime-200/50 transition group-hover:scale-125" />
                  <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
                    {item.label}
                  </span>
                  <p className="relative mt-4 text-base font-extrabold leading-snug text-green-950">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-emerald-100 shadow-xl">
              <Image
                src="/catalogue/manufacturing.jpg"
                alt="Abcube manufacturing and packaging services"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-white via-green-50/40 to-lime-50/60 p-6 shadow-lg shadow-green-100/70 transition hover:border-green-200 hover:shadow-2xl hover:shadow-green-100"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-lime-200/40 transition duration-500 group-hover:scale-125" />
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-800 text-sm text-white shadow-md shadow-green-700/30">
                {serviceIcons[index]}
              </span>
              <h3 className="section-title relative mt-4 font-bold text-slate-900">{service.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <div className="relative mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-green-700 to-lime-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { image: "/catalogue/herbal-floor-cleaner.jpg", title: "Surface Care" },
            { image: "/catalogue/dish-wash-gel.jpg", title: "Kitchen Hygiene" },
            { image: "/catalogue/toilet-cleaner.jpg", title: "Bath & Toilet Care" }
          ].map((promo) => (
            <div key={promo.title} className="group relative overflow-hidden rounded-2xl">
              <Image
                src={promo.image}
                alt={promo.title}
                width={500}
                height={340}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-semibold text-white">{promo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}