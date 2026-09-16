"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string; note?: string }[]
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products", note: "Full catalogue" },
      {
        label: "Tile Cleaner",
        href: "/tile-cleaner",
        note: "OEM, private label & bulk"
      }
    ]
  },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

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
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.children ? link.label : null)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <motion.span whileHover={{ y: -2 }} className="inline-flex items-center gap-1">
                <Link
                  href={link.href}
                  className="relative transition hover:text-green-800 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-green-700 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
                {link.children ? (
                  <span aria-hidden className="text-[10px] text-green-700">
                    ▾
                  </span>
                ) : null}
              </motion.span>

              {link.children && openMenu === link.label ? (
                <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
                  <ul className="overflow-hidden rounded-2xl border border-green-100 bg-white p-2 shadow-xl">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 transition hover:bg-green-50"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span className="block font-semibold text-slate-900">
                            {child.label}
                          </span>
                          {child.note ? (
                            <span className="block text-xs text-slate-500">{child.note}</span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="tel:+919096668710"
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
                {link.children ? (
                  <ul className="mt-1 ml-3 space-y-1 border-l border-green-100 pl-3">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-2 py-1.5 text-sm text-slate-600 transition hover:bg-green-50 hover:text-green-800"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <a
            href="tel:+919096668710"
            className="mt-4 block rounded-full bg-green-700 px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Call Now
          </a>
        </div>
      ) : null}
    </header>
  )
}
