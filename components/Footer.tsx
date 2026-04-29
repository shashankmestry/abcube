import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-green-100 bg-white py-12">
      <div className="mx-auto mb-10 max-w-7xl px-4">
        <div className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 via-white to-lime-50 p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-800">Business Inquiry Desk</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                Private Label, Job Work, OEM Supply and Bulk Orders
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-end">
              <a
                href="tel:+919096668710"
                className="rounded-full bg-green-700 px-4 py-2 text-center text-xs font-semibold text-white transition hover:bg-green-800"
              >
                Call: +91 9096 668 710
              </a>
              <a
                href="mailto:info@abcube.in"
                className="rounded-full border border-green-300 px-4 py-2 text-center text-xs font-semibold text-green-800 transition hover:bg-green-50"
              >
                info@abcube.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center sm:text-left">
          <Image
            src="/logos/abcube-color.png"
            alt="ABCube Industries logo"
            width={260}
            height={70}
            className="mx-auto h-11 w-auto sm:mx-0"
          />
          <p className="mt-3 text-sm text-slate-600">
            Abcube Industries manufactures quality home care and hygiene products
            under own brands and private label partnerships across India.
          </p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/" className="hover:text-green-800">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-green-800">About Us</Link></li>
            <li><Link href="/products" className="hover:text-green-800">Products</Link></li>
            <li><Link href="/manufacturing" className="hover:text-green-800">Manufacturing</Link></li>
            <li><Link href="/contact" className="hover:text-green-800">Contact</Link></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">
            Product Segments
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Floor Care & Disinfectants</li>
            <li>Toilet & Washroom Cleaners</li>
            <li>Utensil & Kitchen Cleaning</li>
            <li>Hand Wash & Liquid Soaps</li>
            <li>Home Hygiene Solutions</li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-800">
            Contact
          </p>
          <ul className="mt-3 space-y-2 break-words text-sm text-slate-600">
            <li>
              Phone: <a href="tel:+919096668710" className="hover:text-green-800">+91 9096 668 710</a>
            </li>
            <li>
              Email: <a href="mailto:info@abcube.in" className="hover:text-green-800">info@abcube.in</a>
            </li>
            <li>Website: <a href="https://abcube.in" className="hover:text-green-800">abcube.in</a></li>
            <li>Brands: Eco Hygiene &amp; KlinoMagic</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-xs text-slate-500 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} ABCube Industries Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-center sm:text-right">
          Developed by{" "}
          <a href="https://shashankmestry.com" className="hover:text-green-800">
            Shashank Mestry
          </a>
        </p>
      </div>
 
    </footer>
  )
}