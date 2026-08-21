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
      options={{ max: 8, scale: 1.02, speed: 500, glare: true, 'max-glare': 0.06 }}
      className="gradient-border w-full h-full"
    >
      <article className="gradient-border-inner p-6 flex flex-col gap-5 shadow-card group h-full rounded-2xl">
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
          <h3 className="font-display font-semibold text-heading text-lg leading-snug group-hover:text-cyan transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-body mt-1.5 leading-relaxed">{tagline}</p>
        </div>

        {/* Stats */}
        {stats?.length > 0 && (
          <div className="flex border-t border-white/[0.07] pt-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`flex-1 min-w-0 ${i > 0 ? 'pl-4 border-l border-white/[0.07]' : ''} ${i < stats.length - 1 ? 'pr-4' : ''}`}
              >
                <div className="font-display font-semibold text-heading text-xl leading-none tracking-tight">
                  {s.value}
                </div>
                <div className="text-[11px] text-muted mt-1.5 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className={STATUS_STYLES[status] ?? 'tag'}>{status}</span>
          <Link
            to={`/work/${slug}`}
            className="font-mono text-xs text-cyan hover:underline focus-visible:underline opacity-70 group-hover:opacity-100 transition-opacity duration-200"
            aria-label={`View case study: ${title}`}
          >
            Case study →
          </Link>
        </div>
      </article>
    </Tilt>
  )
}
