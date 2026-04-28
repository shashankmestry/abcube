"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute -left-24 top-2 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-lime-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logos/abcube-white.png"
            alt="ABCube Industries white logo"
            width={280}
            height={72}
            className="h-10 w-auto"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
            Partnership Opportunities
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold md:text-4xl">
            Grow your home care business with Abcube as your manufacturing partner
          </h2>
          <p className="mt-4 text-slate-300">
            Ideal for distributors, D2C founders, and institutional supply businesses
            looking for dependable product quality and fulfillment.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="mailto:shashank@abcube.in"
              className="rounded-full bg-gradient-to-r from-green-600 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/30 transition hover:from-green-500 hover:to-lime-400"
            >
              Request Product Catalogue
            </a>
            <a
              href="tel:+919821804409"
              className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold transition hover:border-lime-300 hover:text-lime-300"
            >
              Call for Bulk Inquiry
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-700 shadow-2xl">
            <Image
              src="/catalogue/cta.png"
              alt="Bulk and private label cleaning product solutions"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}