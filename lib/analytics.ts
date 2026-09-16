type GtagWindow = Window & {
  gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return

  const gtag = (window as GtagWindow).gtag
  if (typeof gtag !== "function") return

  gtag("event", eventName, params)
}
