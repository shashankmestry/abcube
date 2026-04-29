import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ABCube Industries Pvt. Ltd.",
    short_name: "ABCube",
    description:
      "ABCube Industries manufactures home care and hygiene products with private label and contract manufacturing support.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4faf5",
    theme_color: "#176b33",
    lang: "en-IN",
    categories: ["business", "shopping", "productivity"],
    icons: [
      {
        src: "/logos/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/logos/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/logos/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/logos/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/logos/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  }
}
