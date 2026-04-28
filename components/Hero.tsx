"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ecf8ee] via-[#fbfffc] to-white py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-green-300/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-2 h-40 w-40 rounded-full bg-lime-300/40 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-800">
            ABCube Industries Pvt. Ltd.
          </span>
          <h1 className="section-title mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Home Cleaning Products Manufacturer for Modern Indian Brands
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
            We manufacture quality home care formulations, support contract
            manufacturing, and help businesses scale private label products with
            stable supply and compliant packaging.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/30 transition hover:from-emerald-700 hover:to-teal-700"
            >
              Explore Products
            </a>
            <a
              href="#manufacturing"
              className="rounded-full border border-green-700 px-6 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
            >
              Start Contract Manufacturing
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-emerald-100/70 shadow-2xl">
            <Image
              src="/catalogue/banner.png"
              alt="ABCube home cleaning products range from catalogue"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="glass-card absolute -right-4 -top-4 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold text-green-800 shadow-xl"
          >
            In-house manufacturing
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Quick Dispatch", note: "Pan-India logistics support", tone: "bg-[#dff2e4]" },
          { title: "OEM / Private Label", note: "Brand launch ready SKUs", tone: "bg-[#e9f5df]" },
          { title: "QC Assured Batches", note: "Stable and repeatable quality", tone: "bg-[#e3f6ea]" },
          { title: "Flexible MOQ", note: "Scale from pilot to bulk", tone: "bg-[#e8f4e5]" }
        ].map((item) => (
          <div
            key={item.title}
            className={`${item.tone} rounded-2xl border-2 border-green-200 p-5 shadow-lg shadow-green-200/50 transition hover:-translate-y-1 hover:shadow-xl`}
          >
            <p className="text-base font-extrabold tracking-tight text-green-900">{item.title}</p>
            <p className="mt-2 text-sm font-medium text-green-800/90">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}