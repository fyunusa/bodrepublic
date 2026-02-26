import {
  ArrowRight,
  BadgeCheck,
  CalendarHeart,
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
    <div className="relative">
      <section className="container pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              <Sparkles className="size-4 text-fuchsia-500" aria-hidden />
              <span>Personal brand · Community hub · Movement</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
                Welcome to the{' '}
                <span className="bg-gradient-to-r from-fuchsia-200 via-white to-sky-200 bg-clip-text text-transparent">
                  B.O.D Republic
                </span>
                .
              </h1>
              <p className="max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
                A home beyond X for citizens who run on positivity, a no-fear
                mindset, humor, memes, and birthday-level celebration energy.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton to="/community" variant="primary" size="lg">
                Join the Republic <ArrowRight className="size-4" aria-hidden />
              </LinkButton>
              <LinkButton to="/about" variant="ghost" size="lg">
                About B.O.D
              </LinkButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Stat icon={Users} label={`${site.citizens} Citizens`} value="Growing daily" />
              <Stat icon={TrendingUp} label="Viral Threads" value="High reach" />
              <Stat icon={BadgeCheck} label="Good energy only" value="No fear mindset" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="surface relative overflow-hidden p-6">
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

                <div className="grid gap-3 sm:grid-cols-2">
                  <LinkButton
                    to="/community?feature=birthday-twin"
                    variant="secondary"
                    size="md"
                    className="justify-between"
                  >
                    <span className="inline-flex items-center gap-2">
                      <CalendarHeart className="size-4 text-fuchsia-500" aria-hidden />
                      Find your Birthday Twin
                    </span>
                    <ArrowRight className="size-4 opacity-80" aria-hidden />
                  </LinkButton>
                  <a
                    className="no-underline inline-flex h-11 items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Brand partnership with B.O.D Republic',
                    })}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Megaphone className="size-4 text-sky-500" aria-hidden />
                      Advertise / Partner
                    </span>
                    <ArrowRight className="size-4 opacity-80" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-16 sm:mt-24 pb-12">
        <div className="surface overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                <Megaphone className="size-4 text-sky-500" aria-hidden />
                <span>Influencer + ads</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Want attention on your product?
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                B.O.D helps brands get seen through sponsored threads, shoutouts,
                community games, and campaign-style storytelling.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
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

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-800">
                  Partnership CTA
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Send a brief about your offer + budget. We’ll reply with
                  options.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Partnership request - B.O.D Republic',
                    })}
                    className="no-underline inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 px-5 text-base font-extrabold text-white hover:from-fuchsia-500 hover:to-fuchsia-500"
                  >
                    Request a promo <ArrowRight className="size-4" aria-hidden />
                  </a>
                  <LinkButton
                    to="/advertise"
                    variant="secondary"
                    size="lg"
                    className="justify-center"
                  >
                    See advertising options
                  </LinkButton>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <BadgeCheck className="size-4 text-emerald-500" aria-hidden />
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
    <div className="surface p-4">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-slate-50">
          <Icon className="size-5 text-slate-700" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-tight">{label}</div>
          <div className="text-xs text-slate-500">{value}</div>
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
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-slate-800">
        <Icon className="size-4 text-slate-700" aria-hidden />
        {title}
      </div>
      <div className="mt-1 text-xs text-slate-600">{body}</div>
    </div>
  )
}

