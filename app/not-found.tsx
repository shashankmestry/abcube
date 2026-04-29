import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-800">404 Error</p>
            <h1 className="section-title mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
              This page is not available
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              The link may be broken, moved, or no longer active. You can return to the homepage
              or explore our products and manufacturing services.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Go to Homepage
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-green-300 px-6 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-green-300 px-6 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
