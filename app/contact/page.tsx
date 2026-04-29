import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ABCube Industries for product supply, private label projects, OEM, and contract manufacturing inquiries.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact ABCube Industries",
    description:
      "Contact ABCube Industries for product supply, private label projects, OEM, and contract manufacturing inquiries.",
    url: "/contact"
  }
}

export default function ContactPage() {
  const siteUrl = "https://abcube.in"
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteUrl}/contact#webpage`,
        url: `${siteUrl}/contact`,
        name: "Contact ABCube Industries",
        description:
          "Contact ABCube Industries for product supply, private label projects, OEM, and contract manufacturing inquiries.",
        isPartOf: {
          "@id": `${siteUrl}/#website`
        }
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
            name: "Contact",
            item: `${siteUrl}/contact`
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
              <a href="tel:+919096668710" className="mt-2 block text-lg font-bold text-slate-900">
                +91 9096 668 710
              </a>
            </div>
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">Email</p>
              <a href="mailto:info@abcube.in" className="mt-2 block text-lg font-bold text-slate-900">
                info@abcube.in
              </a>
            </div>
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">Business Support</p>
              <p className="mt-2 text-slate-700">
                Contract Manufacturing, Private Label, Distributor & Institutional Supply
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl">
              <iframe
                title="Abcube location map"
                src="https://www.google.com/maps?q=Abcube%20Industries&output=embed"
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
