import { motion } from 'framer-motion'
import { ArrowRight, Users2, Trophy, Star, Zap, Gift, GamepadIcon } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { site, mailto } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

export function Community() {
  const location = useLocation()

  useDocumentHead({
    title: 'Community Hub - B.O.D Republic',
    description: 'Join the B.O.D Republic community. Access exclusive perks, participate in games, and connect with fellow citizens.',
    path: location.pathname,
  })

  const features = [
    {
      icon: Users2,
      title: 'Citizen Network',
      description: 'Connect with like-minded individuals and build meaningful professional relationships.',
      benefits: ['Exclusive networking events', 'Industry insights', 'Collaboration opportunities']
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description: 'Earn recognition and rewards for your contributions to the community.',
      benefits: ['Digital badges', 'Leaderboards', 'Special recognition']
    },
    {
      icon: Gift,
      title: 'Exclusive Perks',
      description: 'Access premium content, tools, and experiences available only to citizens.',
      benefits: ['Early access to features', 'Premium content', 'Special discounts']
    },
    {
      icon: GamepadIcon,
      title: 'Interactive Games',
      description: 'Participate in engaging challenges and competitions with your fellow citizens.',
      benefits: ['Weekly challenges', 'Team competitions', 'Prize giveaways']
    }
  ]

  const stats = [
    { number: '10K+', label: 'Active Citizens' },
    { number: '500+', label: 'Companies Connected' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Countries Represented' }
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
              Community Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Join thousands of citizens building the future of digital advertising and community engagement.
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
                    subject: 'Community Membership - B.O.D Republic',
                    body: 'Hi B.O.D Republic team,\n\nI\'m interested in joining the B.O.D Republic community.\n\n[Tell us about yourself and your interests]\n\nLooking forward to becoming a citizen!'
                  })
                }}
              >
                Join the Republic
                <ArrowRight className="size-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="interactive-element"
                data-cursor="pointer"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Benefits
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
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="modern-card p-6">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Citizen Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock exclusive features and opportunities when you become part of the B.O.D Republic community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card p-8 group interactive-element"
                data-cursor="pointer"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                    <feature.icon className="size-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="size-4 text-gray-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting started in the B.O.D Republic community is simple and rewarding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Apply to Join',
                description: 'Submit your application and tell us about your interests and goals.'
              },
              {
                step: '02',
                title: 'Get Verified',
                description: 'Our team reviews your application and welcomes you to the community.'
              },
              {
                step: '03',
                title: 'Start Connecting',
                description: 'Access exclusive features, connect with citizens, and start earning rewards.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="modern-card p-8">
                  <div className="text-4xl font-bold text-gray-300 mb-4">{step.step}</div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="modern-card p-12"
          >
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Ready to Become a Citizen?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our growing community of innovators, creators, and industry leaders shaping the future of digital advertising.
            </p>
            
            <Button
              variant="primary"
              size="lg"
              className="interactive-element"
              data-cursor="pointer"
              onClick={() => {
                window.location.href = mailto({
                  to: site.partnershipsEmail,
                  subject: 'Community Application - B.O.D Republic',
                  body: 'Hi B.O.D Republic team,\n\nI would like to apply for citizenship in the B.O.D Republic community.\n\nAbout me:\n- Name: [Your name]\n- Company/Role: [Your current role]\n- Interests: [What interests you about our community]\n- Goals: [What you hope to achieve]\n\nThank you for considering my application!'
                })
              }}
            >
              Apply for Citizenship
              <ArrowRight className="size-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}