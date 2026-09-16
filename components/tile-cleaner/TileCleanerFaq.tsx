"use client"

import { useState } from "react"
import { tileCleanerFaqs } from "@/lib/tile-cleaner"

export default function TileCleanerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="tile-cleaner-faq" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">FAQ</p>
        <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Tile Cleaner Manufacturing FAQs
        </h2>

        <div className="mt-8 divide-y divide-green-100 overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
          {tileCleanerFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-green-50/60"
                >
                  <span className="section-title font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-xl font-bold text-green-700 transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
