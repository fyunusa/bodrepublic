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
      { label: 'Connect', to: '/connect' },
      { label: 'About', to: '/about', soon: true },
      { label: 'Community Hub', to: '/community', soon: true },
      { label: 'Media Archive', to: '/media', soon: true },
      { label: 'Shop', to: '/shop', soon: true },
      { label: 'Advertise', to: '/advertise', soon: true },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="no-underline inline-flex items-center gap-2.5 rounded-xl px-2 py-1.5 text-zinc-900 transition-colors hover:bg-zinc-100"
            onClick={() => setMobileOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-xl bg-brand-100 text-brand-600 shadow-sm">
              <Crown className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-extrabold tracking-tight">
                {site.name}
              </span>
              <span className="block text-xs text-zinc-500">{site.tagline}</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'no-underline relative rounded-xl px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900',
                    isActive && 'text-brand-600 bg-brand-50 hover:bg-brand-50 hover:text-brand-700',
                  )
                }
              >
                {item.label}
                {item.soon ? (
                  <span className="ml-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-zinc-500">
                    SOON
                  </span>
                ) : null}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LinkButton to="/connect" variant="secondary" size="md">
              Connect
            </LinkButton>
            <LinkButton to="/community" variant="primary" size="md">
              Join the Republic
            </LinkButton>
          </div>

          <button
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-50"
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
            <div className="surface p-3">
              <div className="grid gap-0.5">
                {items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'no-underline flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100',
                        isActive && 'bg-brand-50 text-brand-700 hover:bg-brand-50',
                      )
                    }
                  >
                    <span>{item.label}</span>
                    {item.soon ? (
                      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-zinc-500">
                        SOON
                      </span>
                    ) : null}
                  </NavLink>
                ))}
              </div>
              <div className="mt-4 grid gap-2 border-t border-zinc-100 pt-4">
                <LinkButton
                  to="/connect"
                  variant="secondary"
                  size="md"
                  onClick={() => setMobileOpen(false)}
                >
                  Connect
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
