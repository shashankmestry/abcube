export const QUOTE_FORM_ID = "tile-cleaner-quotation"
export const QUOTE_PREFILL_EVENT = "abcube:tile-cleaner-prefill"

export type QuotePrefill = {
  interest?: string[]
  message?: string
  source?: string
}

export function requestQuoteForm(prefill: QuotePrefill = {}) {
  if (typeof window === "undefined") return

  window.dispatchEvent(new CustomEvent<QuotePrefill>(QUOTE_PREFILL_EVENT, { detail: prefill }))

  const target = document.getElementById(QUOTE_FORM_ID)
  target?.scrollIntoView({ behavior: "smooth", block: "start" })
}
