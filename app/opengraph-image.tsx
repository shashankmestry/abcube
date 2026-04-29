import { ImageResponse } from "next/og"

export const alt = "ABCube Industries home care product manufacturer"
export const size = {
  width: 1200,
  height: 630
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(130deg, #14532d 0%, #166534 45%, #65a30d 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "inline-flex",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: "999px",
            padding: "10px 18px",
            fontSize: 24,
            letterSpacing: 1
          }}
        >
          ABCube Industries Pvt. Ltd.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.05 }}>
            Home Care and Hygiene Products
          </div>
          <div style={{ fontSize: 30, opacity: 0.95 }}>
            Contract Manufacturing • Private Label • Bulk Supply
          </div>
        </div>
        <div style={{ fontSize: 26, opacity: 0.95 }}>abcube.in</div>
      </div>
    ),
    size
  )
}
