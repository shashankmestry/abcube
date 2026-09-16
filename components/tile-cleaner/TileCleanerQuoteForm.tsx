"use client"

import { useEffect, useMemo, useState } from "react"
import { trackEvent } from "@/lib/analytics"
import {
  companyContact,
  interestOptions,
  requirementVolumes,
  whatsappLink
} from "@/lib/tile-cleaner"
import { QUOTE_FORM_ID, QUOTE_PREFILL_EVENT, type QuotePrefill } from "./quote-bus"

const emptyForm = {
  name: "",
  company: "",
  mobile: "",
  email: "",
  location: "",
  volume: "",
  message: ""
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-200"

const labelClass = "block text-xs font-bold uppercase tracking-[0.1em] text-slate-700"

export default function TileCleanerQuoteForm() {
  const [form, setForm] = useState(emptyForm)
  const [interests, setInterests] = useState<string[]>([])
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [highlight, setHighlight] = useState(false)

  useEffect(() => {
    const onPrefill = (event: Event) => {
      const detail = (event as CustomEvent<QuotePrefill>).detail ?? {}

      if (detail.interest?.length) {
        setInterests((current) => [...new Set([...current, ...detail.interest!])])
      }
      if (detail.message) {
        setForm((current) => ({ ...current, message: detail.message! }))
      }

      setSubmitted(false)
      setHighlight(true)
      window.setTimeout(() => setHighlight(false), 1600)
    }

    window.addEventListener(QUOTE_PREFILL_EVENT, onPrefill)
    return () => window.removeEventListener(QUOTE_PREFILL_EVENT, onPrefill)
  }, [])

  const enquirySummary = useMemo(() => {
    const lines = [
      "Tile Cleaner Enquiry - ABCube Industries",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Mobile / WhatsApp: ${form.mobile}`,
      form.email ? `Email: ${form.email}` : null,
      form.location ? `City / State / Country: ${form.location}` : null,
      interests.length ? `Interested in: ${interests.join(", ")}` : null,
      form.volume ? `Approximate requirement: ${form.volume}` : null,
      form.message ? `Requirement: ${form.message}` : null
    ].filter(Boolean)

    return lines.join("\n")
  }, [form, interests])

  const toggleInterest = (option: string) => {
    setInterests((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    )
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name.trim() || !form.company.trim() || !form.mobile.trim()) {
      setError("Please fill your name, company name and mobile number.")
      return
    }

    setError("")
    setSubmitted(true)

    trackEvent("generate_lead", {
      form_name: "tile_cleaner_quotation",
      product: "Tile Cleaner",
      interest: interests.join(", "),
      requirement_volume: form.volume
    })

    window.open(whatsappLink(enquirySummary), "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id={QUOTE_FORM_ID}
      className="scroll-mt-24 border-t border-green-100 bg-gradient-to-b from-white to-green-50 py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            Tile Cleaner Enquiry
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Request Tile Cleaner Quotation
          </h2>
          <p className="mt-3 text-slate-600">
            Share your requirement and our team will respond with suitable pack sizes,
            OEM options and commercial details.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`mt-8 rounded-3xl border bg-white p-6 shadow-xl transition md:p-8 ${
            highlight ? "border-green-500 ring-4 ring-green-200" : "border-green-100"
          }`}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="tc-name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="tc-name"
                name="name"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className={inputClass}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="tc-company">
                Company Name <span className="text-red-600">*</span>
              </label>
              <input
                id="tc-company"
                name="company"
                required
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                className={inputClass}
                placeholder="Registered / trade name"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="tc-mobile">
                Mobile / WhatsApp <span className="text-red-600">*</span>
              </label>
              <input
                id="tc-mobile"
                name="mobile"
                type="tel"
                required
                value={form.mobile}
                onChange={(event) => setForm({ ...form, mobile: event.target.value })}
                className={inputClass}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="tc-email">
                Email
              </label>
              <input
                id="tc-email"
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className={inputClass}
                placeholder="name@company.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="tc-location">
                City / State / Country
              </label>
              <input
                id="tc-location"
                name="location"
                value={form.location}
                onChange={(event) => setForm({ ...form, location: event.target.value })}
                className={inputClass}
                placeholder="e.g. Pune, Maharashtra, India"
              />
            </div>
          </div>

          <fieldset className="mt-7">
            <legend className={labelClass}>I am interested in</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {interestOptions.map((option) => {
                const isActive = interests.includes(option)
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleInterest(option)}
                    aria-pressed={isActive}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-green-700 bg-green-700 text-white shadow-md shadow-green-200"
                        : "border-green-200 bg-green-50/70 text-green-900 hover:bg-green-100"
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="mt-7">
            <label className={labelClass} htmlFor="tc-volume">
              Approximate Requirement
            </label>
            <select
              id="tc-volume"
              name="volume"
              value={form.volume}
              onChange={(event) => setForm({ ...form, volume: event.target.value })}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="">Select requirement</option>
              {requirementVolumes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="tc-message">
              Message / Requirement
            </label>
            <textarea
              id="tc-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className={inputClass}
              placeholder="Pack sizes, monthly volume, brand/label requirement, target market, documentation needs"
            />
          </div>

          {error ? (
            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-gradient-to-r from-green-700 to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-200 transition hover:from-green-800 hover:to-emerald-700"
            >
              GET MY QUOTATION
            </button>
            <p className="text-xs text-slate-500">
              Submitting opens WhatsApp with your details pre-filled so our team receives
              the enquiry instantly.
            </p>
          </div>

          {submitted ? (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="text-sm font-bold text-green-900">
                Your enquiry is ready to send.
              </p>
              <p className="mt-1 text-sm text-slate-700">
                If WhatsApp did not open, use one of the options below and our team will
                respond shortly.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(enquirySummary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_click", { source: "tile_cleaner_form_fallback" })
                  }
                  className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
                >
                  Send on WhatsApp
                </a>
                <a
                  href={`mailto:${companyContact.email}?subject=${encodeURIComponent(
                    "Tile Cleaner Quotation Request"
                  )}&body=${encodeURIComponent(enquirySummary)}`}
                  className="rounded-full border-2 border-green-700 px-5 py-2.5 text-sm font-bold text-green-800 transition hover:bg-white"
                >
                  Send by Email
                </a>
                <a
                  href={companyContact.phoneHref}
                  onClick={() => trackEvent("call_click", { source: "tile_cleaner_form" })}
                  className="rounded-full border border-green-300 px-5 py-2.5 text-sm font-bold text-green-800 transition hover:bg-white"
                >
                  Call {companyContact.phone}
                </a>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  )
}
