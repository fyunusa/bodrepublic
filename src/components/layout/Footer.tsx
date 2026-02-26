import { NavLink } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

import { cn } from '../../lib/cn'
import { site } from '../../config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-zinc-200/80 bg-white">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="font-display text-lg font-extrabold tracking-tight text-zinc-900">
              B.O.D Republic
            </div>
            <p className="text-sm text-zinc-600">
              A movement built on positivity, a no-fear mindset, humor, and
              celebration energy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/connect">Connect</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/community">Community Hub</FooterLink>
            <FooterLink to="/media">Media Archive</FooterLink>
            <FooterLink to="/shop">Shop</FooterLink>
            <FooterLink to="/advertise">Advertise</FooterLink>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-zinc-800">Contact</div>
            <a
              href={`mailto:${site.email || site.partnershipsEmail}`}
              className={cn(
                'no-underline inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50/80 px-3 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-700',
              )}
            >
              <Mail className="size-4 text-brand-500" aria-hidden />
              {site.email || site.partnershipsEmail}
            </a>
            {site.phone ? (
              <a
                href={`tel:${String(site.phone).replace(/\s/g, '')}`}
                className="no-underline inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50/80 px-3 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:border-brand-200 hover:bg-brand-50/50"
              >
                <Phone className="size-4 text-brand-500" aria-hidden />
                {site.phone}
              </a>
            ) : null}
            <NavLink
              to="/connect"
              className="no-underline text-sm font-medium text-brand-600 hover:underline"
            >
              All socials &amp; handles →
            </NavLink>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} B.O.D Republic. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400">"{site.tagline}"</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ to, children }: { to: string; children: string }) {
  return (
    <NavLink
      to={to}
      className="no-underline rounded-xl px-2 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
    >
      {children}
    </NavLink>
  )
}
