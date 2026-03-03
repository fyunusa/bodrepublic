import { motion } from 'framer-motion'
import { ArrowRight, Play, Image, TrendingUp, Download, Eye, Share2 } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { site, mailto } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

export function Media() {
  const location = useLocation()

  useDocumentHead({
    title: 'Content & Media Archive - B.O.D Republic',
    description: 'Explore our curated collection of threads, memes, highlight reels, and premium content from the B.O.D Republic community.',
    path: location.pathname,
  })

  const contentTypes = [
    {
      icon: TrendingUp,
      title: 'Viral Threads',
      description: 'Curated collection of our most engaging and impactful social media threads.',
      stats: '2.5M+ Views',
      color: 'bg-gray-100'
    },
    {
      icon: Image,
      title: 'Meme Library',
      description: 'Premium memes and visual content that drives engagement and brand awareness.',
      stats: '500+ Assets',
      color: 'bg-gray-100'
    },
    {
      icon: Play,
      title: 'Highlight Reels',
      description: 'Professional video content showcasing successful campaigns and events.',
      stats: '50+ Videos',
      color: 'bg-gray-100'
    },
    {
      icon: Download,
      title: 'Brand Assets',
      description: 'High-quality logos, graphics, and branded content for partners.',
      stats: '200+ Assets',
      color: 'bg-gray-100'
    }
  ]

  const featuredContent = [
    {
      type: 'Video',
      title: '2024 Campaign Highlights',
      description: 'A compilation of our most successful advertising campaigns and their impact.',
      engagement: '1.2M views',
      date: 'March 2024'
    },
    {
      type: 'Article',
      title: 'The Future of Digital Advertising',
      description: 'Insights and predictions from our team on industry trends and innovations.',
      engagement: '50K reads',
      date: 'February 2024'
    },
    {
      type: 'Infographic',
      title: 'Community Growth Report',
      description: 'Visual breakdown of our community expansion and key milestones.',
      engagement: '200K shares',
      date: 'January 2024'
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
              Content & Media Archive
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our curated collection of threads, memes, highlight reels, and premium content that drives engagement.
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
                    subject: 'Media Access Request - B.O.D Republic',
                    body: 'Hi B.O.D Republic team,\n\nI\'m interested in accessing your media archive and content library.\n\n[Tell us about your needs and intended use]\n\nThank you!'
                  })
                }}
              >
                Request Access
                <ArrowRight className="size-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="interactive-element"
                data-cursor="pointer"
                onClick={() => document.getElementById('content-types')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Content
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Types */}
      <section id="content-types" className="py-20 px-4">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Content Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different types of content available in our comprehensive media archive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card p-6 text-center group interactive-element"
                data-cursor="pointer"
              >
                <div className="mb-4 flex justify-center">
                  <div className={`w-16 h-16 ${type.color} rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300`}>
                    <type.icon className="size-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {type.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
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
              Featured Content
            </h2>
            <p className="text-xl text-gray-600">
              Check out our most popular and impactful content pieces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card overflow-hidden group interactive-element"
                data-cursor="pointer"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                  <div className="text-6xl text-gray-400">
                    {content.type === 'Video' ? '🎥' : content.type === 'Article' ? '📄' : '📊'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {content.type} • {content.date}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{content.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="size-4" />
                      {content.engagement}
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="size-4" />
                      Share
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="modern-card p-12 text-center"
          >
            <div className="text-6xl mb-6">📋</div>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Content Usage Guidelines
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our media archive is available for partners and community members. Please review our usage guidelines and licensing terms.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              {[
                {
                  title: 'Attribution Required',
                  description: 'Credit B.O.D Republic when using our content'
                },
                {
                  title: 'Commercial Use',
                  description: 'Available for approved partners and campaigns'
                },
                {
                  title: 'Quality Standards',
                  description: 'Maintain brand integrity in all usage'
                }
              ].map((guideline, index) => (
                <div key={guideline.title} className="text-center">
                  <h4 className="font-bold text-gray-900 mb-2">{guideline.title}</h4>
                  <p className="text-sm text-gray-600">{guideline.description}</p>
                </div>
              ))}
            </div>
            
            <Button
              variant="primary"
              size="lg"
              className="interactive-element"
              data-cursor="pointer"
              onClick={() => {
                window.location.href = mailto({
                  to: site.partnershipsEmail,
                  subject: 'Content Licensing Inquiry - B.O.D Republic',
                  body: 'Hi B.O.D Republic team,\n\nI\'m interested in licensing content from your media archive.\n\nProject details:\n- Type of content needed: [specify]\n- Intended use: [commercial/educational/etc.]\n- Timeline: [when do you need it]\n- Additional requirements: [any special needs]\n\nThank you!'
                })
              }}
            >
              Get Content License
              <ArrowRight className="size-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}