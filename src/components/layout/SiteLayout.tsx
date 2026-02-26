import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function SiteLayout() {
  return (
    <div className="min-h-dvh bg-slate-50">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

