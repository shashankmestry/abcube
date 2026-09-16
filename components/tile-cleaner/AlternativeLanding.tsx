import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import EnquireButton from "@/components/tile-cleaner/EnquireButton"
import TileCleanerFaq from "@/components/tile-cleaner/TileCleanerFaq"
import TileCleanerQuoteForm from "@/components/tile-cleaner/TileCleanerQuoteForm"
import {
  applicationDisclaimer,
  companyContact,
  packSizes,
  suitableSurfaces,
  uspStrip,
  whyAbcube,
  type TileCleanerAlternative
} from "@/lib/tile-cleaner"

type AlternativeLandingProps = {
  alternative: TileCleanerAlternative
}

export default function AlternativeLanding({ alternative }: AlternativeLandingProps) {
  return (
    <main>
      <Navbar />

      <section className="border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-lime-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-green-800">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/tile-cleaner" className="hover:text-green-800">
                    Tile Cleaner
                  </Link>
                </li>
                <li>/</li>
                <li className="font-semibold text-slate-800">{alternative.title}</li>
              </ol>
            </nav>

            <h1 className="section-title mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {alternative.heading}
            </h1>
            <p className="section-title mt-3 text-lg font-bold text-green-800 md:text-xl">
              Tile Cleaner Manufacturer, OEM &amp; Bulk Supplier in India
            </p>
            <p className="mt-4 max-w-2xl text-slate-600">{alternative.intro}</p>

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
                prefill={{
                  interest: ["Product Sample"],
                  source: `${alternative.slug}-hero`,
                  message: `I am comparing ${alternative.competitor} and would like Tile Cleaner sample details from ABCube.`
                }}
              />
              <EnquireButton
                label="GET BULK QUOTATION"
                variant="secondary"
                prefill={{
                  interest: ["Bulk Purchase"],
                  source: `${alternative.slug}-bulk`,
                  message: "Please share bulk pricing for ABCube Tile Cleaner."
                }}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-2xl shadow-green-100">
            <Image
              src="/products/tile-cleaner/tile-cleaner-product-banner.jpg"
              alt="ABCube Tile Cleaner rapid action tile and ceramic cleaner"
              width={1024}
              height={549}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title text-2xl font-bold text-slate-900 md:text-3xl">
            Why Businesses Search for Alternatives
          </h2>
          <p className="mt-4 max-w-4xl text-slate-600">{alternative.searchContext}</p>

          <h3 className="section-title mt-10 text-xl font-bold text-slate-900 md:text-2xl">
            What ABCube Offers as a Supply Partner
          </h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {alternative.comparisonPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50/50 p-4 text-sm font-medium text-slate-700"
              >
                <span aria-hidden className="mt-0.5 font-bold text-green-700">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
            <p className="font-bold text-slate-800">Important disclaimer</p>
            <p className="mt-2">
              {alternative.competitor} and all other brand names referenced on this page
              are trademarks of their respective owners. ABCube Industries is not
              affiliated with, endorsed by or a licensee of these brands. This page is
              published for comparison and information purposes for buyers evaluating
              supply options. ABCube does not claim that its Tile Cleaner is superior to
              any referenced product. Product performance comparisons are shared only where
              supported by technical testing for the specific formulation and application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title text-2xl font-bold text-slate-900 md:text-3xl">
            ABCube Tile Cleaner Overview
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
                Suitable Surfaces
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {suitableSurfaces.map((surface) => (
                  <span
                    key={surface.name}
                    className="rounded-full border border-green-200 bg-green-50/70 px-3 py-1.5 text-sm font-semibold text-slate-700"
                  >
                    {surface.name}
                  </span>
                ))}
              </div>
              <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-medium text-amber-900">
                {applicationDisclaimer}
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
                Available Pack Sizes
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {packSizes.map((pack) => (
                  <div
                    key={pack.size}
                    className="rounded-2xl border border-green-100 bg-green-50/60 p-4"
                  >
                    <p className="section-title font-bold text-green-800">{pack.size}</p>
                    <p className="mt-1 text-xs text-slate-600">{pack.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href="/tile-cleaner"
                  className="inline-flex rounded-full border-2 border-green-700 px-5 py-2.5 text-sm font-bold text-green-800 transition hover:bg-green-50"
                >
                  View full Tile Cleaner page
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyAbcube.slice(0, 8).map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm"
              >
                <p className="section-title text-sm font-bold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <EnquireButton
              label="DISCUSS OEM / PRIVATE LABEL"
              prefill={{
                interest: ["OEM Manufacturing", "Private Label"],
                source: `${alternative.slug}-oem`,
                message:
                  "I want to discuss OEM / private label Tile Cleaner manufacturing with ABCube."
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

      <TileCleanerFaq />

      <TileCleanerQuoteForm />

      <Footer />
      <WhatsAppFloat source={`tile_cleaner_${alternative.slug}`} />
    </main>
  )
}
