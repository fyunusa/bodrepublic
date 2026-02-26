import { motion } from 'framer-motion'
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

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const staggerItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
}

export function Home() {
  return (
    <div className="relative min-w-0">
      {/* Hero */}
      <section className="relative container pt-8 sm:pt-12 md:pt-16 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/40 via-transparent to-transparent pointer-events-none" />
        <div className="grid items-start gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
                <Sparkles className="size-4 shrink-0 text-brand-500" aria-hidden />
                <span>Personal brand · Community · Movement</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 px-3 py-1.5 text-xs font-semibold text-amber-800 shadow-sm">
                <Megaphone className="size-4 shrink-0 text-amber-600" aria-hidden />
                <span>Advertising &amp; promoting platform</span>
              </span>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-4">
              <h1 className="font-display text-balance text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to the{' '}
                <span className="gradient-text">B.O.D Republic</span>
              </h1>
              <p className="max-w-2xl text-pretty text-base text-zinc-600 sm:text-lg">
                A home beyond X for citizens who run on positivity, a no-fear
                mindset, humor, memes, and positive energy —
                and a place for brands and creators to advertise and get promoted.
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <LinkButton to="/community" variant="primary" size="lg" className="min-h-12 w-full sm:w-auto sm:min-h-0 btn-glow">
                Join the Republic <ArrowRight className="size-4 shrink-0" aria-hidden />
              </LinkButton>
              <LinkButton to="/advertise" variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto sm:min-h-0">
                Advertise or get promoted
              </LinkButton>
              <LinkButton to="/connect" variant="ghost" size="lg" className="w-full sm:w-auto">
                Connect
              </LinkButton>
              <LinkButton to="/about" variant="ghost" size="lg" className="w-full sm:w-auto">
                About B.O.D
              </LinkButton>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              <Stat icon={Users} label={`${site.citizens} Citizens`} value="Growing daily" />
              <Stat icon={TrendingUp} label="Viral Threads" value="High reach" />
              <Stat icon={BadgeCheck} label="Good energy only" value="No fear mindset" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 lg:min-w-0"
          >
            <div className="surface-hover relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-transparent to-amber-50/30 pointer-events-none" />
              <div className="relative space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Viral quote of the week
                    </div>
                    <div className="font-display text-xl font-extrabold tracking-tight text-zinc-900">"{site.tagline}"</div>
                  </div>
                  <div className="rounded-xl border border-zinc-200/80 bg-white/80 p-2.5 shadow-sm">
                    <X className="size-5 text-zinc-500" aria-hidden />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-zinc-600">
                  The Republic is where the timeline energy becomes a movement:
                  positivity, humor, and practical confidence — shared daily.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    className="no-underline inline-flex min-h-11 flex-1 items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-800 shadow-sm transition-all hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-700"
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Brand partnership with B.O.D Republic',
                    })}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Megaphone className="size-4 shrink-0 text-brand-500" aria-hidden />
                      Advertise / Partner
                    </span>
                    <ArrowRight className="size-4 shrink-0 opacity-70" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advertising & promoting */}
      <section className="container mt-14 sm:mt-20 md:mt-24 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="font-display text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl">
            Advertising &amp; promoting platform
          </h2>
          <p className="mt-2 text-sm text-zinc-600 sm:text-base">
            We help brands advertise and creators get promoted — sponsored content, shoutouts, and campaigns that reach our community.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:gap-6"
        >
          <motion.div variants={staggerItem} className="surface-hover overflow-hidden p-5 sm:p-6">
            <div className="flex items-center gap-3 text-zinc-800">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-600">
                <Megaphone className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display font-extrabold tracking-tight">Advertise your brand</h3>
                <p className="text-xs text-zinc-500 sm:text-sm">Sponsored posts, campaigns, product launches</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              Get your product or service in front of 64k+ engaged citizens. Native content, viral threads, and community activations.
            </p>
            <a
              href={mailto({ to: site.partnershipsEmail, subject: 'Advertising inquiry - B.O.D Republic' })}
              className="no-underline mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-600 px-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-500/30"
            >
              Request a campaign <ArrowRight className="size-4 shrink-0" aria-hidden />
            </a>
          </motion.div>
          <motion.div variants={staggerItem} className="surface-hover overflow-hidden p-5 sm:p-6">
            <div className="flex items-center gap-3 text-zinc-800">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-600">
                <TrendingUp className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display font-extrabold tracking-tight">Get promoted</h3>
                <p className="text-xs text-zinc-500 sm:text-sm">Shoutouts, collabs, growth support</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              Creators and brands: we promote projects that fit the Republic vibe. Positive, high-engagement, meme-friendly.
            </p>
            <a
              href={mailto({ to: site.partnershipsEmail, subject: 'Promotion / collaboration - B.O.D Republic' })}
              className="no-underline mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-800 transition-all hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-700"
            >
              Get promoted <ArrowRight className="size-4 shrink-0" aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Partnership detail */}
      <section className="container mt-14 sm:mt-20 md:mt-24 pb-14 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="surface overflow-hidden"
        >
          <div className="grid gap-6 p-5 sm:gap-8 sm:p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div className="space-y-5 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600">
                <Megaphone className="size-4 shrink-0 text-brand-500" aria-hidden />
                <span>Influencer + ads</span>
              </div>
              <h2 className="font-display text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl">
                Want attention on your product?
              </h2>
              <p className="text-sm text-zinc-600 sm:text-base">
                B.O.D helps brands get seen through sponsored threads, shoutouts,
                community games, and campaign-style storytelling.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Feature title="Sponsored posts" body="Native content that fits the Republic vibe." icon={Sparkles} />
                <Feature title="Community activations" body="Games + engagement loops that pull people in." icon={Users} />
                <Feature title="Brand campaigns" body="Multi-post storytelling for real conversion." icon={TrendingUp} />
              </div>
            </div>

            <div className="space-y-5 min-w-0">
              <div className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 to-white p-5 sm:p-6 shadow-inner">
                <div className="text-sm font-semibold text-zinc-800">Partnership CTA</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Send a brief about your offer + budget. We’ll reply with options.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-3">
                  <a
                    href={mailto({
                      to: site.partnershipsEmail,
                      subject: 'Partnership request - B.O.D Republic',
                    })}
                    className="no-underline inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 text-base font-extrabold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-500/30"
                  >
                    Request a promo <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </a>
                  <LinkButton to="/advertise" variant="secondary" size="lg" className="min-h-12 justify-center">
                    See advertising options
                  </LinkButton>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
                  <BadgeCheck className="size-4 shrink-0 text-emerald-500" aria-hidden />
                  Brand-safe energy
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  Positive, meme-friendly, and community-first — built for reach without the negativity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
    <motion.div variants={staggerItem} className="surface p-3 sm:p-4 transition-shadow hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-600 sm:size-10">
          <Icon className="size-5" aria-hidden />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold tracking-tight text-zinc-900 truncate">{label}</div>
          <div className="text-xs text-zinc-500 truncate">{value}</div>
        </div>
      </div>
    </motion.div>
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
    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-all hover:border-brand-100 hover:shadow-md">
      <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-zinc-800">
        <Icon className="size-4 shrink-0 text-brand-500" aria-hidden />
        <span className="min-w-0 truncate">{title}</span>
      </div>
      <div className="mt-1 text-xs text-zinc-600 line-clamp-2">{body}</div>
    </div>
  )
}
