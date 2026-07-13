import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 text-center">
      <p className="section-label mb-3">404</p>
      <h1 className="font-display font-bold text-4xl text-heading mb-4">Page not found</h1>
      <p className="text-body mb-8">This URL doesn't exist. Maybe it was moved or deleted.</p>
      <a href="/" className="font-mono text-sm text-cyan hover:underline">← Go home</a>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/work"       element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/about"      element={<About />} />
            <Route path="/contact"    element={<Contact />} />
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
