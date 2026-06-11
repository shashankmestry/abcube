"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type ProductImageCarouselProps = {
  images: string[]
  name: string
  aspectClass?: string
}

export default function ProductImageCarousel({
  images,
  name,
  aspectClass = "aspect-square"
}: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [images.length])

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-b from-emerald-100/70 via-white to-cyan-50/50 ${aspectClass}`}
    >
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${name} product view ${index + 1}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-green-900 shadow-md backdrop-blur transition hover:bg-white"
            aria-label={`Show previous ${name} image`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-green-900 shadow-md backdrop-blur transition hover:bg-white"
            aria-label={`Show next ${name} image`}
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-2 py-1 shadow-sm backdrop-blur">
            {images.map((image, index) => (
              <button
                key={`${image}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-5 bg-green-800" : "w-2 bg-green-300"
                }`}
                aria-label={`Show ${name} image ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
