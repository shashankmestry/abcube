import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ABCube Industries, our mission, values, and journey in building trusted home care and hygiene products across India.",
  alternates: {
    canonical: "/about-us"
  },
  openGraph: {
    title: "About ABCube Industries",
    description:
      "Learn about ABCube Industries, our mission, values, and journey in building trusted home care and hygiene products across India.",
    url: "/about-us"
  }
}

const values = [
  {
    title: "Collaboration",
    description:
      "We value people, respect diverse perspectives, and solve challenges together to create strong business outcomes."
  },
  {
    title: "Customer Delight",
    description:
      "We focus on quality, value pricing, and responsive support because customer trust is built through consistent experience."
  },
  {
    title: "Integrity & Honesty",
    description:
      "We commit to transparent communication, fair practices, and responsible execution in every partnership."
  },
  {
    title: "Flexibility & Innovation",
    description:
      "We embrace change, improve continuously, and adapt systems quickly to evolving market and customer needs."
  },
  {
    title: "Commitment",
    description:
      "We stay dedicated to long-term stakeholder value through disciplined operations and dependable delivery."
  }
]

export default function AboutUsPage() {
  const siteUrl = "https://abcube.in"
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about-us#webpage`,
        url: `${siteUrl}/about-us`,
        name: "About ABCube Industries",
        description:
          "Learn about ABCube Industries, our mission, values, and journey in building trusted home care and hygiene products across India.",
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#organization`
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
            name: "About Us",
            item: `${siteUrl}/about-us`
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
            About Abcube Industries
          </p>
          <h1 className="section-title mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Building Trusted Home Care and Hygiene Solutions for Indian Households
          </h1>
          <p className="mt-4 max-w-4xl text-slate-600">
            Established in 2018, Abcube Industries Pvt. Ltd. has evolved into a
            fast-growing home care company delivering dependable hygiene solutions
            for everyday households and professional use-cases. Our portfolio spans
            floor cleaners, disinfectants, toilet cleaners, utensil cleaners, hand wash,
            liquid soaps, and home insecticide categories.
          </p>
          <p className="mt-3 max-w-4xl text-slate-600">
            We market products across India through our brands <strong>Eco Hygiene</strong>
            {" "}and <strong>KlinoMagic</strong>, supported by an expanding distributor and
            trade network. Alongside brand growth, we partner with reputed businesses
            for private label, job work, and OEM requirements backed by quality-focused systems.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h2 className="section-title text-3xl font-bold text-slate-900">Company Snapshot</h2>
            <p className="mt-4 text-slate-600">
              Our operating philosophy combines process-led manufacturing, value pricing,
              and channel efficiency. This allows us to serve multiple market segments
              while maintaining consistency in product performance and service reliability.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Eco Hygiene & KlinoMagic Brands",
                "Private Label, Job Work & OEM Supply",
                "Semi-automated Production Infrastructure",
                "Pan-India Distribution Network"
              ].map((point) => (
                <div key={point} className="rounded-2xl border border-green-100 bg-green-50/50 p-3 text-sm font-semibold text-slate-800">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-green-100 shadow-xl">
            <Image
              src="/catalogue/company.jpg"
              alt="Abcube company overview"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3">
          <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-800">Vision</p>
            <h2 className="section-title mt-2 text-2xl font-bold text-slate-900">
              To become the most preferred home care brand in every household by
              delivering trusted quality with everyday value.
            </h2>
          </div>
          <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-800">Mission</p>
            <h2 className="section-title mt-2 text-2xl font-bold text-slate-900">
              To provide high-quality home care and hygiene products at reasonable prices
              through process automation, disciplined quality controls, and an efficient
              distribution network.
            </h2>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title text-3xl font-bold text-slate-900">Core Values</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Our value system drives decision-making, quality outcomes, and long-term partnerships.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                <h3 className="section-title text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[2rem] border border-green-100 bg-gradient-to-r from-green-50 via-white to-lime-50 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-800">Our Journey</p>
            <h2 className="section-title mt-2 text-3xl font-bold text-slate-900">
              From Abcube Products LLP to Abcube Industries Pvt. Ltd.
            </h2>
            <p className="mt-3 text-slate-600">
              Our journey began in 2015 as Abcube Products LLP when the founding team
              identified a strong opportunity in home cleaning and surrounding hygiene.
              Initial focus on concentrated floor cleaner and core cleaning categories
              helped us build acceptance across Mumbai, Pune, and adjoining markets.
            </p>
            <p className="mt-3 text-slate-600">
              With growing demand and deeper market validation, we invested in production
              infrastructure, expanded channel presence, and strengthened operational systems.
              Over time, this progression shaped our transition into Abcube Industries Pvt. Ltd.
              Today, the company is scaling with a clear vision of wider national reach,
              consistent availability, and long-term customer trust.
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
