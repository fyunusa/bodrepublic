import { NavLink } from 'react-router-dom'
import { Mail, Linkedin, Twitter } from 'lucide-react'

import { site } from '../../config/site'

export function Footer() {
  const year = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { label: 'About', to: '/about' },
      { label: 'Community', to: '/community' },
      { label: 'Media', to: '/media' },
    ],
    Services: [
      { label: 'Advertise', to: '/advertise' },
      { label: 'Connect', to: '/connect' },
      { label: 'Shop', to: '/shop' },
    ],
  }

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="container py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-5 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">
              {site.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              The next generation of advertising and community engagement. Building authentic connections between brands and audiences.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.partnershipsEmail}`}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors no-underline flex items-center gap-2"
                >
                  <Mail className="size-4" />
                  {site.partnershipsEmail}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors no-underline flex items-center gap-2"
                >
                  <Twitter className="size-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors no-underline flex items-center gap-2"
                >
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <NavLink to="/" className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors no-underline">
              Privacy Policy
            </NavLink>
            <NavLink to="/" className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors no-underline">
              Terms of Service
            </NavLink>
            <p className="text-gray-500 dark:text-gray-500">"{site.tagline}"</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
