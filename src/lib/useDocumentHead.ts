import { useEffect } from 'react'

import { site } from '../config/site'

export type DocumentHeadOptions = {
  title: string
  description: string
  /** Path (e.g. "/connect"). Canonical URL will be siteUrl + path */
  path?: string
  /** Set to true for coming-soon or 404 to avoid indexing */
  noIndex?: boolean
  /** Override default OG/Twitter image (full URL or path) */
  image?: string
}

const DEFAULT_TITLE = site.name
const DEFAULT_DESCRIPTION = `B.O.D Republic — ${site.tagline} A movement around positivity, no-fear mindset, humor, and community. Advertising & promoting platform.`

function getOrCreateTag(
  tag: 'meta' | 'link',
  attrs: { name?: string; property?: string; rel?: string; [key: string]: string | undefined },
): HTMLElement {
  const existing = document.querySelector(
    tag === 'meta'
      ? `meta[${attrs.name ? `name="${attrs.name}"` : `property="${attrs.property}"`}]`
      : `link[rel="${attrs.rel}"]`,
  )
  if (existing) return existing as HTMLElement
  const el = document.createElement(tag)
  Object.entries(attrs).forEach(([key, value]) => {
    if (value != null) el.setAttribute(key, value)
  })
  document.head.appendChild(el)
  return el
}

function setMetaContent(selector: string, content: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

/**
 * Sets document title and meta tags for SEO (description, Open Graph, Twitter Card, canonical).
 * Call once per page in the top-level page component.
 */
export function useDocumentHead({
  title,
  description,
  path = '',
  noIndex = false,
  image,
}: DocumentHeadOptions) {
  useEffect(() => {
    const fullTitle = path ? `${title} | ${site.name}` : title
    document.title = fullTitle

    const canonicalUrl = `${site.siteUrl.replace(/\/$/, '')}${path || '/'}`
    const imageUrl = image?.startsWith('http') ? image : `${site.siteUrl}${(image || site.defaultOgImage).replace(/^\//, '/')}`

    const metaTags: Array<[string, string, string?]> = [
      ['name', 'description', description],
      ['property', 'og:title', fullTitle],
      ['property', 'og:description', description],
      ['property', 'og:url', canonicalUrl],
      ['property', 'og:type', 'website'],
      ['property', 'og:image', imageUrl],
      ['property', 'og:site_name', site.name],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', fullTitle],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', imageUrl],
    ]

    metaTags.forEach(([attrKey, attrVal, content]) => {
      if (!content) return
      const el = getOrCreateTag('meta', { [attrKey]: attrVal }) as HTMLMetaElement
      el.setAttribute('content', content)
    })

    const linkCanonical = getOrCreateTag('link', { rel: 'canonical', href: canonicalUrl }) as HTMLLinkElement
    linkCanonical.setAttribute('href', canonicalUrl)

    if (noIndex) {
      getOrCreateTag('meta', { name: 'robots', content: 'noindex, nofollow' })
    }

    return () => {
      document.title = DEFAULT_TITLE
      setMetaContent('meta[name="description"]', DEFAULT_DESCRIPTION)
      setMetaContent('meta[property="og:title"]', DEFAULT_TITLE)
      setMetaContent('meta[property="og:description"]', DEFAULT_DESCRIPTION)
      setMetaContent('meta[property="og:url"]', site.siteUrl)
      setMetaContent('meta[property="og:image"]', `${site.siteUrl}${site.defaultOgImage}`)
      setMetaContent('meta[name="twitter:title"]', DEFAULT_TITLE)
      setMetaContent('meta[name="twitter:description"]', DEFAULT_DESCRIPTION)
      setMetaContent('meta[name="twitter:image"]', `${site.siteUrl}${site.defaultOgImage}`)
      linkCanonical.setAttribute('href', site.siteUrl)
      const robots = document.querySelector('meta[name="robots"][content="noindex, nofollow"]')
      if (robots) robots.remove()
    }
  }, [title, description, path, noIndex, image])
}
