export const site = {
  name: 'B.O.D Republic',
  tagline: 'Fear is an illusion.',
  citizens: '64k+',
  partnershipsEmail: 'partnerships@bodrepublic.com',
  xHandle: '@YOUR_HANDLE',
} as const

export function mailto(options: { to: string; subject?: string; body?: string }) {
  const params = new URLSearchParams()
  if (options.subject) params.set('subject', options.subject)
  if (options.body) params.set('body', options.body)
  const qs = params.toString()
  return `mailto:${options.to}${qs ? `?${qs}` : ''}`
}

