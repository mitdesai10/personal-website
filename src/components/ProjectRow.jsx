import { Link } from 'react-router-dom'
import { disciplines } from '../data/projects'

const DISC_MAP = Object.fromEntries(disciplines.map(d => [d.id, d]))

const STATUS_DOT = {
  shipped:       'bg-cyan',
  'in-progress': 'bg-amber',
  archived:      'bg-muted',
}

export default function ProjectRow({ project, index }) {
  const { slug, title, tagline, disciplines: discIds, status, year, role } = project

  return (
    <Link
      to={`/work/${slug}`}
      className="group grid grid-cols-[2rem_1fr] md:grid-cols-[2rem_1fr_auto] items-start gap-x-4 gap-y-2 py-5 border-b border-border hover:bg-canvas-2 px-4 -mx-4 rounded transition-colors"
      aria-label={`${title} — ${tagline}`}
    >
      {/* Index */}
      <span className="font-mono text-xs text-muted pt-0.5 tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Main content */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 mt-0.5 ${STATUS_DOT[status] ?? 'bg-muted'}`}
            aria-label={status}
          />
          <h3 className="font-display font-semibold text-heading group-hover:text-cyan transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-sm text-muted leading-relaxed">{tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {discIds.map(id => {
            const d = DISC_MAP[id]
            return d ? (
              <span key={id} className={d.color === 'cyan' ? 'tag-cyan' : 'tag-amber'}>
                {d.label}
              </span>
            ) : null
          })}
        </div>
      </div>

      {/* Meta */}
      <div className="hidden md:flex flex-col items-end gap-1 shrink-0 pt-0.5">
        <span className="font-mono text-xs text-muted">{year}</span>
        <span className="font-mono text-xs text-muted text-right max-w-[14rem] leading-relaxed">{role}</span>
        <span className="font-mono text-xs text-cyan mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          View →
        </span>
      </div>
    </Link>
  )
}
