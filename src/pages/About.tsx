import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, Award, Globe2 } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { site, mailto } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

export function About() {
  const location = useLocation()

  useDocumentHead({
    title: 'About B.O.D Republic',
    description: 'Learn about B.O.D Republic - the story, mission, and our vision for building the future of digital community and advertising.',
    path: location.pathname,
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-black leading-tight gradient-text mb-6">
              About B.O.D Republic
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building the future of digital community through innovative advertising, authentic content, and meaningful connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  B.O.D Republic was born from a vision to transform how brands connect with audiences in the digital age. We recognized the need for authentic, engaging advertising that respects both creators and consumers.
                </p>
                <p>
                  Founded by industry veterans who understood the gaps in traditional advertising, we set out to build a platform that prioritizes quality content, genuine community engagement, and measurable results.
                </p>
                <p>
                  Today, we're proud to be at the forefront of innovative digital marketing, helping brands tell their stories in ways that truly resonate with their target audiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="modern-card p-8 text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Est. 2024</h3>
                <p className="text-gray-600">Building tomorrow's advertising landscape</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to revolutionizing digital advertising through innovation, authenticity, and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Purpose-Driven',
                description: 'Every campaign serves a meaningful purpose and creates genuine value for audiences.'
              },
              {
                icon: Users,
                title: 'Community-First',
                description: 'We build authentic communities where brands and audiences connect naturally.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We deliver exceptional results through innovation and attention to detail.'
              },
              {
                icon: Globe2,
                title: 'Global Impact',
                description: 'Our platform connects brands with audiences across cultures and borders.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card p-6 text-center group interactive-element"
                data-cursor="pointer"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                    <value.icon className="size-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Built by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team combines decades of experience in advertising, technology, and community building to deliver exceptional results.
            </p>
            
            <div className="modern-card p-12">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-gray-600 mb-8">
                Join hundreds of forward-thinking brands that trust B.O.D Republic to tell their stories and drive real results.
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
                      subject: 'Partnership Inquiry - B.O.D Republic',
                      body: 'Hi B.O.D Republic team,\n\nI\'m interested in learning more about partnership opportunities.\n\n[Please tell us about your brand and goals]\n\nLooking forward to connecting!'
                    })
                  }}
                >
                  Start Partnership
                  <ArrowRight className="size-5 ml-2" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="interactive-element"
                  data-cursor="pointer"
                  onClick={() => window.open('/advertise', '_self')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}