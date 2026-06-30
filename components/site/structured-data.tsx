import { siteConfig } from "@/lib/site"

/**
 * JSON-LD structured data so search engines understand the site identity and
 * can surface the logo / org details (knowledge panel, rich results).
 */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon-512.png`,
        image: `${siteConfig.url}/og.png`,
        email: siteConfig.email,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
        name: siteConfig.name,
        applicationCategory: "OperatingSystem",
        operatingSystem: "EuryOS",
        softwareVersion: siteConfig.version,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}/og.png`,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is involved.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export { StructuredData }
