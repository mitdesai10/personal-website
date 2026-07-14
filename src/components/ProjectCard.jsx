import { Link } from 'react-router-dom'
import { Tilt } from 'react-tilt'
import { disciplines } from '../data/projects'

const DISC_MAP = Object.fromEntries(disciplines.map(d => [d.id, d]))

const STATUS_STYLES = {
  shipped:       'tag-cyan',
  'in-progress': 'tag-amber',
  archived:      'tag',
}

export default function ProjectCard({ project }) {
  const { slug, title, tagline, disciplines: discIds, status, year, stats } = project

  return (
    <Tilt
      options={{ max: 10, scale: 1.02, speed: 400 }}
      className="gradient-border w-full h-full"
    >
      <article className="gradient-border-inner p-6 flex flex-col gap-5 shadow-card group h-full">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
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
          <span className="font-mono text-xs text-muted shrink-0">{year}</span>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display font-semibold text-heading text-lg leading-snug group-hover:text-cyan transition-colors">
            {title}
          </h3>
          <p className="text-sm text-body mt-1 leading-relaxed">{tagline}</p>
        </div>

        {/* Stats */}
        {stats?.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {stats.map((s, i) => (
              <div key={i} className="stat-block text-center px-2 py-3">
                <div className="font-display font-semibold text-cyan text-base leading-tight">{s.value}</div>
                <div className="font-mono text-[10px] text-muted mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className={STATUS_STYLES[status] ?? 'tag'}>{status}</span>
          <Link
            to={`/work/${slug}`}
            className="font-mono text-xs text-cyan hover:underline focus-visible:underline"
            aria-label={`View case study: ${title}`}
          >
            Case study →
          </Link>
        </div>
      </article>
    </Tilt>
  )
}
