export const site = {
  name: 'B.O.D Republic',
  tagline: 'Fear is an illusion.',
  citizens: '64k+',
  email: 'Bodrepuplic@gmail.com',
  phone: '09072048279' as string,
  partnershipsEmail: 'Bodrepuplic@gmail.com',
  /** Base URL for canonical and Open Graph. Set to your production URL. */
  siteUrl: 'https://bod-republic.netlify.app',
  defaultOgImage: '/og-image.png',
  social: {
    facebook: 'https://www.facebook.com/RazakMakinde',
    facebookHandle: 'RazakMakinde',
    whatsapp: 'https://wa.me/2349072048279',
    whatsappHandle: '09072048279',
    instagram: 'https://instagram.com/razakdeyforyou',
    instagramHandle: 'razakdeyforyou',
    youtube: 'https://youtube.com/@razakdeyforyou',
    youtubeHandle: 'razakdeyforyou',
    tiktok: 'https://tiktok.com/@razakmakinde',
    tiktokHandle: '@razakmakinde',
    x: 'https://x.com/bod_repuplic',
    xHandle: '@bod_repuplic',
    linkedin: '',
    linkedinHandle: '',
  },
} as const

export function mailto(options: { to: string; subject?: string; body?: string }) {
  const params = new URLSearchParams()
  if (options.subject) params.set('subject', options.subject)
  if (options.body) params.set('body', options.body)
  const qs = params.toString()
  return `mailto:${options.to}${qs ? `?${qs}` : ''}`
}
