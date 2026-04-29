import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Urbanist } from "next/font/google"
import "./globals.css"

const siteUrl = "https://abcube.in"
const defaultTitle = "ABCube Industries Pvt. Ltd."
const defaultDescription =
  "ABCube Industries manufactures home care and hygiene products with private label, OEM, and contract manufacturing support across India."

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"]
})

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | ABCube Industries"
  },
  description: defaultDescription,
  applicationName: "ABCube Industries",
  keywords: [
    "home cleaning products manufacturer",
    "private label cleaning products",
    "contract manufacturing home care",
    "OEM cleaning products India",
    "floor cleaner manufacturer"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "ABCube Industries",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ABCube Industries home care product manufacturer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/twitter-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "Home Care",
  manifest: "/manifest.webmanifest"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "ABCube Industries Pvt. Ltd.",
        url: siteUrl,
        logo: `${siteUrl}/logos/abcube-color.png`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9096668710",
            contactType: "sales",
            email: "info@abcube.in",
            areaServed: "IN",
            availableLanguage: ["en"]
          }
        ],
        sameAs: [siteUrl]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "ABCube Industries",
        description: defaultDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`
        },
        inLanguage: "en-IN"
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "ABCube Industries Pvt. Ltd.",
        url: siteUrl,
        telephone: "+91-9096668710",
        email: "info@abcube.in",
        image: `${siteUrl}/opengraph-image`,
        areaServed: "IN",
        parentOrganization: {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  }

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        {children}
      </body>
    </html>
  )
}
