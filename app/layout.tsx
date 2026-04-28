import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Urbanist } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"]
})

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "ABCube Industries Pvt. Ltd.",
  description:
    "Modern home cleaning products manufacturer with contract and private label manufacturing solutions."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
