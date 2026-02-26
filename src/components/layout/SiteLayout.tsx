import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function SiteLayout() {
  return (
    <div className="min-h-dvh bg-slate-950">
      <Background />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(217,70,239,0.20),transparent_55%),radial-gradient(900px_circle_at_85%_20%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(900px_circle_at_40%_80%,rgba(34,197,94,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0),rgba(2,6,23,1))]" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />
    </div>
  )
}

