import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static HTML export so the site can be served by GitHub Pages.
  output: "export",
  // Pages has no image optimization server; we don't use next/image, but this
  // keeps `output: export` happy if one is ever added.
  images: { unoptimized: true },
  // Emit directory-style routes (e.g. /foo/index.html) for clean static serving.
  trailingSlash: true,
}

export default nextConfig
