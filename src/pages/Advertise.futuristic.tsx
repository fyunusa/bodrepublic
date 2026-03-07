import { motion } from 'framer-motion'
import { ArrowRight, Target, BarChart3, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { site, mailto } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

export function Advertise() {
  const location = useLocation()

  useDocumentHead({
    title: 'Advertise with B.O.D Republic',
    description: 'Partner with B.O.D Republic for innovative advertising solutions. Reach engaged audiences through authentic content and community-driven campaigns.',
    path: location.pathname,
  })

  const services = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'AI-powered targeting reaches your exact audience with guaranteed engagement rates.',
      price: 'From $5,000'
    },
    {
      icon: Users,
      title: 'Community Integration',
      description: 'Authentic brand integration within our engaged community of industry professionals.',
      price: 'From $3,000'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time performance metrics and ROI optimization included with all plans.',
      price: 'Included'
    }
  ]

  const benefits = [
    { icon: CheckCircle, title: 'Verified Audience', description: 'Industry professionals and decision-makers' },
    { icon: TrendingUp, title: 'High Engagement', description: '3x higher than industry standards' },
    { icon: Zap, title: 'Fast Results', description: 'Meaningful results within first week' }
  ]

  return (
    <div style={styles.wrapper}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroGlow}></div>
        <div className="container" style={styles.heroContent}>
          <motion.h1
            style={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={styles.gradientText}>Advertise with B.O.D Republic</span>
          </motion.h1>
          <motion.p
            style={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Reach highly engaged professionals through AI-powered precision targeting and authentic community-driven campaigns.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = mailto({ to: site.partnershipsEmail, subject: 'Advertising Inquiry' })}
            >
              Schedule Demo <ArrowRight size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <div className="container">
          <div style={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                style={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={styles.benefitIcon}>
                  <benefit.icon size={28} />
                </div>
                <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                <p style={styles.benefitDesc}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <div className="container">
          <motion.h2
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Advertising Solutions
          </motion.h2>

          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                style={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div style={styles.serviceIcon}>
                  <service.icon size={32} />
                </div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.description}</p>
                <div style={styles.servicePrice}>{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div className="container" style={styles.ctaContent}>
          <motion.h2
            style={styles.ctaTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Launch Your Campaign?
          </motion.h2>
          <motion.button
            style={styles.ctaBtn}
            onClick={() => window.location.href = mailto({ to: site.partnershipsEmail })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
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

  heroSection: {
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '4rem 2rem',
  } as React.CSSProperties,

  heroGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)',
    top: '50%',
    right: '10%',
    transform: 'translateY(-50%)',
  } as React.CSSProperties,

  heroContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '800px',
  } as React.CSSProperties,

  heroTitle: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 900,
    marginBottom: '1.5rem',
    fontFamily: "var(--font-display)",
  } as React.CSSProperties,

  gradientText: {
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #8338ec, #ff006e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as React.CSSProperties,

  heroDescription: {
    fontSize: '1.125rem',
    color: '#b0b8d4',
    lineHeight: 1.8,
    marginBottom: '2rem',
  } as React.CSSProperties,

  benefitsSection: {
    padding: '4rem 2rem',
    background: 'rgba(15, 21, 53, 0.6)',
    borderTop: '1px solid rgba(0, 240, 255, 0.1)',
    borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
  } as React.CSSProperties,

  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  } as React.CSSProperties,

  benefitCard: {
    padding: '2rem',
    borderRadius: '12px',
    background: 'rgba(10, 14, 39, 0.6)',
    border: '1px solid rgba(0, 240, 255, 0.15)',
    textAlign: 'center',
  } as React.CSSProperties,

  benefitIcon: {
    color: '#00f0ff',
    marginBottom: '1rem',
  } as React.CSSProperties,

  benefitTitle: {
    fontSize: '1.125rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    fontFamily: "var(--font-display)",
  } as React.CSSProperties,

  benefitDesc: {
    color: '#b0b8d4',
    fontSize: '0.9rem',
  } as React.CSSProperties,

  servicesSection: {
    padding: '6rem 2rem',
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 900,
    textAlign: 'center',
    marginBottom: '3rem',
    fontFamily: "var(--font-display)",
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #8338ec)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as React.CSSProperties,

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    color: '#00f0ff',
    marginBottom: '1.5rem',
  } as React.CSSProperties,

  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    fontFamily: "var(--font-display)",
  } as React.CSSProperties,

  serviceDesc: {
    color: '#b0b8d4',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  } as React.CSSProperties,

  servicePrice: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#00f0ff',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(0, 240, 255, 0.15)',
  } as React.CSSProperties,

  ctaSection: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(131, 56, 236, 0.1) 100%)',
    borderTop: '1px solid rgba(0, 240, 255, 0.2)',
  } as React.CSSProperties,

  ctaContent: {
    textAlign: 'center',
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 900,
    marginBottom: '2rem',
    fontFamily: "var(--font-display)",
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #ff006e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as React.CSSProperties,

  ctaBtn: {
    padding: '16px 40px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #00f0ff, #8338ec)',
    color: '#000',
    border: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
  } as React.CSSProperties,
}
