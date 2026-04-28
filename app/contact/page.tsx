import Navbar from "@/components/Navbar"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-800">
            Contact Us
          </p>
          <h1 className="section-title mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Connect with Abcube for Product, Private Label, and Bulk Manufacturing Inquiries
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            Share your requirements and our team will help you with suitable products,
            packaging options, and manufacturing plans.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">Phone</p>
              <a href="tel:+919821804409" className="mt-2 block text-lg font-bold text-slate-900">
                +91 98218 04409
              </a>
            </div>
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">Email</p>
              <a href="mailto:shashank@abcube.in" className="mt-2 block text-lg font-bold text-slate-900">
                shashank@abcube.in
              </a>
            </div>
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">Business Support</p>
              <p className="mt-2 text-slate-700">
                Contract Manufacturing, Private Label, Distributor & Institutional Supply
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-green-100 shadow-xl">
            <Image src="/catalogue/catalogue-014.png" alt="Abcube contact and inquiry" fill className="object-cover" />
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
