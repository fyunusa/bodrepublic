import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowRight, Clock, Hourglass, Rocket, Sparkles, Star, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Button } from '../components/ui/Button'
import { cn } from '../lib/cn'
import { mailto, site } from '../config/site'
import { useDocumentHead } from '../lib/useDocumentHead'

type ComingSoonProps = {
  title: string
  subtitle?: string
}

export function ComingSoon({ title, subtitle }: ComingSoonProps) {
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Animated counter
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const animation = animate(count, 100, {
      duration: 2,
      ease: 'easeOut',
    })
    return animation.stop
  }, [count])

  useDocumentHead({
    title,
    description: subtitle ?? `This page is coming soon. B.O.D Republic — ${site.tagline}`,
    path: location.pathname,
    noIndex: true,
  })

  const hint = useMemo(() => {
    const params = new URLSearchParams(location.search)
    const feature = params.get('feature')
    if (!feature) return null
    return feature
      .split('-')
      .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
      .join(' ')
  }, [location.search])

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true)
      window.location.href = mailto({
        to: site.partnershipsEmail,
        subject: `Notify me about: ${title}`,
        body: `Please notify me when this is live.\n\nEmail: ${email}\nPage: ${location.pathname}\nFeature: ${hint || 'General interest'}\n\nI'm excited to see what's coming!`,
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 hero-gradient">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animated-bg absolute inset-0 opacity-40" />
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 text-6xl opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🚀
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-5xl opacity-30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        >
          ⚡
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16 text-4xl opacity-30"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          ✨
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-16 text-5xl opacity-30"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -25, 25, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 0.5 }}
        >
          💫
        </motion.div>
      </div>

      <div className="container relative max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: 'spring', 
            stiffness: 150,
            damping: 20 
          }}
          className="modern-card relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 opacity-50">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(129, 140, 248, 0.1), rgba(251, 146, 60, 0.1))',
                  'linear-gradient(45deg, rgba(251, 146, 60, 0.1), rgba(168, 85, 247, 0.1))',
                  'linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(52, 211, 153, 0.1))',
                  'linear-gradient(45deg, rgba(52, 211, 153, 0.1), rgba(129, 140, 248, 0.1))',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full glass-morphism px-6 py-3 mb-8"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Hourglass className="size-6 text-blue-500" />
              </motion.div>
              <span className="font-bold text-gray-800 uppercase tracking-wider">
                Coming Soon
              </span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="size-6 text-purple-500" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              <motion.span
                className="gradient-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                {title}
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle ?? 'This page is being crafted with care and attention to detail. Check back soon — the Republic is expanding with amazing new features.'}
            </motion.p>

            {hint && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="glass-morphism rounded-2xl p-4 mb-8 max-w-md mx-auto"
              >
                <p className="text-sm text-gray-600">
                  You tried to access:{' '}
                  <span className="font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded-lg">
                    {hint}
                  </span>
                </p>
              </motion.div>
            )}

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="size-6 text-blue-500" />
                <span className="font-bold text-gray-700">Development Progress</span>
                <Rocket className="size-6 text-orange-500" />
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Building something amazing...</span>
                  <motion.span className="text-sm font-bold text-blue-600">
                    {rounded}%
                  </motion.span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 2, ease: 'easeOut', delay: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Email Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="max-w-lg mx-auto"
            >
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
                <Star className="size-6 text-yellow-500" />
                Get Early Access
                <Star className="size-6 text-yellow-500" />
              </h3>
              
              <p className="text-gray-600 mb-6">
                Be the first to know when this feature launches. Join thousands of citizens waiting for updates!
              </p>
              
              {!isSubmitted ? (
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className={cn(
                        'w-full h-14 rounded-2xl border-2 border-gray-200 bg-white px-6 text-lg text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 focus:scale-105'
                      )}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSubmit()
                      }}
                    />
                    <motion.div
                      className="absolute right-3 top-3 h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap className="size-4 text-white" />
                    </motion.div>
                  </div>
                  
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    size="lg"
                    className="btn-glow w-full h-14 text-lg font-bold interactive-element group"
                    disabled={!email}
                    data-cursor="pointer"
                  >
                    <motion.span
                      animate={{ rotate: email ? [0, 15, -15, 0] : 0 }}
                      transition={{ duration: 0.5, repeat: email ? Infinity : 0, repeatDelay: 2 }}
                    >
                      <Sparkles className="size-6 mr-2" />
                    </motion.span>
                    Notify Me When It's Ready
                    <ArrowRight className="size-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-morphism p-6 rounded-2xl text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h4 className="font-bold text-xl text-green-700 mb-2">You're on the list!</h4>
                  <p className="text-gray-600">We'll email you the moment this feature goes live.</p>
                </motion.div>
              )}
            </motion.div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="inline-block text-3xl mb-2"
                  >
                    ⚡
                  </motion.div>
                  <p className="font-bold text-lg text-gray-800">Lightning Fast</p>
                  <p className="text-sm text-gray-600">Built for performance</p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block text-3xl mb-2"
                  >
                    💎
                  </motion.div>
                  <p className="font-bold text-lg text-gray-800">Premium Quality</p>
                  <p className="text-sm text-gray-600">Exceptionally crafted</p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0] 
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block text-3xl mb-2"
                  >
                    🚀
                  </motion.div>
                  <p className="font-bold text-lg text-gray-800">Game-Changing</p>
                  <p className="text-sm text-gray-600">Revolutionary features</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-center text-gray-600 mb-4">
                Want to get involved or have questions?
              </p>
              <a
                href={mailto({ 
                  to: site.partnershipsEmail, 
                  subject: `Question about: ${title}`,
                  body: `Hi B.O.D Republic team,\n\nI'm interested in learning more about "${title}".\n\n[Your message here]\n\nThanks!`
                })}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300 interactive-element"
                data-cursor="pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💬
                </motion.div>
                Contact Our Team
                <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}