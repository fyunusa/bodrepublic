import { Navigate, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from './context/ThemeContext'
import { CustomCursor } from './components/CustomCursor'
import { SiteLayout } from './components/layout/SiteLayout'
import { About } from './pages/About'
import { Advertise } from './pages/Advertise'
import { Community } from './pages/Community'
import { ComingSoon } from './pages/ComingSoon'
import { Connect } from './pages/Connect'
import { Home } from './pages/Home'
import { Media } from './pages/Media'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/media" element={<Media />} />
          <Route
            path="/shop"
            element={<ComingSoon title="Merch & Shop" subtitle="Drops, collections, and digital products." />}
          />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/connect" element={<Connect />} />

          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
