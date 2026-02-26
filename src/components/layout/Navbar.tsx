import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Crown, Menu, X } from 'lucide-react'

import { cn } from '../../lib/cn'
import { LinkButton } from '../ui/LinkButton'
import { site } from '../../config/site'

type NavItem = { label: string; to: string; soon?: boolean }

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const items = useMemo<NavItem[]>(
    () => [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about', soon: true },
      { label: 'Community Hub', to: '/community', soon: true },
      { label: 'Media Archive', to: '/media', soon: true },
      { label: 'Shop', to: '/shop', soon: true },
      { label: 'Advertise', to: '/advertise', soon: true },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="no-underline inline-flex items-center gap-2 rounded-xl px-2 py-1 text-slate-900 hover:bg-slate-100"
            onClick={() => setMobileOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-xl border border-fuchsia-100 bg-fuchsia-50 shadow-sm">
              <Crown className="size-5 text-fuchsia-500" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-tight">
                {site.name}
              </span>
              <span className="block text-xs text-slate-500">
                {site.tagline}
              </span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'no-underline relative rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                    isActive && 'text-slate-900 bg-slate-100',
                  )
                }
              >
                {item.label}
                {item.soon ? (
                  <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white/60">
                    SOON
                  </span>
                ) : null}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LinkButton
              to="/community?feature=birthday-twin"
              variant="ghost"
              size="md"
              className="border border-white/10"
            >
              Find your Birthday Twin
            </LinkButton>
            <LinkButton to="/community" variant="primary" size="md">
              Join the Republic
            </LinkButton>
          </div>

          <button
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>

        {mobileOpen ? (
          <div className="pb-4 lg:hidden">
            <div className="surface p-2">
              <div className="grid gap-1">
                {items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'no-underline flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100',
                        isActive && 'bg-slate-100 text-slate-900',
                      )
                    }
                  >
                    <span>{item.label}</span>
                    {item.soon ? (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-slate-500">
                        SOON
                      </span>
                    ) : null}
                  </NavLink>
                ))}
              </div>

              <div className="mt-3 grid gap-2 px-1 pb-1">
                <LinkButton
                  to="/community?feature=birthday-twin"
                  variant="secondary"
                  size="md"
                  onClick={() => setMobileOpen(false)}
                >
                  Find your Birthday Twin
                </LinkButton>
                <LinkButton
                  to="/community"
                  variant="primary"
                  size="md"
                  onClick={() => setMobileOpen(false)}
                >
                  Join the Republic
                </LinkButton>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}

