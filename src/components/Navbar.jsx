import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { about, contact } from '../data/projects'

const navItems = [
  { to: '/',        label: 'Home',  end: true },
  { to: '/work',    label: 'Work',  end: false },
  { to: '/about',   label: 'About', end: true },
  { to: '/contact', label: 'Contact', end: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-canvas/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-display font-semibold text-heading tracking-tight hover:text-cyan transition-colors"
        >
          {about.name}
        </Link>

        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `font-mono text-sm px-3 py-1.5 rounded transition-colors ${
                    isActive ? 'text-cyan' : 'text-muted hover:text-body'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-sm ml-4 px-3 py-1.5 border border-border rounded text-body hover:border-cyan hover:text-cyan transition-colors"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 text-muted hover:text-body transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="font-mono text-2xl leading-none">{open ? '×' : '≡'}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-canvas-2" role="dialog" aria-label="Mobile menu">
          <ul className="flex flex-col px-6 py-4 gap-1" role="list">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `block font-mono text-sm py-2 transition-colors ${
                      isActive ? 'text-cyan' : 'text-muted hover:text-body'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-border">
              <a
                href={`mailto:${contact.email}`}
                className="block font-mono text-sm py-2 text-muted hover:text-body transition-colors"
              >
                Get in touch →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
