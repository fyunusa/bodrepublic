import { ArrowRight } from 'lucide-react'
import { LinkButton } from '../components/ui/LinkButton'

export function NotFound() {
  return (
    <div className="container pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <div className="surface p-8 sm:p-10">
          <div className="text-xs font-semibold text-white/60">404</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            The Republic doesn’t have that route (yet). Head back home.
          </p>
          <div className="mt-6">
            <LinkButton to="/" variant="primary" size="lg">
              Back to Home <ArrowRight className="size-4" aria-hidden />
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}

