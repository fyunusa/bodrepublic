import { motion } from 'framer-motion'
import { ArrowRight, Hourglass, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { cn } from '../lib/cn'
import { mailto, site } from '../config/site'

type ComingSoonProps = {
  title: string
  subtitle?: string
}

export function ComingSoon({ title, subtitle }: ComingSoonProps) {
  const location = useLocation()
  const [email, setEmail] = useState('')

  const hint = useMemo(() => {
    const params = new URLSearchParams(location.search)
    const feature = params.get('feature')
    if (!feature) return null
    return feature
      .split('-')
      .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
      .join(' ')
  }, [location.search])

  return (
    <div className="container py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="surface overflow-hidden"
        >
          <div className="relative p-6 sm:p-10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(99,102,241,0.08),transparent_55%),radial-gradient(700px_circle_at_80%_10%,rgba(245,158,11,0.06),transparent_55%)]"
            />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                <Hourglass className="size-4 text-brand-500" aria-hidden />
                <span>Coming soon</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                  {title}
                </h1>
                <p className="text-sm text-zinc-600 sm:text-base">
                  {subtitle ??
                    'This page is being built to a high standard. Check back soon — the Republic is expanding.'}
                </p>
                {hint ? (
                  <div className="text-xs text-zinc-500">
                    You tried to open: <span className="font-semibold text-zinc-800">{hint}</span>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-zinc-600">Get notified when it’s live</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={cn(
                      'h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-200',
                    )}
                  />
                </label>
                <div className="flex items-end">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      window.location.href = mailto({
                        to: site.partnershipsEmail,
                        subject: `Notify me about: ${title}`,
                        body: `Please notify me when this is live.\n\nEmail: ${email || '(not provided)'}\nPage: ${location.pathname}`,
                      })
                    }}
                  >
                    Notify me <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <div className="inline-flex items-center gap-2 text-sm font-extrabold tracking-tight text-zinc-800">
                    <Sparkles className="size-4 text-amber-500" aria-hidden />
                    What’s coming
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                    <li>Citizen perks + community games</li>
                    <li>Media archive (threads/memes/highlights)</li>
                    <li>Merch + digital drops</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <div className="font-display text-sm font-extrabold tracking-tight text-zinc-800">For brands</div>
                  <p className="mt-2 text-sm text-zinc-600">
                    Want to advertise? Send a brief and we’ll respond with options tailored to your goals.
                  </p>
                  <a
                    className="no-underline mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Advertising inquiry - B.O.D Republic',
                    })}
                  >
                    Contact partnerships <ArrowRight className="size-4" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
