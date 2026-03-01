import { Helmet } from "react-helmet-async"

// Update this when the site goes live on a real domain
export const SITE_URL = "https://jankjaerstad.no"

type SEOProps = {
  title: string
  description?: string
  /** Pathname, e.g. "/bibliografi/valgdager" */
  path?: string
  /** Absolute URL to OG image; defaults to the author portrait */
  image?: string
}

export default function SEO({ title, description, path = "", image }: SEOProps) {
  const pageUrl = `${SITE_URL}${path}`
  const ogImage = image ?? `${SITE_URL}/images/pappa.jpg`

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
