import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Crown,
  Heart,
  Megaphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

import { LinkButton } from '../components/ui/LinkButton'
import { mailto, site } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

const stagger = { 
  animate: { 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.15 
    } 
  } 
}

const staggerItem = { 
  initial: { opacity: 0, y: 30, scale: 0.95 }, 
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    }
  } 
}

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  }
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8])

  useDocumentHead({
    title: site.name,
    description: `B.O.D Republic — ${site.tagline} A movement around positivity, no-fear mindset, humor, and community. Join 64k+ citizens. Advertising & promoting platform for brands and creators.`,
    path: '/',
  })

  return (
    <div className="relative min-w-0">
      {/* Hero Section - Redesigned with modern animations */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="animated-bg absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(129,140,248,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_100%,rgba(251,146,60,0.1),transparent_50%)]" />
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={floatingAnimation}
            className="absolute top-20 left-10 text-4xl"
            style={{ animationDelay: '0s' }}
          >
            ✨
          </motion.div>
          <motion.div
            animate={floatingAnimation}
            className="absolute top-40 right-20 text-3xl"
            style={{ animationDelay: '2s' }}
          >
            🚀
          </motion.div>
          <motion.div
            animate={floatingAnimation}
            className="absolute bottom-40 left-20 text-2xl"
            style={{ animationDelay: '4s' }}
          >
            💫
          </motion.div>
          <motion.div
            animate={floatingAnimation}
            className="absolute top-60 left-1/3 text-3xl"
            style={{ animationDelay: '1s' }}
          >
            ⚡
          </motion.div>
        </div>

        <div className="container relative py-20 sm:py-32 lg:py-40">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full glass-morphism px-6 py-3 mb-8"
            >
              <Crown className="size-5 text-yellow-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-800">
                Personal brand · Community · Movement
              </span>
              <Sparkles className="size-5 text-purple-400" />
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8"
            >
              Welcome to the{' '}
              <motion.span
                className="gradient-text text-glow"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                B.O.D Republic
              </motion.span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-zinc-700 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
            >
              A home beyond X for citizens who run on{' '}
              <span className="font-bold text-emerald-600">positivity</span>,{' '}
              <span className="font-bold text-purple-600">no-fear mindset</span>,{' '}
              <span className="font-bold text-orange-600">humor & memes</span> —
              and a place for brands to shine.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <LinkButton
                to="/community"
                variant="primary"
                size="lg"
                className="btn-glow group min-h-14 px-10 text-lg font-bold interactive-element"
                data-cursor="pointer"
              >
                <Crown className="size-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Join the Republic
                <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </LinkButton>

              <LinkButton
                to="/connect"
                variant="secondary"
                size="lg"
                className="min-h-14 px-8 text-lg font-semibold interactive-element surface-hover"
                data-cursor="pointer"
              >
                <Heart className="size-5 mr-2" />
                Connect with us
              </LinkButton>

              <LinkButton 
                to="/advertise" 
                variant="ghost" 
                size="lg" 
                className="text-lg font-semibold hover:text-purple-600 interactive-element"
                data-cursor="pointer"
              >
                <Megaphone className="size-5 mr-2" />
                Partner with B.O.D
              </LinkButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Manifesto Section - Redesigned */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(129,140,248,0.15),transparent_70%)]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-8"
            >
              <Star className="size-12 text-yellow-400" />
            </motion.div>

            <blockquote className="mb-8">
              <motion.p 
                className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(129, 140, 248, 0.5)',
                    '0 0 40px rgba(251, 146, 60, 0.5)',
                    '0 0 20px rgba(129, 140, 248, 0.5)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                "{site.tagline}"
              </motion.p>
              <footer className="text-lg font-bold uppercase tracking-widest text-zinc-300">
                — B.O.D Republic Manifesto
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="animated-bg absolute inset-0 opacity-30" />
        <div className="container relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12"
          >
            <motion.div 
              variants={staggerItem} 
              className="modern-card text-center interactive-element"
              data-cursor="pointer"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30"></div>
                  <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl">
                    <Users className="size-10" />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-display text-4xl font-black text-zinc-900 mb-2">{site.citizens}</p>
                <p className="text-lg font-bold text-zinc-600 uppercase tracking-wide">Active Citizens</p>
                <p className="text-sm text-zinc-500 mt-2">Growing community of engaged members</p>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerItem} 
              className="modern-card text-center interactive-element"
              data-cursor="pointer"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-400 rounded-full blur-xl opacity-30"></div>
                  <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl">
                    <TrendingUp className="size-10" />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-display text-4xl font-black text-zinc-900 mb-2">Viral</p>
                <p className="text-lg font-bold text-zinc-600 uppercase tracking-wide">Content Reach</p>
                <p className="text-sm text-zinc-500 mt-2">Millions of impressions monthly</p>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerItem} 
              className="modern-card text-center interactive-element"
              data-cursor="pointer"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-30"></div>
                  <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-2xl">
                    <BadgeCheck className="size-10" />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-display text-4xl font-black text-zinc-900 mb-2">100%</p>
                <p className="text-lg font-bold text-zinc-600 uppercase tracking-wide">Good Vibes Only</p>
                <p className="text-sm text-zinc-500 mt-2">Positive energy guaranteed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Platform Section - Redesigned */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-blue-50" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 mb-6"
              animate={{
                background: [
                  'linear-gradient(to right, rgb(243, 232, 255), rgb(219, 234, 254))',
                  'linear-gradient(to right, rgb(219, 234, 254), rgb(254, 240, 138))',
                  'linear-gradient(to right, rgb(254, 240, 138), rgb(243, 232, 255))',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Zap className="size-5 text-purple-600" />
              <span className="text-sm font-bold uppercase tracking-wider text-purple-800">
                Advertising & Promoting Platform
              </span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 mb-6 gradient-text">
              We help brands advertise & creators shine
            </h2>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              Sponsored content, viral campaigns, and authentic promotions that reach our engaged community of{' '}
              <span className="font-bold text-brand-600">{site.citizens} citizens</span>.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            <motion.div
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl p-10 lg:p-12 interactive-element"
              style={{
                background: 'linear-gradient(145deg, rgba(129, 140, 248, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)',
                border: '2px solid rgba(129, 140, 248, 0.2)',
              }}
              data-cursor="pointer"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-brand-400/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <motion.div 
                  className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 text-white shadow-2xl mb-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Megaphone className="size-8" />
                </motion.div>
                
                <h3 className="font-display text-3xl font-black text-zinc-900 mb-4">
                  Advertise Your Brand
                </h3>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Sponsored posts, product launches, brand campaigns. Get your message in front of{' '}
                  <span className="font-bold text-brand-600">64k+ highly engaged citizens</span> who are ready to discover new brands and products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={mailto({ to: site.partnershipsEmail, subject: 'Brand Advertising Partnership - B.O.D Republic' })}
                    className="btn-glow group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 px-6 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 interactive-element"
                    data-cursor="pointer"
                  >
                    Start a Campaign
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <LinkButton
                    to="/advertise"
                    variant="ghost"
                    className="text-brand-600 hover:text-purple-600 font-semibold interactive-element"
                    data-cursor="pointer"
                  >
                    View pricing & packages
                  </LinkButton>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl p-10 lg:p-12 interactive-element"
              style={{
                background: 'linear-gradient(145deg, rgba(251, 146, 60, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)',
                border: '2px solid rgba(251, 146, 60, 0.2)',
              }}
              data-cursor="pointer"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-orange-400/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <motion.div 
                  className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-2xl mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="size-8" />
                </motion.div>
                
                <h3 className="font-display text-3xl font-black text-zinc-900 mb-4">
                  Get Promoted
                </h3>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Creator shoutouts, collaboration opportunities, growth support. We promote projects, content, and creators that align with{' '}
                  <span className="font-bold text-orange-600">the Republic's positive energy</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={mailto({ to: site.partnershipsEmail, subject: 'Creator Promotion Partnership - B.O.D Republic' })}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-pink-50 px-6 text-sm font-bold text-orange-800 shadow-lg transition-all hover:border-orange-300 hover:shadow-xl hover:scale-105 interactive-element"
                    data-cursor="pointer"
                  >
                    Get Promoted
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <LinkButton
                    to="/connect"
                    variant="ghost"
                    className="text-orange-600 hover:text-pink-600 font-semibold interactive-element"
                    data-cursor="pointer"
                  >
                    Submit your project
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Social Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900" />
        <div className="animated-bg absolute inset-0 opacity-20" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Find us across the digital universe
            </h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join the conversation on every platform where the Republic's citizens gather
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {site.social.x && (
              <motion.a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element glass-morphism flex size-16 items-center justify-center rounded-2xl text-white/80 transition-all hover:text-white hover:scale-110"
                aria-label="X (Twitter)"
                data-cursor="pointer"
                whileHover={{ y: -5 }}
              >
                <XIcon className="size-6" />
              </motion.a>
            )}
            {site.social.instagram && (
              <motion.a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element glass-morphism flex size-16 items-center justify-center rounded-2xl text-white/80 transition-all hover:text-white hover:scale-110"
                aria-label="Instagram"
                data-cursor="pointer"
                whileHover={{ y: -5 }}
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            )}
            {site.social.tiktok && (
              <motion.a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element glass-morphism flex size-16 items-center justify-center rounded-2xl text-white/80 transition-all hover:text-white hover:scale-110"
                aria-label="TikTok"
                data-cursor="pointer"
                whileHover={{ y: -5 }}
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </motion.a>
            )}
            {site.social.youtube && (
              <motion.a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element glass-morphism flex size-16 items-center justify-center rounded-2xl text-white/80 transition-all hover:text-white hover:scale-110"
                aria-label="YouTube"
                data-cursor="pointer"
                whileHover={{ y: -5 }}
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            )}
            {site.social.facebook && (
              <motion.a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element glass-morphism flex size-16 items-center justify-center rounded-2xl text-white/80 transition-all hover:text-white hover:scale-110"
                aria-label="Facebook"
                data-cursor="pointer"
                whileHover={{ y: -5 }}
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            )}
            {site.social.whatsapp && (
              <motion.a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element glass-morphism flex size-16 items-center justify-center rounded-2xl text-white/80 transition-all hover:text-white hover:scale-110"
                aria-label="WhatsApp"
                data-cursor="pointer"
                whileHover={{ y: -5 }}
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <LinkButton 
              to="/connect" 
              variant="secondary" 
              size="lg" 
              className="glass-morphism text-white border-white/30 hover:bg-white/20 interactive-element"
              data-cursor="pointer"
            >
              <Heart className="size-5 mr-2" />
              All links & contact info
              <ArrowRight className="size-5 ml-2" />
            </LinkButton>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Redesigned */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(129,140,248,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_80%_100%,rgba(251,146,60,0.15),transparent)]" />
        
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 20, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <Crown className="size-10 text-white" />
              </div>
            </motion.div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-8">
              Ready to join the{' '}
              <span className="gradient-text">Republic?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you're a brand looking to advertise or a creator seeking promotion,{' '}
              <span className="font-bold text-white">the Republic welcomes you</span>.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={mailto({
                  to: site.partnershipsEmail,
                  subject: 'Partnership Inquiry - B.O.D Republic',
                  body: 'Hi B.O.D Republic team,\n\nI\'d like to discuss a partnership opportunity.\n\nTell us about your brand/project:\n\nBudget range:\n\nTimeline:\n\nLet\'s create something amazing together!',
                })}
                className="btn-glow group inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 px-8 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 interactive-element"
                data-cursor="pointer"
              >
                <Sparkles className="size-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Campaign
                <ArrowRight className="size-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <LinkButton
                to="/community"
                variant="secondary"
                size="lg"
                className="min-h-16 px-8 glass-morphism text-white border-white/30 hover:bg-white/20 text-lg font-semibold interactive-element"
                data-cursor="pointer"
              >
                <Users className="size-6 mr-2" />
                Explore Community
              </LinkButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}