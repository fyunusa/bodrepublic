import { Navigate, Route, Routes } from 'react-router-dom'

import { SiteLayout } from './components/layout/SiteLayout'
import { ComingSoon } from './pages/ComingSoon'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/about"
          element={<ComingSoon title="About B.O.D" subtitle="The story, the mission, and the Republic’s code." />}
        />
        <Route
          path="/community"
          element={<ComingSoon title="Community Hub" subtitle="Citizen perks, games, and the Birthday Twin experience." />}
        />
        <Route
          path="/media"
          element={<ComingSoon title="Content / Media Archive" subtitle="Curated threads, memes, and highlight reels." />}
        />
        <Route
          path="/shop"
          element={<ComingSoon title="Merch & Shop" subtitle="Drops, collections, and digital products." />}
        />
        <Route
          path="/advertise"
          element={<ComingSoon title="Advertise with B.O.D" subtitle="Partnership options for brands and creators." />}
        />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
