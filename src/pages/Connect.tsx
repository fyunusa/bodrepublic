import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Music2,
  Phone,
  Youtube,
} from 'lucide-react'

import { site } from '../config/site'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

type SocialCard = {
  key: string
  label: string
  handle: string
  href: string
  Icon: React.ComponentType<{ className?: string }>
  color: string
}

function socialCards(): SocialCard[] {
  const s = site.social
  const cards: SocialCard[] = []
  if (s.x && s.xHandle) {
    cards.push({
      key: 'x',
      label: 'X (Twitter)',
      handle: s.xHandle,
      href: s.x,
      Icon: XIcon,
      color: 'hover:bg-zinc-900 hover:text-white hover:border-zinc-900',
    })
  }
  if (s.instagram && s.instagramHandle) {
    cards.push({
      key: 'instagram',
      label: 'Instagram',
      handle: s.instagramHandle,
      href: s.instagram,
      Icon: Instagram,
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-amber-500 hover:text-white hover:border-transparent',
    })
  }
  if (s.tiktok && s.tiktokHandle) {
    cards.push({
      key: 'tiktok',
      label: 'TikTok',
      handle: s.tiktokHandle,
      href: s.tiktok,
      Icon: Music2,
      color: 'hover:bg-zinc-900 hover:text-white hover:border-zinc-900',
    })
  }
  if (s.youtube && s.youtubeHandle) {
    cards.push({
      key: 'youtube',
      label: 'YouTube',
      handle: s.youtubeHandle,
      href: s.youtube,
      Icon: Youtube,
      color: 'hover:bg-red-600 hover:text-white hover:border-red-600',
    })
  }
  if (s.linkedin && s.linkedinHandle) {
    cards.push({
      key: 'linkedin',
      label: 'LinkedIn',
      handle: s.linkedinHandle,
      href: s.linkedin,
      Icon: Linkedin,
      color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    })
  }
  return cards
}

export function Connect() {
  const cards = socialCards()

  return (
    <div className="relative min-w-0">
      <section className="container py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Connect with the Republic
          </h1>
          <p className="mt-3 text-zinc-600 sm:text-lg">
            Follow on socials, drop an email, or say hi. We’re where the energy is.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          <motion.a
            variants={item}
            href={site.email ? `mailto:${site.email}` : undefined}
            className="surface-hover group flex min-h-[120px] flex-col justify-between p-5 no-underline sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Mail className="size-6" aria-hidden />
              </span>
              <div className="min-w-0">
                <div className="font-display font-semibold text-zinc-900">Email</div>
                <div className="truncate text-sm text-zinc-600 group-hover:text-zinc-900">
                  {site.email || '—'}
                </div>
              </div>
            </div>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
              Send a message <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </span>
          </motion.a>

          {site.phone ? (
            <motion.a
              variants={item}
              href={`tel:${String(site.phone).replace(/\s/g, '')}`}
              className="surface-hover group flex min-h-[120px] flex-col justify-between p-5 no-underline sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <Phone className="size-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-zinc-900">Phone</div>
                  <div className="truncate text-sm text-zinc-600 group-hover:text-zinc-900">{site.phone}</div>
                </div>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                Call or text <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </motion.a>
          ) : (
            <motion.div
              variants={item}
              className="surface flex min-h-[120px] flex-col justify-between p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-400">
                  <Phone className="size-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-zinc-900">Phone</div>
                  <div className="text-sm text-zinc-500">Coming soon</div>
                </div>
              </div>
            </motion.div>
          )}

          {cards.map((card) => (
            <motion.a
              key={card.key}
              variants={item}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`surface-hover group flex min-h-[120px] flex-col justify-between border p-5 no-underline transition-colors sm:p-6 ${card.color}`}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <card.Icon className="size-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-zinc-900 group-hover:text-white">{card.label}</div>
                  <div className="truncate text-sm text-zinc-600 group-hover:text-white/90">{card.handle}</div>
                </div>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:text-white">
                Follow <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-zinc-500"
        >
          For partnerships &amp; advertising: <a href={`mailto:${site.partnershipsEmail}`} className="font-medium text-brand-600 hover:underline">{site.partnershipsEmail}</a>
        </motion.p>
      </section>
    </div>
  )
}
