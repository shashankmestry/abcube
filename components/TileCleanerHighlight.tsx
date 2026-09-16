import Image from "next/image"
import Link from "next/link"

const offerings = ["OEM", "Private Label", "Bulk Supply", "Institutional Applications"]

export default function TileCleanerHighlight() {
  return (
    <section id="tile-cleaner" className="scroll-mt-24 bg-green-50/60 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-2xl shadow-green-100">
          <Image
            src="/products/tile-cleaner/tile-cleaner-product-banner.jpg"
            alt="ABCube Tile Cleaner rapid action tile and ceramic cleaner packs"
            width={1024}
            height={549}
            className="h-auto w-full"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Tile Cleaner Manufacturing
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Professional Tile Cleaning Solutions for Brands &amp; Businesses
          </h2>
          <p className="mt-4 text-slate-600">
            ABCube manufactures Tile Cleaner solutions for ceramic, vitrified, porcelain
            and other compatible tile surfaces, supporting brands, distributors and
            institutions with manufacturer-direct supply.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {offerings.map((item) => (
              <span
                key={item}
                className="rounded-full border-2 border-green-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-green-900 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/tile-cleaner"
              className="rounded-full bg-green-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-200 transition hover:bg-green-800"
            >
              EXPLORE TILE CLEANER
            </Link>
            <a
              href="tel:+919096668710"
              className="rounded-full border-2 border-green-700 px-6 py-3 text-sm font-bold text-green-800 transition hover:bg-white"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
