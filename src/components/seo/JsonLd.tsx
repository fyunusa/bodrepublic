import { site } from '../../config/site'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.siteUrl}#organization`,
  name: site.name,
  description: `B.O.D Republic — ${site.tagline} A movement around positivity, no-fear mindset, humor, and community. Advertising & promoting platform.`,
  url: site.siteUrl,
  email: site.email,
  sameAs: [
    site.social.x,
    site.social.instagram,
    site.social.youtube,
    site.social.facebook,
    site.social.tiktok,
  ].filter(Boolean),
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  description: `B.O.D Republic — ${site.tagline} Community, advertising & promoting platform.`,
  url: site.siteUrl,
  publisher: { '@id': `${site.siteUrl}#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', url: `${site.siteUrl}/connect` },
    'query-input': 'required name=query',
  },
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}
