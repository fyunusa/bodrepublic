import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'

import { cn } from '../../lib/cn'
import { LinkButton } from '../ui/LinkButton'
import { site } from '../../config/site'
import { useTheme } from '../../context/ThemeContext'

type NavItem = { label: string; to: string }

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const items = useMemo<NavItem[]>(
    () => [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Community', to: '/community' },
      { label: 'Media', to: '/media' },
      { label: 'Advertise', to: '/advertise' },
      { label: 'Connect', to: '/connect' },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="no-underline inline-flex items-center gap-3 text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-display text-lg font-bold tracking-tight">
              {site.name}
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'no-underline px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700',
                    isActive && 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center size-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="size-5" aria-hidden />
              ) : (
                <Sun className="size-5" aria-hidden />
              )}
            </button>
            <LinkButton to="/connect" variant="secondary" size="sm">
              Connect
            </LinkButton>
            <LinkButton to="/community" variant="primary" size="sm">
              Join Us
            </LinkButton>
          </div>

          <div className="lg:hidden inline-flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center size-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="size-5" aria-hidden />
              ) : (
                <Sun className="size-5" aria-hidden />
              )}
            </button>
            <button
              className="inline-flex size-10 items-center justify-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
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
        </div>

        {mobileOpen ? (
          <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <nav className="flex flex-col">
              {items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'no-underline border-b border-gray-100 dark:border-gray-800 px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white',
                      isActive && 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="border-t border-gray-200 dark:border-gray-800 p-4 space-y-2">
              <LinkButton
                to="/connect"
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Connect
              </LinkButton>
              <LinkButton
                to="/community"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Join Us
              </LinkButton>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
