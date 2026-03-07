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

  const footerStyles = {
    footer: {
      borderTop: '1px solid var(--border-color)',
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-darker) 100%)',
      padding: '4rem 2rem',
    } as React.CSSProperties,
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    } as React.CSSProperties,
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem',
    } as React.CSSProperties,
    brandColumn: {
      gridColumn: 'span 1',
    } as React.CSSProperties,
    brandTitle: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    } as React.CSSProperties,
    brandDescription: {
      fontSize: '0.95rem',
      color: 'var(--text-secondary)',
      lineHeight: '1.6',
      maxWidth: '300px',
    } as React.CSSProperties,
    columnTitle: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.85rem',
      fontWeight: 600,
      color: 'var(--primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '1.5rem',
      textShadow: '0 0 10px rgba(0, 240, 255, 0.2)',
    } as React.CSSProperties,
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    } as React.CSSProperties,
    link: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
    } as React.CSSProperties,
    linkHover: {
      color: 'var(--primary)',
      transform: 'translateX(4px)',
      textShadow: '0 0 8px rgba(0, 240, 255, 0.3)',
    } as React.CSSProperties,
    divider: {
      borderTop: '1px solid var(--border-color)',
      marginTop: '3rem',
      paddingTop: '2rem',
    } as React.CSSProperties,
    bottomSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      alignItems: 'center',
    } as React.CSSProperties,
    copyright: {
      fontSize: '0.85rem',
      color: 'var(--text-tertiary)',
    } as React.CSSProperties,
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    } as React.CSSProperties,
    icon: {
      width: '18px',
      height: '18px',
    } as React.CSSProperties,
  }

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        {/* Main Footer Content */}
        <div style={footerStyles.gridContainer}>
          {/* Brand Column */}
          <div style={footerStyles.brandColumn}>
            <h3 style={footerStyles.brandTitle}>{site.name}</h3>
            <p style={footerStyles.brandDescription}>
              B.O.D Republic is a community-driven platform for authentic engagement and connection. Building meaningful relationships through humor and positivity.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={footerStyles.columnTitle}>{category}</h4>
              <ul style={footerStyles.linkList}>
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      style={({ isActive }) => ({
                        ...footerStyles.link,
                        ...(isActive ? footerStyles.linkHover : {}),
                      })}
                      onMouseEnter={(e) => {
                        Object.assign(e.currentTarget.style, footerStyles.linkHover)
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)'
                        e.currentTarget.style.transform = 'translateX(0)'
                        e.currentTarget.style.textShadow = 'none'
                      }}
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
            <h4 style={footerStyles.columnTitle}>Connect</h4>
            <ul style={footerStyles.linkList}>
              <li>
                <a
                  href={`mailto:${site.partnershipsEmail}`}
                  style={footerStyles.link}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, footerStyles.linkHover)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.textShadow = 'none'
                  }}
                >
                  <Mail style={footerStyles.icon} />
                  {site.partnershipsEmail}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={footerStyles.link}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, footerStyles.linkHover)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.textShadow = 'none'
                  }}
                >
                  <Twitter style={footerStyles.icon} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={footerStyles.link}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, footerStyles.linkHover)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.textShadow = 'none'
                  }}
                >
                  <Linkedin style={footerStyles.icon} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={footerStyles.divider}>
          <div style={footerStyles.bottomSection}>
            <p style={footerStyles.copyright}>
              © {year} {site.name}. All rights reserved. Fear is an illusion.
            </p>
            <div style={footerStyles.socialLinks}>
              <NavLink 
                to="/" 
                style={footerStyles.link}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, footerStyles.linkHover)
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.textShadow = 'none'
                }}
              >
                Privacy Policy
              </NavLink>
              <span style={{ color: 'var(--border-color)' }}>•</span>
              <NavLink 
                to="/" 
                style={footerStyles.link}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, footerStyles.linkHover)
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.textShadow = 'none'
                }}
              >
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
