import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  Youtube,
} from 'lucide-react'

import { site } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

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
  if (s.facebook && s.facebookHandle) {
    cards.push({
      key: 'facebook',
      label: 'Facebook',
      handle: s.facebookHandle,
      href: s.facebook,
      Icon: Facebook,
      color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    })
  }
  if (s.whatsapp && s.whatsappHandle) {
    cards.push({
      key: 'whatsapp',
      label: 'WhatsApp',
      handle: s.whatsappHandle,
      href: s.whatsapp,
      Icon: MessageCircle,
      color: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
    })
  }
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
  useDocumentHead({
    title: 'Connect',
    description: `Connect with B.O.D Republic. Email, phone, and social. ${site.tagline}`,
    path: '/connect',
  })

  const cards = socialCards()

  const styles = {
    wrapper: {
      position: 'relative' as const,
      minWidth: '0',
      width: '100%',
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 2rem',
    } as React.CSSProperties,
    headerContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center' as const,
    } as React.CSSProperties,
    title: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: '1rem',
    } as React.CSSProperties,
    subtitle: {
      marginTop: '0.75rem',
      color: 'var(--text-secondary)',
      fontSize: '1.1rem',
      lineHeight: '1.6',
    } as React.CSSProperties,
    cardsGrid: {
      maxWidth: '1000px',
      margin: '3rem auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
    } as React.CSSProperties,
    card: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between',
      minHeight: '140px',
      padding: '1.5rem',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      color: 'var(--text-primary)',
    } as React.CSSProperties,
    cardHover: {
      borderColor: 'var(--primary)',
      background: 'rgba(0, 240, 255, 0.05)',
      transform: 'translateY(-2px)',
      boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
    } as React.CSSProperties,
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    } as React.CSSProperties,
    iconBox: {
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))',
      color: 'var(--primary)',
      flexShrink: 0,
    } as React.CSSProperties,
    cardTitle: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: '0.25rem',
    } as React.CSSProperties,
    cardHandle: {
      fontSize: '0.9rem',
      color: 'var(--text-tertiary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap' as const,
    } as React.CSSProperties,
    cardAction: {
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: 500,
      color: 'var(--primary)',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,
    footer: {
      marginTop: '2rem',
      textAlign: 'center' as const,
      fontSize: '0.95rem',
      color: 'var(--text-secondary)',
    } as React.CSSProperties,
    footerLink: {
      color: 'var(--primary)',
      textDecoration: 'none',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    } as React.CSSProperties,
  }

  return (
    <div style={styles.wrapper}>
      <section style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.headerContainer}
        >
          <h1 style={styles.title}>
            Connect with B.O.D Republic
          </h1>
          <p style={styles.subtitle}>
            Get in touch through email, phone, or connect on social media.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={styles.cardsGrid}
        >
          <motion.a
            variants={item}
            href={site.email ? `mailto:${site.email}` : undefined}
            style={styles.card}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)'
              e.currentTarget.style.background = 'var(--bg-card)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={styles.cardHeader}>
              <span style={styles.iconBox}>
                <Mail size={24} aria-hidden />
              </span>
              <div>
                <div style={styles.cardTitle}>Email</div>
                <div style={styles.cardHandle}>{site.email || '—'}</div>
              </div>
            </div>
            <span style={styles.cardAction}>
              Send a message <ArrowUpRight size={16} />
            </span>
          </motion.a>

          {site.phone ? (
            <motion.a
              variants={item}
              href={`tel:${String(site.phone).replace(/\s/g, '')}`}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={styles.cardHeader}>
                <span style={styles.iconBox}>
                  <Phone size={24} aria-hidden />
                </span>
                <div>
                  <div style={styles.cardTitle}>Phone</div>
                  <div style={styles.cardHandle}>{site.phone}</div>
                </div>
              </div>
              <span style={styles.cardAction}>
                Call or text <ArrowUpRight size={16} />
              </span>
            </motion.a>
          ) : (
            <motion.div
              variants={item}
              style={{ ...styles.card, opacity: 0.5, cursor: 'default' }}
            >
              <div style={styles.cardHeader}>
                <span style={{ ...styles.iconBox, opacity: 0.5 }}>
                  <Phone size={24} aria-hidden />
                </span>
                <div>
                  <div style={styles.cardTitle}>Phone</div>
                  <div style={styles.cardHandle}>Coming soon</div>
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
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={styles.cardHeader}>
                <span style={styles.iconBox}>
                  <card.Icon size={24} aria-hidden />
                </span>
                <div>
                  <div style={styles.cardTitle}>{card.label}</div>
                  <div style={styles.cardHandle}>{card.handle}</div>
                </div>
              </div>
              <span style={styles.cardAction}>
                Follow <ArrowUpRight size={16} />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={styles.footer}
        >
          For partnerships:{' '}
          <a
            href={`mailto:${site.partnershipsEmail}`}
            style={styles.footerLink}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary)')}
          >
            {site.partnershipsEmail}
          </a>
        </motion.p>
      </section>
    </div>
  )
}
