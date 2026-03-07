import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, Target, Globe, Sparkles } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { site, mailto } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

export function Home() {
  const location = useLocation()

  useDocumentHead({
    title: `${site.name} — ${site.tagline}`,
    description: `${site.name}. ${site.tagline} The future of digital advertising and community engagement.`,
    path: location.pathname,
  })

  const features = [
    {
      icon: Target,
      title: 'Hyper-Targeted Campaigns',
      description: 'Precision AI-powered targeting that reaches exactly who matters.',
      color: '#00f0ff'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Live performance metrics and instant optimization insights.',
      color: '#ff006e'
    },
    {
      icon: Users,
      title: 'Engaged Community',
      description: 'Connect with 10K+ verified professionals worldwide.',
      color: '#ffd60a'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access audiences across 50+ countries instantly.',
      color: '#8338ec'
    }
  ]

  const stats = [
    { number: '10K+', label: 'Active Members' },
    { number: '500+', label: 'Partnerships' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Countries' }
  ]

  return (
    <div style={styles.wrapper}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroGlow1}></div>
        <div style={styles.heroGlow2}></div>
        <div className="container" style={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.heroContent}
          >
            <motion.div
              style={styles.badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span style={styles.badgeIcon}>◆</span>
              <span style={styles.badgeText}>Next-Gen Advertising Platform</span>
            </motion.div>

            <h1 style={styles.heroTitle}>
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={styles.gradientText}
              >
                Redefine Your Brand's Story
              </motion.span>
              <br />
              <span style={styles.subtitle}>in the Digital Age</span>
            </h1>

            <p style={styles.heroDescription}>
              Experience the future of advertising with AI-powered precision targeting, real-time analytics, and a vibrant community of industry leaders. Transform your campaigns into unforgettable experiences.
            </p>

            <div style={styles.heroButtons}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/advertise', '_self')}
                >
                  Launch Campaign <ArrowRight size={20} />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/community', '_self')}
                >
                  Join Community
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div className="container" style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              style={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div className="container">
          <motion.div
            style={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.sectionTitle}>Futuristic Features</h2>
            <p style={styles.sectionSubtitle}>Power-packed tools built for modern advertisers</p>
          </motion.div>

          <div style={styles.featureGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                style={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  borderColor: feature.color,
                  boxShadow: `0 0 30px ${feature.color}40`
                }}
              >
                <div style={{ ...styles.featureIcon, color: feature.color }}>
                  <feature.icon size={32} />
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <div className="container">
          <motion.div
            style={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.sectionTitle}>What We Offer</h2>
            <p style={styles.sectionSubtitle}>Comprehensive solutions for modern brands</p>
          </motion.div>

          <div style={styles.servicesGrid}>
            {[
              {
                title: 'Targeted Advertising',
                description: 'AI-powered precision targeting that maximizes ROI and engagement.',
                icon: Sparkles,
                link: '/advertise'
              },
              {
                title: 'Community Platform',
                description: 'Connect with engaged professionals in a thriving ecosystem.',
                icon: Users,
                link: '/community'
              },
              {
                title: 'Premium Content',
                description: 'Access curated media library and exclusive resources.',
                icon: Globe,
                link: '/media'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                style={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div style={styles.serviceIcon}>
                  <service.icon size={28} />
                </div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <motion.button
                  style={styles.serviceLink}
                  onClick={() => window.open(service.link, '_self')}
                  whileHover={{ x: 4 }}
                >
                  Explore <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaGlow}></div>
        <div className="container" style={styles.ctaContent}>
          <motion.h2
            style={styles.ctaTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Marketing?
          </motion.h2>
          <motion.p
            style={styles.ctaDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of innovative brands using B.O.D Republic to reach, engage, and convert their ideal audiences.
          </motion.p>

          <motion.div
            style={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open('/advertise', '_self')}
              >
                Get Started Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('/connect', '_self')}
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #050810 0%, #0a0e27 100%)',
    color: '#ffffff',
  } as React.CSSProperties,

  // Hero Section
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '6rem 2rem',
  } as React.CSSProperties,

  heroGlow1: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
    top: '-200px',
    right: '-200px',
    animation: 'float 6s ease-in-out infinite',
  } as React.CSSProperties,

  heroGlow2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(131, 56, 236, 0.15) 0%, transparent 70%)',
    bottom: '-150px',
    left: '-150px',
    animation: 'float 8s ease-in-out infinite 1s',
  } as React.CSSProperties,

  heroContainer: {
    position: 'relative',
    zIndex: 1,
  } as React.CSSProperties,

  heroContent: {
    textAlign: 'center',
    maxWidth: '900px',
  } as React.CSSProperties,

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '50px',
    background: 'rgba(0, 240, 255, 0.1)',
    border: '1px solid rgba(0, 240, 255, 0.3)',
    marginBottom: '2rem',
  } as React.CSSProperties,

  badgeIcon: {
    fontSize: '1.2rem',
    color: '#00f0ff',
  } as React.CSSProperties,

  badgeText: {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#00f0ff',
  } as React.CSSProperties,

  heroTitle: {
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: 900,
    lineHeight: 1.2,
    fontFamily: "var(--font-display)",
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  } as React.CSSProperties,

  gradientText: {
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #8338ec, #ff006e)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'block',
  } as React.CSSProperties,

  subtitle: {
    color: '#b0b8d4',
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: 900,
  } as React.CSSProperties,

  heroDescription: {
    fontSize: '1.125rem',
    color: '#b0b8d4',
    lineHeight: 1.8,
    marginBottom: '3rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  } as React.CSSProperties,

  heroButtons: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  } as React.CSSProperties,

  // Stats Section
  statsSection: {
    padding: '4rem 2rem',
    background: 'rgba(15, 21, 53, 0.6)',
    borderTop: '1px solid rgba(0, 240, 255, 0.1)',
    borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
  } as React.CSSProperties,

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  } as React.CSSProperties,

  statItem: {
    textAlign: 'center',
    padding: '2rem 1rem',
  } as React.CSSProperties,

  statNumber: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 900,
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #8338ec)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
    fontFamily: "var(--font-display)",
  } as React.CSSProperties,

  statLabel: {
    fontSize: '0.875rem',
    color: '#8a92ad',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
  } as React.CSSProperties,

  // Features Section
  featuresSection: {
    padding: '6rem 2rem',
  } as React.CSSProperties,

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 900,
    fontFamily: "var(--font-display)",
    marginBottom: '1rem',
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #8338ec)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as React.CSSProperties,

  sectionSubtitle: {
    fontSize: '1.125rem',
    color: '#b0b8d4',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  } as React.CSSProperties,

  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  } as React.CSSProperties,

  featureCard: {
    padding: '2rem',
    borderRadius: '16px',
    background: 'rgba(15, 21, 53, 0.6)',
    border: '1px solid rgba(0, 240, 255, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  } as React.CSSProperties,

  featureIcon: {
    fontSize: '2rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    background: 'rgba(0, 240, 255, 0.1)',
  } as React.CSSProperties,

  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    fontFamily: "var(--font-display)",
  } as React.CSSProperties,

  featureDescription: {
    fontSize: '0.95rem',
    color: '#b0b8d4',
    lineHeight: 1.6,
  } as React.CSSProperties,

  // Services Section
  servicesSection: {
    padding: '6rem 2rem',
    background: 'rgba(10, 14, 39, 0.8)',
    borderTop: '1px solid rgba(0, 240, 255, 0.1)',
  } as React.CSSProperties,

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  } as React.CSSProperties,

  serviceCard: {
    padding: '2.5rem',
    borderRadius: '16px',
    background: 'linear-gradient(145deg, rgba(15, 21, 53, 0.8) 0%, rgba(10, 14, 39, 0.6) 100%)',
    border: '1px solid rgba(0, 240, 255, 0.15)',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  serviceIcon: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    background: 'rgba(0, 240, 255, 0.1)',
    color: '#00f0ff',
    marginBottom: '1.5rem',
  } as React.CSSProperties,

  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    fontFamily: "var(--font-display)",
  } as React.CSSProperties,

  serviceDescription: {
    color: '#b0b8d4',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  } as React.CSSProperties,

  serviceLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#00f0ff',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  // CTA Section
  ctaSection: {
    position: 'relative',
    padding: '6rem 2rem',
    overflow: 'hidden',
  } as React.CSSProperties,

  ctaGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  } as React.CSSProperties,

  ctaContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '800px',
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 900,
    fontFamily: "var(--font-display)",
    marginBottom: '1.5rem',
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #8338ec, #ff006e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as React.CSSProperties,

  ctaDescription: {
    fontSize: '1.125rem',
    color: '#b0b8d4',
    lineHeight: 1.8,
    marginBottom: '2rem',
  } as React.CSSProperties,

  ctaButtons: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  } as React.CSSProperties,
}
