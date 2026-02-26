import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { LinkButton } from '../components/ui/LinkButton'

export function NotFound() {
  return (
    <div className="container py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="surface p-8 sm:p-10"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">404</div>
          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">
            The Republic doesn’t have that route (yet). Head back home.
          </p>
          <div className="mt-6">
            <LinkButton to="/" variant="primary" size="lg">
              Back to Home <ArrowRight className="size-4" aria-hidden />
            </LinkButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
