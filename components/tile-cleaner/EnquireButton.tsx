"use client"

import { trackEvent } from "@/lib/analytics"
import { requestQuoteForm, type QuotePrefill } from "./quote-bus"

type EnquireButtonProps = {
  label: string
  prefill?: QuotePrefill
  variant?: "primary" | "secondary" | "light"
  size?: "sm" | "md"
  className?: string
}

const variants = {
  primary:
    "bg-green-700 text-white shadow-lg shadow-green-200 hover:bg-green-800",
  secondary:
    "border-2 border-green-700 text-green-800 hover:bg-green-50",
  light: "bg-white text-green-800 shadow-lg hover:bg-green-50"
} as const

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm"
} as const

export default function EnquireButton({
  label,
  prefill,
  variant = "primary",
  size = "md",
  className = ""
}: EnquireButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        trackEvent("tile_cleaner_cta_click", {
          cta_label: label,
          cta_source: prefill?.source ?? "tile-cleaner"
        })
        requestQuoteForm(prefill)
      }}
      className={`cursor-pointer rounded-full font-bold transition ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </button>
  )
}
