export const site = {
  name: 'B.O.D Republic',
  tagline: 'Fear is an illusion.',
  citizens: '64k+',
  email: 'Bodrepuplic@gmail.com',
  phone: '' as string,
  partnershipsEmail: 'Bodrepuplic@gmail.com',
  social: {
    x: 'https://x.com/YOUR_X_HANDLE',
    xHandle: '@YOUR_X_HANDLE',
    instagram: 'https://instagram.com/YOUR_INSTAGRAM',
    instagramHandle: '@YOUR_INSTAGRAM',
    tiktok: 'https://tiktok.com/@YOUR_TIKTOK',
    tiktokHandle: '@YOUR_TIKTOK',
    youtube: '',
    youtubeHandle: '',
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
