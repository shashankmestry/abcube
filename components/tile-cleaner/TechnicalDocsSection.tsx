"use client"

import { useState } from "react"
import { trackEvent } from "@/lib/analytics"
import { companyContact, technicalDocuments, whatsappLink } from "@/lib/tile-cleaner"

const inputClass =
  "mt-1.5 w-full rounded-xl border border-green-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-200"

const labelClass = "block text-xs font-bold uppercase tracking-[0.1em] text-slate-700"

const emptyForm = { name: "", company: "", mobile: "", email: "", requirement: "" }

export default function TechnicalDocsSection() {
  const [activeDoc, setActiveDoc] = useState<string | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  const openGate = (docName: string) => {
    trackEvent("tile_cleaner_doc_request_open", { document: docName })
    setActiveDoc(docName)
    setForm(emptyForm)
    setError("")
    setSent(false)
  }

  const buildMessage = () =>
    [
      `Tile Cleaner technical document request: ${activeDoc}`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Mobile: ${form.mobile}`,
      form.email ? `Email: ${form.email}` : null,
      form.requirement ? `Requirement: ${form.requirement}` : null
    ]
      .filter(Boolean)
      .join("\n")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name.trim() || !form.company.trim() || !form.mobile.trim()) {
      setError("Please fill your name, company and mobile number.")
      return
    }

    setError("")
    setSent(true)
    trackEvent("generate_lead", {
      form_name: "tile_cleaner_technical_document",
      document: activeDoc,
      product: "Tile Cleaner"
    })
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="technical-information" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
          Technical Information
        </p>
        <h2 className="section-title mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Tile Cleaner Technical Documents
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Technical documentation is shared with business enquiries on request. Select the
          document you need and our technical team will send the current approved version.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technicalDocuments.map((doc) => (
            <div
              key={doc.name}
              className="flex flex-col justify-between rounded-2xl border border-green-100 bg-green-50/50 p-5 shadow-sm transition hover:shadow-md"
            >
              <div>
                <p className="section-title font-bold text-slate-900">{doc.name}</p>
                <p className="mt-1 text-sm text-slate-600">{doc.detail}</p>
              </div>
              <button
                type="button"
                onClick={() => openGate(doc.name)}
                className="mt-4 cursor-pointer self-start rounded-full bg-green-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-green-800"
              >
                Request Document
              </button>
            </div>
          ))}
        </div>

        {activeDoc ? (
          <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-6 shadow-lg md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
                  Document Request
                </p>
                <h3 className="section-title mt-1 text-xl font-bold text-slate-900">
                  {activeDoc}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="cursor-pointer rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm transition hover:text-slate-900"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="doc-name">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="doc-name"
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="doc-company">
                    Company <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="doc-company"
                    required
                    value={form.company}
                    onChange={(event) => setForm({ ...form, company: event.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="doc-mobile">
                    Mobile <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="doc-mobile"
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={(event) => setForm({ ...form, mobile: event.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="doc-email">
                    Email
                  </label>
                  <input
                    id="doc-email"
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="doc-requirement">
                    Requirement
                  </label>
                  <textarea
                    id="doc-requirement"
                    rows={3}
                    value={form.requirement}
                    onChange={(event) =>
                      setForm({ ...form, requirement: event.target.value })
                    }
                    className={inputClass}
                    placeholder="Volume, pack size, OEM / private label, application"
                  />
                </div>
              </div>

              {error ? (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="mt-5 cursor-pointer rounded-full bg-green-700 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-green-200 transition hover:bg-green-800"
              >
                DOWNLOAD TECHNICAL DATA SHEET
              </button>

              {sent ? (
                <p className="mt-4 rounded-xl border border-green-300 bg-white px-4 py-3 text-sm text-slate-700">
                  Request noted. If WhatsApp did not open, email us at{" "}
                  <a href={companyContact.emailHref} className="font-bold text-green-800">
                    {companyContact.email}
                  </a>{" "}
                  and we will share the document.
                </p>
              ) : null}
            </form>
          </div>
        ) : null}

        <div className="mt-8">
          <a
            href={companyContact.phoneHref}
            onClick={() => trackEvent("call_click", { source: "tile_cleaner_technical" })}
            className="inline-flex rounded-full border-2 border-green-700 px-6 py-3 text-sm font-bold text-green-800 transition hover:bg-green-50"
          >
            TALK TO OUR TECHNICAL TEAM
          </a>
        </div>
      </div>
    </section>
  )
}
