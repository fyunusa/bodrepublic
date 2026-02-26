import { NavLink } from 'react-router-dom'
import { Mail } from 'lucide-react'

import { cn } from '../../lib/cn'
import { site } from '../../config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="text-lg font-extrabold tracking-tight">
              B.O.D Republic
            </div>
            <p className="text-sm text-slate-600">
              A movement built on positivity, a no-fear mindset, humor, and
              birthday-level celebration energy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/community">Community Hub</FooterLink>
            <FooterLink to="/media">Media Archive</FooterLink>
            <FooterLink to="/shop">Shop</FooterLink>
            <FooterLink to="/advertise">Advertise</FooterLink>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-800">
              Brand partnerships
            </div>
            <a
              href={`mailto:${site.partnershipsEmail}`}
              className={cn(
                'no-underline inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50',
              )}
            >
              <Mail className="size-4 text-fuchsia-500" aria-hidden />
              {site.partnershipsEmail}
            </a>
            <p className="text-xs text-slate-500">
              (Email is a placeholder — swap to the client’s real contact.)
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} B.O.D Republic. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">“Fear is an illusion.”</span>
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
      className="no-underline rounded-xl px-2 py-1 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </NavLink>
  )
}

