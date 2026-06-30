/**
 * Source for the social share card at `public/og.png`.
 *
 * We ship `public/og.png` as a static file because GitHub Pages serves files by
 * extension — the Next metadata route would emit an extensionless file that Pages
 * serves as application/octet-stream, which social scrapers reject.
 *
 * To regenerate `public/og.png` after a branding/copy change:
 *   1. copy this file to `app/opengraph-image.tsx`
 *   2. run `pnpm build`
 *   3. `cp out/opengraph-image public/og.png`
 *   4. delete `app/opengraph-image.tsx` again
 */
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt = "EuryOS — Secure by design. Calm by default."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const assetDir = join(process.cwd(), "assets")
const outfit600 = readFileSync(join(assetDir, "fonts", "Outfit-600.woff"))
const outfit400 = readFileSync(join(assetDir, "fonts", "Outfit-400.woff"))

// The real EuryOS mark, pre-rasterized from app/icon.svg (rounded brand badge).
const markUri = `data:image/png;base64,${readFileSync(
  join(assetDir, "og-mark.png")
).toString("base64")}`

function Mark() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={markUri} width={104} height={104} alt="" />
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "Outfit",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(60% 80% at 50% -10%, rgba(101,95,238,0.45), rgba(10,10,10,0) 60%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Mark />
          <div style={{ fontSize: 50, fontWeight: 600, letterSpacing: -1 }}>
            EuryOS
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Secure by design.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
              backgroundImage: "linear-gradient(90deg, #a5a1f8, #655fee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Calm by default.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              fontWeight: 400,
              color: "#a1a1aa",
              maxWidth: 820,
            }}
          >
            A secure, reliable operating system for everything you do.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 500, color: "#d4d4d8" }}>
            euryos.com
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 500,
              color: "#a5a1f8",
              border: "1px solid rgba(101,95,238,0.45)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            Launching 2026
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: outfit600, weight: 600, style: "normal" },
        { name: "Outfit", data: outfit400, weight: 400, style: "normal" },
      ],
    }
  )
}
