"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-green-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/abcube-color.png"
            alt="ABCube Industries logo"
            width={210}
            height={54}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <motion.li key={link.href} whileHover={{ y: -2 }}>
              <Link
                href={link.href}
                className="relative transition hover:text-green-800 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-green-700 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="tel:+919821804409"
            className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:from-emerald-700 hover:to-teal-700"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-green-200 p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-green-100 bg-white px-4 py-3 md:hidden">
          <ul className="space-y-3 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-2 py-1.5 transition hover:bg-green-50 hover:text-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919821804409"
            className="mt-4 block rounded-full bg-green-700 px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Call Now
          </a>
        </div>
      ) : null}
    </header>
  )
}
