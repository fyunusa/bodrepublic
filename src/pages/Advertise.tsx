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
      title: 'Targeted Campaigns',
      description: 'Precision-targeted advertising that reaches your ideal audience with guaranteed engagement rates.',
      features: ['Demographic targeting', 'Behavioral insights', 'Custom audience creation'],
      price: 'From $5,000'
    },
    {
      icon: Users,
      title: 'Community Integration',
      description: 'Authentic brand integration within our engaged community of industry professionals.',
      features: ['Native content placement', 'Community endorsements', 'Thought leadership'],
      price: 'From $3,000'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and insights to maximize your campaign ROI and effectiveness.',
      features: ['Real-time dashboard', 'Custom reporting', 'ROI optimization'],
      price: 'Included'
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Verified Audience',
      description: 'Our community consists of verified industry professionals and decision-makers.'
    },
    {
      icon: TrendingUp,
      title: 'High Engagement',
      description: 'Average engagement rates 3x higher than industry standards.'
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'See meaningful results within the first week of campaign launch.'
    }
  ]

  const caseStudies = [
    {
      client: 'Tech Startup',
      challenge: 'Generate leads for B2B SaaS platform',
      result: '300% increase in qualified leads',
      metric: '2.5x ROI'
    },
    {
      client: 'E-commerce Brand',
      challenge: 'Increase brand awareness among professionals',
      result: '500K+ impressions in 30 days',
      metric: '15% CTR'
    },
    {
      client: 'Consulting Firm',
      challenge: 'Establish thought leadership position',
      result: '50+ high-value connections made',
      metric: '90% retention'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-black leading-tight gradient-text mb-6">
              Advertise with B.O.D Republic
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Reach engaged professionals through authentic, community-driven advertising that delivers real results.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                className="interactive-element"
                data-cursor="pointer"
                onClick={() => {
                  window.location.href = mailto({
                    to: site.partnershipsEmail,
                    subject: 'Advertising Partnership - B.O.D Republic',
                    body: 'Hi B.O.D Republic team,\n\nI\'m interested in advertising with B.O.D Republic.\n\nCampaign details:\n- Company: [Your company name]\n- Industry: [Your industry]\n- Campaign goals: [What you want to achieve]\n- Budget range: [Estimated budget]\n- Timeline: [When you want to start]\n\nI\'d love to schedule a consultation to discuss how we can work together.\n\nThank you!'
                  })
                }}
              >
                Start Campaign
                <ArrowRight className="size-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="interactive-element"
                data-cursor="pointer"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { metric: '10K+', label: 'Active Professionals' },
              { metric: '95%', label: 'Client Satisfaction' },
              { metric: '3x', label: 'Above Industry CTR' },
              { metric: '50+', label: 'Successful Campaigns' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="modern-card p-6">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of advertising solutions designed for maximum impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card p-8 group interactive-element"
                data-cursor="pointer"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300 mb-4">
                    <service.icon className="size-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="size-4 text-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-xl font-bold text-gray-900">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Us
            </h2>
            <p className="text-xl text-gray-600">
              We deliver results that matter to your business goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card p-6 text-center group interactive-element"
                data-cursor="pointer"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                    <benefit.icon className="size-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real clients across different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card p-6 interactive-element"
                data-cursor="pointer"
              >
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {study.client}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-sm text-gray-600 mb-4">{study.challenge}</p>
                <h4 className="font-bold text-gray-900 mb-2">Result:</h4>
                <p className="text-sm text-gray-600 mb-4">{study.result}</p>
                <div className="text-2xl font-bold text-gray-900">{study.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="modern-card p-12"
          >
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Ready to Launch Your Campaign?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how B.O.D Republic can help you reach your advertising goals with our engaged community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="interactive-element"
                data-cursor="pointer"
                onClick={() => {
                  window.location.href = mailto({
                    to: site.partnershipsEmail,
                    subject: 'Campaign Consultation - B.O.D Republic',
                    body: 'Hi B.O.D Republic team,\n\nI\'d like to schedule a consultation for an advertising campaign.\n\nBrief overview:\n- Company: [Your company]\n- Industry: [Your industry]\n- Campaign objectives: [Your goals]\n- Target audience: [Who you want to reach]\n- Estimated budget: [Budget range]\n- Preferred start date: [Timeline]\n\nPlease let me know your availability for a consultation call.\n\nThank you!'
                  })
                }}
              >
                Schedule Consultation
                <ArrowRight className="size-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="interactive-element"
                data-cursor="pointer"
                onClick={() => {
                  window.location.href = mailto({
                    to: site.partnershipsEmail,
                    subject: 'Media Kit Request - B.O.D Republic',
                    body: 'Hi B.O.D Republic team,\n\nI\'d like to receive your media kit and advertising information.\n\nCompany: [Your company name]\nIndustry: [Your industry]\nContact: [Your name and title]\n\nThank you!'
                  })
                }}
              >
                Get Media Kit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}