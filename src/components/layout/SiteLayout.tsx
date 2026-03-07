import { Outlet } from 'react-router-dom'

import { JsonLd } from '../seo/JsonLd'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function SiteLayout() {
  const layoutStyle: React.CSSProperties = {
    minHeight: '100dvh',
    background: 'linear-gradient(135deg, var(--bg-darker) 0%, var(--bg-dark) 100%)',
    color: 'var(--text-primary)',
    transition: 'colors 0.3s duration-300',
    display: 'flex',
    flexDirection: 'column',
  }

  const backgroundGradientStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: -10,
    background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.12), transparent)',
    pointerEvents: 'none',
  }

  const mainStyle: React.CSSProperties = {
    position: 'relative',
    flex: 1,
  }

  return (
    <div style={layoutStyle}>
      <JsonLd />
      <div style={backgroundGradientStyle} />
      <Navbar />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
