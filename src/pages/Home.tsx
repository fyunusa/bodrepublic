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
      <section className="container pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
              <Sparkles className="size-4 text-fuchsia-200" aria-hidden />
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
              <p className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                A home beyond X for citizens who run on positivity, a no-fear
                mindset, humor, memes, and birthday-level celebration energy.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton to="/community" variant="primary" size="lg">
                Join the Republic <ArrowRight className="size-4" aria-hidden />
              </LinkButton>
              <LinkButton to="/shop" variant="secondary" size="lg">
                Shop Merch
              </LinkButton>
              <LinkButton to="/about" variant="ghost" size="lg" className="border border-white/10">
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
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_0%,rgba(217,70,239,0.22),transparent_55%)]" />
              <div className="relative space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-white/60">
                      Viral quote of the week
                    </div>
                    <div className="text-xl font-extrabold tracking-tight">“{site.tagline}”</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <X className="size-5 text-white/70" aria-hidden />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-white/70">
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
                      <CalendarHeart className="size-4 text-fuchsia-200" aria-hidden />
                      Find your Birthday Twin
                    </span>
                    <ArrowRight className="size-4 opacity-80" aria-hidden />
                  </LinkButton>
                  <a
                    className="no-underline inline-flex h-11 items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white/85 hover:bg-white/10"
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Brand partnership with B.O.D Republic',
                    })}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Megaphone className="size-4 text-sky-200" aria-hidden />
                      Advertise / Partner
                    </span>
                    <ArrowRight className="size-4 opacity-80" aria-hidden />
                  </a>
                </div>
              </div>
            </div>

            <div className="surface p-6">
              <div className="text-xs font-semibold text-white/60">Quick vibe</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Tag>BestofDem Republic</Tag>
                <Tag>We don’t do that here</Tag>
                <Tag>Join the Republic</Tag>
                <Tag>Positivity + memes</Tag>
                <Tag>Birthday energy</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-16 sm:mt-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Recent X highlights
            </h2>
            <p className="text-sm text-white/65 sm:text-base">
              Embed the real feed later, or curate a “best of” reel. For now,
              these are polished placeholders.
            </p>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
              Tip: replace these cards with an embedded timeline or API-powered
              highlights when ready.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PostCard
              headline="A no-fear mindset isn’t loud — it’s consistent."
              meta="Thread · 120k impressions"
            />
            <PostCard
              headline="This is your sign to start again. Today."
              meta="Quote · 34k likes"
            />
            <PostCard
              headline="Birthday energy: celebrate the small wins like it’s big."
              meta="Meme · Shared everywhere"
            />
            <PostCard
              headline="We don’t do that here: negativity doesn’t pay rent."
              meta="Community game · 18k replies"
            />
          </div>
        </div>
      </section>

      <section className="container mt-16 sm:mt-24">
        <div className="surface overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                <Megaphone className="size-4 text-sky-200" aria-hidden />
                <span>Influencer + ads</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Want attention on your product?
              </h2>
              <p className="text-sm text-white/70 sm:text-base">
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
                  title="Brand campaigns"
                  body="Multi-post storytelling for real conversion."
                  icon={TrendingUp}
                />
                <Feature
                  title="Community activations"
                  body="Games + engagement loops that pull people in."
                  icon={Users}
                />
                <Feature
                  title="Launch boosts"
                  body="Momentum on day one with audience alignment."
                  icon={BadgeCheck}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
                <div className="text-sm font-semibold text-white/80">
                  Partnership CTA
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Send a brief about your offer + budget. We’ll reply with
                  options.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Partnership request - B.O.D Republic',
                    })}
                    className="no-underline inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-fuchsia-400 to-fuchsia-500 px-5 text-base font-extrabold text-slate-950 hover:from-fuchsia-300 hover:to-fuchsia-500"
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

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                  <BadgeCheck className="size-4 text-emerald-200" aria-hidden />
                  Brand-safe energy
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Positive, meme-friendly, and community-first — built for reach
                  without the negativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-16 pb-10 sm:mt-24 sm:pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <BigCTA
            title="Explore the Community"
            body="Games, citizen perks, and a place to build momentum together."
            icon={Users}
            to="/community"
          />
          <BigCTA
            title="Shop Merch (Soon)"
            body="Wear the mindset. Drop-ready collections coming soon."
            icon={Sparkles}
            to="/shop"
          />
          <BigCTA
            title="Media Archive (Soon)"
            body="A curated best-of library: threads, memes, and highlights."
            icon={BadgeCheck}
            to="/media"
          />
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
        <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5">
          <Icon className="size-5 text-white/75" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-tight">{label}</div>
          <div className="text-xs text-white/60">{value}</div>
        </div>
      </div>
    </div>
  )
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
      {children}
    </span>
  )
}

function PostCard({ headline, meta }: { headline: string; meta: string }) {
  return (
    <div className="surface p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-white/85">{headline}</div>
          <div className="text-xs text-white/55">{meta}</div>
        </div>
        <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5">
          <X className="size-4 text-white/65" aria-hidden />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-white/55">
        <span className="inline-flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-300/70" />
          Highlight
        </span>
        <span className="inline-flex items-center gap-1">
          View <ArrowRight className="size-3" aria-hidden />
        </span>
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight">
        <Icon className="size-4 text-white/70" aria-hidden />
        {title}
      </div>
      <div className="mt-1 text-xs text-white/60">{body}</div>
    </div>
  )
}

function BigCTA({
  title,
  body,
  icon: Icon,
  to,
}: {
  title: string
  body: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  to: string
}) {
  return (
    <div className="surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="text-lg font-extrabold tracking-tight">{title}</div>
          <div className="text-sm text-white/65">{body}</div>
        </div>
        <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className="size-5 text-white/70" aria-hidden />
        </div>
      </div>

      <div className="mt-5">
        <LinkButton to={to} variant="ghost" size="md" className="border border-white/10">
          Open <ArrowRight className="size-4" aria-hidden />
        </LinkButton>
      </div>
    </div>
  )
}

