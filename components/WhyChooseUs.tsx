"use client"

import { motion } from "framer-motion"

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
            Why Abcube
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Built for reliable quality, consistency, and fast go-to-market
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "In-house quality control and batch consistency checks",
            "Scalable manufacturing for both own-brand and private label",
            "Competitive costing with transparent production planning",
            "Dedicated support for distributors and institutional buyers"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-green-100 bg-gradient-to-b from-green-50/80 to-white p-5 text-sm text-slate-700 shadow-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "100+", label: "Channel partners served" },
            { value: "25+", label: "Private label projects" },
            { value: "6", label: "Core product categories" },
            { value: "99%", label: "On-time dispatch focus" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl bg-gradient-to-r from-green-800 to-green-600 p-6 text-center text-white shadow-lg shadow-green-300/40"
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 text-sm text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-gradient-to-r from-green-50 via-white to-lime-50 p-8 shadow-sm">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-green-800">
            Customer Voice
          </p>
          <div className="mx-auto mt-4 max-w-3xl text-center">
            <p className="section-title text-xl font-semibold text-slate-900 md:text-2xl">
              &ldquo;Great quality consistency and timely delivery. Their team made our private label launch smooth from formulation to finished packaging.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium text-slate-600">
              Regional Distributor Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}