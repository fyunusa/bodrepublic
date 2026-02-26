import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Megaphone,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'

import { LinkButton } from '../components/ui/LinkButton'
import { mailto, site } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }
const staggerItem = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Home() {
  useDocumentHead({
    title: site.name,
    description: `B.O.D Republic — ${site.tagline} A movement around positivity, no-fear mindset, humor, and community. Join 64k+ citizens. Advertising & promoting platform for brands and creators.`,
    path: '/',
  })

  return (
    <div className="relative min-w-0">
      {/* Hero — full-bleed, bold */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(250,250,250,0.8))] pointer-events-none" />
        <div className="container relative py-20 sm:py-28 md:py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.p
              variants={staggerItem}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600"
            >
              Personal brand · Community · Movement
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="font-display mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Welcome to the{' '}
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-violet-500 bg-clip-text text-transparent">
                B.O.D Republic
              </span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl"
            >
              A home beyond X for citizens who run on positivity, a no-fear mindset,
              humor, memes, and positive energy — and a place for brands and creators
              to advertise and get promoted.
            </motion.p>
            <motion.div
              variants={staggerItem}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <LinkButton
                to="/community"
                variant="primary"
                size="lg"
                className="min-h-12 w-full sm:w-auto px-8 text-base font-semibold shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30"
              >
                Join the Republic <ArrowRight className="size-4 shrink-0" aria-hidden />
              </LinkButton>
              <LinkButton
                to="/connect"
                variant="secondary"
                size="lg"
                className="min-h-12 w-full sm:w-auto"
              >
                Connect
              </LinkButton>
              <LinkButton to="/advertise" variant="ghost" size="lg" className="w-full sm:w-auto">
                Advertise or get promoted
              </LinkButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote — dark strip */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(99,102,241,0.12),transparent)] pointer-events-none" />
        <div className="container relative">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              “{site.tagline}”
            </p>
            <footer className="mt-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
              B.O.D Republic
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200/80 bg-white py-12 sm:py-16">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8"
          >
            <motion.div variants={staggerItem} className="flex items-center gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <Users className="size-7" aria-hidden />
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-zinc-900 sm:text-3xl">{site.citizens}</p>
                <p className="text-sm font-medium text-zinc-500">Citizens</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <TrendingUp className="size-7" aria-hidden />
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-zinc-900 sm:text-3xl">Viral</p>
                <p className="text-sm font-medium text-zinc-500">Threads & reach</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <BadgeCheck className="size-7" aria-hidden />
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-zinc-900 sm:text-3xl">Good</p>
                <p className="text-sm font-medium text-zinc-500">Energy only</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform — advertising & promoting */}
      <section className="py-20 sm:py-28 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-12 text-center sm:mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Advertising & promoting platform
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-zinc-900 sm:text-4xl md:text-5xl">
              We help brands advertise and creators get promoted
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600 sm:text-lg">
              Sponsored content, shoutouts, and campaigns that reach our community.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            <motion.div
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-xl shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-200/15 hover:border-brand-200/60 sm:p-10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-100/80 to-transparent rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                  <Megaphone className="size-7" aria-hidden />
                </div>
                <h3 className="font-display mt-6 text-xl font-extrabold text-zinc-900 sm:text-2xl">
                  Advertise your brand
                </h3>
                <p className="mt-2 text-zinc-600">
                  Sponsored posts, campaigns, product launches. Get in front of 64k+ engaged citizens.
                </p>
                <a
                  href={mailto({ to: site.partnershipsEmail, subject: 'Advertising inquiry - B.O.D Republic' })}
                  className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-500 hover:shadow-xl"
                >
                  Request a campaign <ArrowRight className="size-4 shrink-0" aria-hidden />
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-xl shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200/15 hover:border-amber-200/60 sm:p-10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100/80 to-transparent rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <Sparkles className="size-7" aria-hidden />
                </div>
                <h3 className="font-display mt-6 text-xl font-extrabold text-zinc-900 sm:text-2xl">
                  Get promoted
                </h3>
                <p className="mt-2 text-zinc-600">
                  Shoutouts, collabs, growth support. We promote projects that fit the Republic vibe.
                </p>
                <a
                  href={mailto({ to: site.partnershipsEmail, subject: 'Promotion / collaboration - B.O.D Republic' })}
                  className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-800 transition-all hover:border-amber-200 hover:bg-amber-50/50 hover:text-amber-800"
                >
                  Get promoted <ArrowRight className="size-4 shrink-0" aria-hidden />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social strip — find us everywhere */}
      <section className="border-y border-zinc-200/80 bg-zinc-50/80 py-14 sm:py-16">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500"
          >
            Find us everywhere
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {site.social.x && (
              <a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-900 hover:text-white hover:shadow-md"
                aria-label="X (Twitter)"
              >
                <XIcon className="size-5" />
              </a>
            )}
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-pink-300 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-amber-500 hover:text-white hover:shadow-md"
                aria-label="Instagram"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
            {site.social.tiktok && (
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-zinc-400 hover:bg-zinc-900 hover:text-white hover:shadow-md"
                aria-label="TikTok"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            )}
            {site.social.youtube && (
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-red-300 hover:bg-red-600 hover:text-white hover:shadow-md"
                aria-label="YouTube"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-md"
                aria-label="Facebook"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}
            {site.social.whatsapp && (
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-md"
                aria-label="WhatsApp"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-sm text-zinc-500"
          >
            <LinkButton to="/connect" variant="ghost" size="sm" className="text-brand-600">
              All links & contact →
            </LinkButton>
          </motion.p>
        </div>
      </section>

      {/* CTA — work with us */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.18),transparent)] pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Want to work with us?
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Send a brief about your offer and budget. We’ll reply with options.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={mailto({
                  to: site.partnershipsEmail,
                  subject: 'Partnership request - B.O.D Republic',
                })}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-400 hover:shadow-xl"
              >
                Request a promo <ArrowRight className="size-4 shrink-0" aria-hidden />
              </a>
              <LinkButton
                to="/advertise"
                variant="secondary"
                size="lg"
                className="min-h-14 border-zinc-600 bg-zinc-800 text-white hover:bg-zinc-700"
              >
                See options
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
