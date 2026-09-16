"use client"

import { trackEvent } from "@/lib/analytics"
import { companyContact, whatsappLink } from "@/lib/tile-cleaner"

type WhatsAppFloatProps = {
  message?: string
  source?: string
}

export default function WhatsAppFloat({ message, source = "site" }: WhatsAppFloatProps) {
  return (
    <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={companyContact.phoneHref}
        onClick={() => trackEvent("call_click", { source })}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-white shadow-xl transition hover:bg-green-900 sm:hidden"
        aria-label={`Call ABCube on ${companyContact.phone}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.5 20 4 13.5 4 5.4c0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-1.9 1.9z" />
        </svg>
      </a>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { source })}
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow-xl shadow-green-900/20 transition hover:scale-[1.03] hover:bg-[#1fb955]"
        aria-label="Chat with ABCube on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.46-.72-2.93-1.16-4.78-4.2-4.92-4.4-.14-.2-1.17-1.57-1.17-2.99 0-1.42.75-2.12 1.01-2.41.26-.29.56-.36.75-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.58.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.26.1 1.66.78 1.95.93.29.14.48.22.55.34.07.12.07.7-.17 1.38z" />
        </svg>
        <span className="hidden text-sm sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  )
}
