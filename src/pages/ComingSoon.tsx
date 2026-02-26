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
    <div className="container pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <div className="surface overflow-hidden">
          <div className="relative p-6 sm:p-10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(217,70,239,0.22),transparent_55%),radial-gradient(700px_circle_at_80%_10%,rgba(56,189,248,0.16),transparent_55%)]"
            />
            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                <Hourglass className="size-4 text-fuchsia-200" aria-hidden />
                <span>Coming soon</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {title}
                </h1>
                <p className="text-sm text-white/70 sm:text-base">
                  {subtitle ??
                    'This page is being built to a high standard. Check back soon — the Republic is expanding.'}
                </p>
                {hint ? (
                  <div className="text-xs text-white/55">
                    You tried to open:{' '}
                    <span className="font-semibold text-white/75">{hint}</span>
                  </div>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-white/60">
                    Get notified when it’s live
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={cn(
                      'h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-fuchsia-300/40 focus:ring-2 focus:ring-fuchsia-300/20',
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

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="inline-flex items-center gap-2 text-sm font-extrabold tracking-tight">
                    <Sparkles className="size-4 text-emerald-200" aria-hidden />
                    What’s coming
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-white/65">
                    <li>Citizen perks + community games</li>
                    <li>Media archive (threads/memes/highlights)</li>
                    <li>Merch + digital drops</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-extrabold tracking-tight">
                    For brands
                  </div>
                  <p className="mt-2 text-sm text-white/65">
                    Want to advertise? Send a brief and we’ll respond with
                    options tailored to your goals.
                  </p>
                  <a
                    className="no-underline mt-3 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-200 hover:text-fuchsia-100"
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
        </div>
      </div>
    </div>
  )
}

