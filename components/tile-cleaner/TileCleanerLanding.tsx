import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import EnquireButton from "@/components/tile-cleaner/EnquireButton"
import TechnicalDocsSection from "@/components/tile-cleaner/TechnicalDocsSection"
import TileCleanerFaq from "@/components/tile-cleaner/TileCleanerFaq"
import TileCleanerQuoteForm from "@/components/tile-cleaner/TileCleanerQuoteForm"
import {
  applicationDisclaimer,
  bulkSegments,
  businessSnapshot,
  claimsNote,
  cleaningProblems,
  companyContact,
  distributorRoles,
  endToEndProcess,
  heroAudience,
  heroReasons,
  oemServices,
  packSizes,
  productFeatures,
  searchIntentNote,
  suitableSurfaces,
  supplyCapabilities,
  tileCleanerAlternatives,
  uspStrip,
  whyAbcube
} from "@/lib/tile-cleaner"

export default function TileCleanerLanding() {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-lime-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="relative">
            <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-green-800">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="font-semibold text-slate-800">Tile Cleaner</li>
              </ol>
            </nav>

            <h1 className="section-title mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Tile Cleaner Manufacturer in India
            </h1>
            <p className="section-title mt-3 text-xl font-bold text-green-800 md:text-2xl">
              Professional Tile &amp; Ceramic Cleaning Solutions
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              ABCube manufactures professional Tile Cleaner solutions for ceramic,
              vitrified, porcelain and other compatible tile surfaces, with options for
              bulk supply, OEM and private-label manufacturing.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {uspStrip.map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 border-green-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-green-900 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <EnquireButton
                label="REQUEST A SAMPLE"
                variant="primary"
                prefill={{
                  interest: ["Product Sample"],
                  source: "hero-sample",
                  message: "Please share Tile Cleaner sample details and MOQ."
                }}
              />
              <EnquireButton
                label="GET BULK QUOTATION"
                variant="secondary"
                prefill={{
                  interest: ["Bulk Purchase"],
                  source: "hero-bulk",
                  message: "Please share bulk pricing for Tile Cleaner."
                }}
              />
              <EnquireButton
                label="DISCUSS OEM / PRIVATE LABEL"
                variant="secondary"
                prefill={{
                  interest: ["OEM Manufacturing", "Private Label"],
                  source: "hero-oem",
                  message: "I want to discuss OEM / private label Tile Cleaner manufacturing."
                }}
              />
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-green-200 bg-white/90 p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-green-800">
                  What We Manufacture
                </p>
                <p className="section-title mt-1 text-lg font-bold text-slate-900">
                  Tile Cleaner
                </p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-white/90 p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-green-800">
                  Who We Serve
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {heroAudience.join(" | ")}
                </p>
              </div>
              <div className="rounded-2xl border border-green-200 bg-white/90 p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-green-800">
                  Why Contact Us
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {heroReasons.join(" | ")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-2xl shadow-green-100">
              <Image
                src="/products/tile-cleaner/tile-cleaner-product-banner.jpg"
                alt="ABCube Eco Hygiene Tile Cleaner rapid action tile and ceramic cleaner packs"
                width={1024}
                height={549}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                Manufacturer Direct
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                Flexible MOQs
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                Pan-India Supply
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                Export Enquiries Welcome
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="animated-gradient py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white md:text-sm">
          {uspStrip.map((item, index) => (
            <span key={item} className="flex items-center gap-6">
              {item}
              {index < uspStrip.length - 1 ? (
                <span aria-hidden className="hidden text-white/50 md:inline">
                  |
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </section>

      <section id="product-overview" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Product Positioning
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Professional Tile &amp; Ceramic Cleaning Solution
          </h2>
          <p className="mt-4 max-w-4xl text-slate-600">
            ABCube Tile Cleaner is a rapid action tile and ceramic cleaning formulation
            developed for household, commercial and institutional tile maintenance. It is
            manufactured in our own facility and supplied as a professional tile cleaning
            chemical for bulk supply, OEM and private-label programs.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-green-100 bg-green-50/50 p-5 shadow-sm"
              >
                <p className="section-title font-bold text-slate-900">{feature.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <EnquireButton
              label="GET BULK QUOTATION"
              prefill={{
                interest: ["Bulk Purchase"],
                source: "after-benefits",
                message: "Please share bulk pricing and pack options for Tile Cleaner."
              }}
            />
            <a
              href={companyContact.phoneHref}
              className="rounded-full border-2 border-green-700 px-6 py-3 text-sm font-bold text-green-800 transition hover:bg-green-50"
            >
              Call {companyContact.phone}
            </a>
          </div>
        </div>
      </section>

      <section
        id="supply-capabilities"
        className="scroll-mt-24 border-t border-green-100 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Supply Capabilities
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Tile Cleaning Chemical Manufacturer and Supplier in India
          </h2>
          <p className="mt-4 max-w-4xl text-slate-600">
            ABCube works as a tile cleaning chemical manufacturer and tile cleaner supplier
            in India, serving brands, distributors and institutional buyers directly from
            our own manufacturing facility.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {supplyCapabilities.map((item) => (
              <div
                key={item.heading}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm"
              >
                <h3 className="section-title font-bold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-600">
            {searchIntentNote}
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-sm">
            <h3 className="section-title border-b border-green-100 bg-green-50/70 px-5 py-4 text-lg font-bold text-slate-900">
              Tile Cleaner Manufacturer in India – At a Glance
            </h3>
            <dl className="divide-y divide-green-100">
              {businessSnapshot.map((row) => (
                <div key={row.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr]">
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-green-800">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-slate-700">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="applications" className="scroll-mt-24 bg-green-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Suitable Applications
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Tile Surfaces and Application Areas
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Suitable for use on compatible tile surfaces across residential, commercial
            and institutional spaces.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {suitableSurfaces.map((surface) => (
              <div
                key={surface.name}
                className="flex flex-col items-center rounded-2xl border border-green-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-800"
                >
                  {surface.icon}
                </span>
                <p className="section-title mt-3 text-sm font-bold text-slate-900">
                  {surface.name}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium text-amber-900">
            <span className="font-bold">Application note:</span> {applicationDisclaimer}
          </p>
        </div>
      </section>

      <section id="problems" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            What Problem Does It Solve?
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Common Tile Cleaning Problems
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Tile surfaces in homes, commercial premises and institutions face recurring
            cleaning challenges. These are the requirements we develop and supply tile
            cleaning solutions for.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cleaningProblems.map((item) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="section-title font-bold text-slate-900">{item.problem}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600">
            <span className="font-bold text-slate-800">Note on performance:</span>{" "}
            {claimsNote}
          </p>
        </div>
      </section>

      <section id="why-abcube" className="scroll-mt-24 bg-green-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Why ABCube?
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Why Choose ABCube for Tile Cleaner Manufacturing?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyAbcube.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="section-title font-bold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-green-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
              Our End-to-End Process
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {endToEndProcess.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-green-100 bg-green-50/60 p-4"
                >
                  <p className="text-xs font-bold text-green-700">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="section-title mt-1 text-sm font-bold text-slate-900">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-600">
              ABCube supports customers from product development through packaging,
              manufacturing, quality control and dispatch.
            </p>
          </div>
        </div>
      </section>

      <section id="oem-private-label" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-green-100 shadow-2xl shadow-green-100">
            <Image
              src="/products/tile-cleaner/tile-cleaner-oem-banner.jpg"
              alt="ABCube private label and contract manufacturing solutions for Tile Cleaner"
              width={1024}
              height={683}
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
              OEM / Private Label
            </p>
            <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Launch Your Own Tile Cleaner Brand
            </h2>
            <p className="mt-4 text-slate-600">
              ABCube offers OEM and private-label Tile Cleaner manufacturing solutions for
              brands, distributors and businesses looking to launch or expand their
              cleaning product portfolio.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {oemServices.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-2 rounded-xl bg-green-50/70 px-3 py-2.5 text-sm font-medium text-slate-700"
                >
                  <span aria-hidden className="mt-0.5 text-green-700">
                    ✓
                  </span>
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-7">
              <EnquireButton
                label="START YOUR OEM PROJECT"
                prefill={{
                  interest: ["OEM Manufacturing", "Private Label"],
                  source: "oem-section",
                  message:
                    "I want to launch my own Tile Cleaner brand. Please share OEM / private label process, MOQ and timelines."
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bulk-supply" className="scroll-mt-24 bg-green-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Bulk &amp; Institutional
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Bulk Tile Cleaner Supply
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Bulk pack formats and repeat supply arrangements for organisations with
            continuous housekeeping and maintenance requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {bulkSegments.map((segment) => (
              <span
                key={segment}
                className="rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {segment}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <EnquireButton
              label="REQUEST INSTITUTIONAL PRICING"
              prefill={{
                interest: ["Institutional Supply", "Bulk Purchase"],
                source: "bulk-section",
                message:
                  "Please share institutional pricing for Tile Cleaner with pack sizes and supply terms."
              }}
            />
          </div>
        </div>
      </section>

      <section id="distributor" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-green-200 bg-gradient-to-r from-green-50 via-white to-lime-50 p-6 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
              Channel Partnership
            </p>
            <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Become a Tile Cleaner Distributor
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              ABCube can supply Tile Cleaner in bulk to distributors and dealers across
              India. We work with channel partners on territory-based supply, pack-size
              planning and repeat order schedules.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {distributorRoles.map((role) => (
                <div
                  key={role}
                  className="rounded-2xl border border-green-100 bg-white p-4 text-center shadow-sm"
                >
                  <p className="section-title text-sm font-bold text-slate-900">{role}</p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <EnquireButton
                label="ENQUIRE FOR DISTRIBUTOR PRICING"
                prefill={{
                  interest: ["Distributor Supply"],
                  source: "distributor-section",
                  message:
                    "I am interested in Tile Cleaner distributor supply. Please share pricing and territory details."
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="packaging" className="scroll-mt-24 bg-green-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Product Packaging
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Available Tile Cleaner Pack Sizes
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Retail and institutional pack formats are available. Customised pack sizes can
            be evaluated based on volume and commercial feasibility.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {packSizes.map((pack) => (
              <div
                key={pack.size}
                className="flex flex-col justify-between rounded-2xl border border-green-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <p className="section-title text-xl font-bold text-green-800">
                    {pack.size}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">{pack.note}</p>
                </div>
                <EnquireButton
                  label="ENQUIRE NOW"
                  variant="secondary"
                  size="sm"
                  className="mt-4 w-full"
                  prefill={{
                    interest: ["Bulk Purchase"],
                    source: `pack-${pack.size}`,
                    message: `Please share pricing and availability for Tile Cleaner ${pack.size} packs.`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnicalDocsSection />

      <section className="border-t border-green-100 bg-green-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Comparing Options
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Evaluating Tile Cleaner Alternatives
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            If you are comparing tile cleaning products available in the market and need a
            manufacturing or bulk supply partner, these pages explain how ABCube fits your
            requirement.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tileCleanerAlternatives.map((alternative) => (
              <Link
                key={alternative.slug}
                href={`/tile-cleaner/${alternative.slug}`}
                className="group rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="section-title font-bold text-slate-900 transition group-hover:text-green-800">
                  {alternative.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{alternative.competitor}</p>
                <p className="mt-3 text-sm font-semibold text-green-800">
                  Read more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TileCleanerFaq />

      <TileCleanerQuoteForm />

      <section className="bg-gradient-to-r from-green-800 to-emerald-700 py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="section-title text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Build Your Brand Together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-green-50">
            Talk to our team about Tile Cleaner samples, bulk supply, OEM manufacturing and
            private-label programs.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <EnquireButton
              label="REQUEST TILE CLEANER QUOTATION"
              variant="light"
              prefill={{ source: "bottom-cta" }}
            />
            <a
              href={companyContact.phoneHref}
              className="rounded-full border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Call {companyContact.phone}
            </a>
            <a
              href={companyContact.emailHref}
              className="rounded-full border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {companyContact.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat source="tile_cleaner_page" />
    </main>
  )
}
