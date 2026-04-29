import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contract Manufacturing",
  description:
    "Scale your cleaning brand with ABCube's private label, third-party manufacturing, bulk supply, and packaging operations.",
  alternates: {
    canonical: "/manufacturing"
  },
  openGraph: {
    title: "Contract Manufacturing for Home Care Brands",
    description:
      "Scale your cleaning brand with ABCube's private label, third-party manufacturing, bulk supply, and packaging operations.",
    url: "/manufacturing"
  }
}

const processSteps = [
  {
    title: "Requirement Discovery",
    detail:
      "We align on category, target market, benchmark product, pricing goals, and regulatory expectations."
  },
  {
    title: "Formula & Pack Development",
    detail:
      "Finalize formulation profile, fragrance direction, packaging format, and artwork specifications."
  },
  {
    title: "Pilot Validation",
    detail:
      "Run pilot batches, validate product performance, and lock technical and visual standards before scale-up."
  },
  {
    title: "Commercial Production",
    detail:
      "Execute filling, sealing, coding, and batch documentation with quality checks at each stage."
  },
  {
    title: "Dispatch & Replenishment",
    detail:
      "Coordinate dispatch schedules and repeat production cycles to maintain supply continuity."
  }
]

const capabilities = [
  {
    title: "Private Label Manufacturing",
    desc: "Custom product and packaging configuration under your brand name with launch-ready support."
  },
  {
    title: "Third-Party Manufacturing",
    desc: "Reliable recurring production for distributors, marketplaces, and regional home-care brands."
  },
  {
    title: "Bulk Supply Programs",
    desc: "Large-format SKUs for institutions, facility management, hospitality, and commercial channels."
  },
  {
    title: "Custom Product Development",
    desc: "Product profile optimization for fragrance, cleaning performance, viscosity, and shelf stability."
  },
  {
    title: "Packaging & Label Operations",
    desc: "Bottle sourcing, labeling, coding, secondary packing, and dispatch-ready unit preparation."
  },
  {
    title: "Quality & Batch Documentation",
    desc: "Production records, QC checkpoints, and traceability documentation for confident scaling."
  }
]

export default function ManufacturingPage() {
  const siteUrl = "https://abcube.in"
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/manufacturing#webpage`,
        url: `${siteUrl}/manufacturing`,
        name: "Contract Manufacturing for Home Care Brands",
        description:
          "Scale your cleaning brand with ABCube's private label, third-party manufacturing, bulk supply, and packaging operations.",
        isPartOf: {
          "@id": `${siteUrl}/#website`
        }
      },
      {
        "@type": "Service",
        serviceType: "Contract Manufacturing and Private Label",
        provider: {
          "@id": `${siteUrl}/#organization`
        },
        areaServed: "IN",
        url: `${siteUrl}/manufacturing`
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
            name: "Manufacturing",
            item: `${siteUrl}/manufacturing`
          }
        ]
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Navbar />
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
            Contract Manufacturing
          </p>
          <h1 className="section-title mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Professional Manufacturing Platform for Home Care Brands
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            Abcube supports startups, distributors, and established companies with
            structured third-party manufacturing and private label execution for
            cleaning and hygiene categories.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-800">Category Focus</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Floor, Kitchen, Washroom, Hand Hygiene</p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-800">Execution Model</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Pilot to scale with repeatable QA process</p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-800">Commercial Support</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Packaging, coding, dispatch, replenishment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-800">Manufacturing Workflow</p>
            <h2 className="section-title mt-2 text-3xl font-bold text-slate-900">
              Structured Process for Faster Market Readiness
            </h2>
            <div className="mt-6 space-y-3">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-green-800">Step {idx + 1}</p>
                  <p className="mt-1 font-bold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-green-100 shadow-xl">
              <Image
                src="/catalogue/manufacturing.jpg"
                alt="Abcube contract manufacturing facility"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Batch Control", value: "Standardized QA checkpoints" },
                { label: "MOQ Flexibility", value: "Pilot and growth-friendly runs" },
                { label: "Packaging Ops", value: "Labeling, coding, and packing" },
                { label: "Supply Continuity", value: "Planned repeat production cycles" }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-green-800">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title text-3xl font-bold text-slate-900">Core Services and Commercial Capabilities</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Integrated support modules to reduce lead time, maintain quality consistency, and simplify scaling.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="section-title text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[2rem] border border-green-100 bg-gradient-to-r from-green-50 via-white to-lime-50 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-800">Best Fit Partners</p>
            <h2 className="section-title mt-2 text-3xl font-bold text-slate-900">
              Ideal for D2C Brands, Distributors, and Institutional Supply Businesses
            </h2>
            <p className="mt-3 max-w-4xl text-slate-600">
              Whether you are launching your first SKU or expanding into multi-state
              supply, our manufacturing and packaging systems are designed to support
              predictable quality and scalable execution.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["D2C Brands", "Regional Distributors", "Institutional Suppliers", "Hospitality & Facilities"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-semibold text-green-800"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
