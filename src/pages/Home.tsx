import { motion } from 'framer-motion'
import { ArrowRight, Users, BarChart3, Globe2, Zap, CheckCircle } from 'lucide-react'
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

  const benefits = [
    {
      icon: Users,
      title: 'Engaged Community',
      description: 'Access a verified network of 10,000+ industry professionals and decision-makers.'
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      description: 'Track campaign performance with detailed analytics and transparent reporting.'
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Connect with audiences across 50+ countries through our international network.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Launch campaigns in days instead of weeks with our streamlined process.'
    }
  ]

  const features = [
    {
      title: 'Targeted Advertising',
      description: 'Precision-targeted campaigns that reach your exact audience.',
      cta: 'Advertise with Us'
    },
    {
      title: 'Community Building',
      description: 'Build authentic relationships with engaged professionals.',
      cta: 'Join Community'
    },
    {
      title: 'Content Partners',
      description: 'Access premium media library with curated content.',
      cta: 'Explore Content'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl" />
        </div>

        <div className="container relative max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-8">
              <motion.span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="w-2 h-2 bg-gray-900 rounded-full" />
                The Future of Advertising
              </motion.span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-gray-900 mb-6">
              Build Authentic
              <br />
              <motion.span
                className="inline-block"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Connections
              </motion.span>
              <br />
              in Digital
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              B.O.D Republic connects brands with engaged professionals through innovative advertising, authentic community engagement, and measurable results.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open('/advertise', '_self')}
                className="interactive-element"
                data-cursor="pointer"
              >
                Start Advertising
                <ArrowRight className="size-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('/community', '_self')}
                className="interactive-element"
                data-cursor="pointer"
              >
                Join Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-200">
        <div className="container max-w-6xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { metric: '10K+', label: 'Active Members' },
              { metric: '500+', label: 'Partnerships' },
              { metric: '95%', label: 'Satisfaction' },
              { metric: '50+', label: 'Countries' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose B.O.D Republic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results through authentic engagement and professional expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start gap-4 h-full p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 interactive-element"
                  data-cursor="pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 transition-colors duration-300">
                    <benefit.icon className="size-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for modern advertising and community engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-lg transition-all duration-300 group interactive-element"
                data-cursor="pointer"
              >
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (feature.title === 'Community Building') {
                      window.open('/community', '_self')
                    } else if (feature.title === 'Content Partners') {
                      window.open('/media', '_self')
                    } else {
                      window.open('/advertise', '_self')
                    }
                  }}
                  className="inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {feature.cta}
                  <ArrowRight className="size-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Advertising?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join leading brands and agencies leveraging B.O.D Republic to reach engaged audiences and drive measurable results.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  window.location.href = mailto({
                    to: site.partnershipsEmail,
                    subject: 'Partnership Inquiry - B.O.D Republic',
                    body: 'Hi B.O.D Republic team,\n\nI\'m interested in learning more about partnership opportunities.\n\n[Your message]\n\nThank you!'
                  })
                }}
                className="interactive-element"
                data-cursor="pointer"
              >
                Schedule Demo
                <ArrowRight className="size-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('/advertise', '_self')}
                className="interactive-element"
                data-cursor="pointer"
              >
                View Pricing
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-6xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're looking to advertise, join our community, or explore partnerships, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                { label: 'Advertise', href: '/advertise' },
                { label: 'Community', href: '/community' },
                { label: 'Connect', href: '/connect' }
              ].map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => window.open(item.href, '_self')}
                  className="px-6 py-3 rounded-lg border border-gray-200 text-gray-900 font-medium hover:bg-gray-100 transition-colors interactive-element"
                  data-cursor="pointer"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}