import { Link } from 'react-router-dom'
import { about, contact } from '../data/projects'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Link to="/" className="font-display font-semibold text-heading hover:text-cyan transition-colors">
            {about.name}
          </Link>
          <p className="font-mono text-xs text-muted mt-1">
            PM · Data · Marketing · Web
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
            {[
              { to: '/', label: 'Home' },
              { to: '/work', label: 'Work' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="font-mono text-xs text-muted hover:text-body transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {about.name}
        </p>
      </div>
    </footer>
  )
}
