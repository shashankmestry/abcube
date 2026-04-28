
import Products from "@/components/Products"
import Manufacturing from "@/components/Manufacturing"
import WhyChooseUs from "@/components/WhyChooseUs"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import CTA from "@/components/CTA"
import Navbar from "@/components/Navbar"

export const metadata = {
  title:
    "Eco Hygiene | Cleaning Product Manufacturer & Supplier in India",
  description:
    "ABCube Industries manufactures Eco Hygiene cleaning products including floor cleaners, dishwash, sanitizer and contract manufacturing services.",
  keywords:
    "cleaning products manufacturer, floor cleaner supplier, dishwash gel manufacturer India, contract manufacturing FMCG"
}

export default function Home() {
  return (
    <main id="home">
      <Navbar />
      <Hero />
      <Products />
      <Manufacturing />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}