import {
  ArrowRight,
  BadgeCheck,
  Megaphone,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import type { ComponentType } from 'react'

import { LinkButton } from '../components/ui/LinkButton'
import { mailto, site } from '../config/site'

export function Home() {
  return (
    <div className="relative min-w-0">
      {/* Hero */}
      <section className="container pt-6 sm:pt-10 md:pt-14 lg:pt-16">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          <div className="space-y-5 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                <Sparkles className="size-4 shrink-0 text-fuchsia-500" aria-hidden />
                <span>Personal brand · Community · Movement</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1.5 text-xs font-semibold text-fuchsia-700">
                <Megaphone className="size-4 shrink-0" aria-hidden />
                <span>Advertising &amp; promoting platform</span>
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to the{' '}
                <span className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-sky-500 bg-clip-text text-transparent">
                  B.O.D Republic
                </span>
              </h1>
              <p className="max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
                A home beyond X for citizens who run on positivity, a no-fear
                mindset, humor, memes, and birthday-level celebration energy —
                and a place for brands and creators to advertise and get promoted.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <LinkButton to="/community" variant="primary" size="lg" className="min-h-12 w-full sm:w-auto sm:min-h-0">
                Join the Republic <ArrowRight className="size-4 shrink-0" aria-hidden />
              </LinkButton>
              <LinkButton to="/advertise" variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto sm:min-h-0">
                Advertise or get promoted
              </LinkButton>
              <LinkButton to="/about" variant="ghost" size="lg" className="w-full sm:w-auto">
                About B.O.D
              </LinkButton>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <Stat icon={Users} label={`${site.citizens} Citizens`} value="Growing daily" />
              <Stat icon={TrendingUp} label="Viral Threads" value="High reach" />
              <Stat icon={BadgeCheck} label="Good energy only" value="No fear mindset" />
            </div>
          </div>

          <div className="space-y-4 lg:min-w-0">
            <div className="surface relative overflow-hidden p-4 sm:p-5 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_0%,rgba(217,70,239,0.10),transparent_55%)]" />
              <div className="relative space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-slate-500">
                      Viral quote of the week
                    </div>
                    <div className="text-xl font-extrabold tracking-tight">“{site.tagline}”</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                    <X className="size-5 text-slate-500" aria-hidden />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  The Republic is where the timeline energy becomes a movement:
                  positivity, humor, and practical confidence — shared daily.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    className="no-underline inline-flex min-h-11 items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 sm:flex-1"
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Brand partnership with B.O.D Republic',
                    })}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Megaphone className="size-4 shrink-0 text-sky-500" aria-hidden />
                      Advertise / Partner
                    </span>
                    <ArrowRight className="size-4 shrink-0 opacity-80" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising & promoting */}
      <section className="container mt-12 sm:mt-16 md:mt-20 lg:mt-24 pb-10 sm:pb-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            Advertising &amp; promoting platform
          </h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            We help brands advertise and creators get promoted — sponsored content, shoutouts, and campaigns that reach our community.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          <div className="surface overflow-hidden p-4 sm:p-5 md:p-6">
            <div className="flex items-center gap-2 text-slate-800">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50">
                <Megaphone className="size-5 text-fuchsia-500" aria-hidden />
              </span>
              <div>
                <h3 className="font-extrabold tracking-tight">Advertise your brand</h3>
                <p className="text-xs text-slate-500 sm:text-sm">Sponsored posts, campaigns, product launches</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Get your product or service in front of 64k+ engaged citizens. Native content, viral threads, and community activations.
            </p>
            <a
              href={mailto({ to: site.partnershipsEmail, subject: 'Advertising inquiry - B.O.D Republic' })}
              className="no-underline mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-fuchsia-500 px-4 text-sm font-semibold text-white hover:bg-fuchsia-600"
            >
              Request a campaign <ArrowRight className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
          <div className="surface overflow-hidden p-4 sm:p-5 md:p-6">
            <div className="flex items-center gap-2 text-slate-800">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50">
                <TrendingUp className="size-5 text-sky-500" aria-hidden />
              </span>
              <div>
                <h3 className="font-extrabold tracking-tight">Get promoted</h3>
                <p className="text-xs text-slate-500 sm:text-sm">Shoutouts, collabs, growth support</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Creators and brands: we promote projects that fit the Republic vibe. Positive, high-engagement, meme-friendly.
            </p>
            <a
              href={mailto({ to: site.partnershipsEmail, subject: 'Promotion / collaboration - B.O.D Republic' })}
              className="no-underline mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Get promoted <ArrowRight className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership detail */}
      <section className="container mt-12 sm:mt-16 md:mt-20 pb-10 sm:pb-12">
        <div className="surface overflow-hidden">
          <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div className="space-y-4 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                <Megaphone className="size-4 shrink-0 text-sky-500" aria-hidden />
                <span>Influencer + ads</span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
                Want attention on your product?
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                B.O.D helps brands get seen through sponsored threads, shoutouts,
                community games, and campaign-style storytelling.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Feature
                  title="Sponsored posts"
                  body="Native content that fits the Republic vibe."
                  icon={Sparkles}
                />
                <Feature
                  title="Community activations"
                  body="Games + engagement loops that pull people in."
                  icon={Users}
                />
                <Feature
                  title="Brand campaigns"
                  body="Multi-post storytelling for real conversion."
                  icon={TrendingUp}
                />
              </div>
            </div>

            <div className="space-y-4 min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 md:p-6">
                <div className="text-sm font-semibold text-slate-800">
                  Partnership CTA
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Send a brief about your offer + budget. We’ll reply with
                  options.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5">
                  <a
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Partnership request - B.O.D Republic',
                    })}
                    className="no-underline inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 px-5 text-base font-extrabold text-white hover:from-fuchsia-500 hover:to-fuchsia-500"
                  >
                    Request a promo <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </a>
                  <LinkButton
                    to="/advertise"
                    variant="secondary"
                    size="lg"
                    className="min-h-12 justify-center"
                  >
                    See advertising options
                  </LinkButton>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <BadgeCheck className="size-4 shrink-0 text-emerald-500" aria-hidden />
                  Brand-safe energy
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Positive, meme-friendly, and community-first — built for reach
                  without the negativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  label: string
  value: string
}) {
  return (
    <div className="surface p-3 sm:p-4">
      <div className="flex items-center gap-3">
        <div className="grid size-9 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50 sm:size-10">
          <Icon className="size-5 text-slate-700" aria-hidden />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold tracking-tight truncate">{label}</div>
          <div className="text-xs text-slate-500 truncate">{value}</div>
        </div>
      </div>
    </div>
  )
}

function Feature({
  title,
  body,
  icon: Icon,
}: {
  title: string
  body: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
      <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-slate-800">
        <Icon className="size-4 shrink-0 text-slate-700" aria-hidden />
        <span className="min-w-0 truncate">{title}</span>
      </div>
      <div className="mt-1 text-xs text-slate-600 line-clamp-2">{body}</div>
    </div>
  )
}

