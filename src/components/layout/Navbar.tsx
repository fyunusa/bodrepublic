import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

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
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <NavLink
          to="/"
          style={styles.logo}
          onClick={() => setMobileOpen(false)}
        >
          <span style={styles.logoText}>{site.name}</span>
        </NavLink>

        <nav style={styles.desktop}>
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                ...styles.navLink,
                color: isActive ? '#00f0ff' : '#b0b8d4',
                borderBottomColor: isActive ? '#00f0ff' : 'transparent',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={styles.rightSection}>
          <button
            onClick={toggleTheme}
            style={styles.themeBtn}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <NavLink to="/connect" style={styles.connectBtn} onClick={() => setMobileOpen(false)}>
            Connect
          </NavLink>
        </div>

        <button
          style={styles.menuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={styles.mobileMenu}>
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/connect" style={styles.mobileCTA} onClick={() => setMobileOpen(false)}>
            Connect
          </NavLink>
        </div>
      )}
    </header>
  )
}

const styles = {
  header: {
    position: 'sticky' as const,
    top: 0,
    zIndex: 40,
    backgroundColor: 'rgba(10, 14, 39, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
  } as React.CSSProperties,
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    color: '#ffffff',
  } as React.CSSProperties,
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: '#ffffff',
    cursor: 'pointer !important' as any,
    transition: 'opacity 0.3s ease',
  } as React.CSSProperties,
  logoText: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.25rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    backgroundImage: 'linear-gradient(135deg, #00f0ff, #8338ec)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as React.CSSProperties,
  desktop: {
    display: 'none',
  } as React.CSSProperties,
  navLink: {
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '8px 16px',
    borderBottom: '2px solid',
    transition: 'all 0.3s ease',
    cursor: 'pointer !important' as any,
  } as React.CSSProperties,
  rightSection: {
    display: 'none',
    alignItems: 'center',
    gap: '12px',
  } as React.CSSProperties,
  themeBtn: {
    width: '40px',
    height: '40px',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 240, 255, 0.05)',
    color: '#00f0ff',
    cursor: 'pointer !important' as any,
    transition: 'all 0.3s ease',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  connectBtn: {
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    border: '2px solid #00f0ff',
    color: '#00f0ff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.875rem',
    cursor: 'pointer !important' as any,
    transition: 'all 0.3s ease',
    display: 'inline-block',
  } as React.CSSProperties,
  menuBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#00f0ff',
    cursor: 'pointer !important' as any,
  } as React.CSSProperties,
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '1rem',
    borderTop: '1px solid rgba(0, 240, 255, 0.1)',
    backgroundColor: 'rgba(15, 21, 53, 0.6)',
  } as React.CSSProperties,
  mobileLink: {
    padding: '12px 16px',
    color: '#b0b8d4',
    textDecoration: 'none',
    fontSize: '0.875rem',
    cursor: 'pointer !important' as any,
    transition: 'color 0.3s ease',
  } as React.CSSProperties,
  mobileCTA: {
    padding: '12px 16px',
    margin: '8px 0 0 0',
    color: '#00f0ff',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 600,
    borderTop: '1px solid rgba(0, 240, 255, 0.1)',
    cursor: 'pointer !important' as any,
  } as React.CSSProperties,
}
