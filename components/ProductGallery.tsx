"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

type ProductGalleryProps = {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openAt = (index: number) => {
    setActiveIndex(index)
    setIsOpen(true)
  }

  const close = useCallback(() => setIsOpen(false), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, close, showPrevious, showNext])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => openAt(index)}
            className={`group relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
              index === 0 && images.length > 2 ? "col-span-2 row-span-2 aspect-square sm:col-span-2" : "aspect-square"
            }`}
          >
            <Image
              src={image}
              alt={`${productName} gallery image ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-green-900 opacity-0 shadow-sm transition group-hover:opacity-100">
              View
            </span>
          </button>
        ))}
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image gallery`}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <p className="text-sm font-medium text-white/80">
              {productName} · {activeIndex + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
              aria-label="Close gallery"
            >
              ×
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 sm:px-16">
            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-white/25 sm:left-6"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-white/25 sm:right-6"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            ) : null}

            <div className="relative h-[55vh] w-full max-w-5xl">
              <Image
                src={images[activeIndex]}
                alt={`${productName} enlarged view ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {images.length > 1 ? (
            <div className="border-t border-white/10 px-4 py-4 sm:px-6">
              <div className="mx-auto flex max-w-5xl gap-3 overflow-x-auto pb-1">
                {images.map((image, index) => (
                  <button
                    key={`${image}-thumb`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                      index === activeIndex
                        ? "border-green-400 ring-2 ring-green-400/40"
                        : "border-white/20 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${productName} thumbnail ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  )
}
