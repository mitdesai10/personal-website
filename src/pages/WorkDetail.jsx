import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, disciplines } from '../data/projects'

const DISC_MAP = Object.fromEntries(disciplines.map(d => [d.id, d]))

const STATUS_STYLES = {
  shipped:       { cls: 'tag-cyan', dot: 'bg-cyan' },
  'in-progress': { cls: 'tag-amber', dot: 'bg-amber' },
  archived:      { cls: 'tag',      dot: 'bg-muted' },
}

function Section({ label, children }) {
  return (
    <div className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8 py-8 border-b border-border last:border-0">
      <div>
        <p className="section-label">{label}</p>
      </div>
      <div className="prose-dark">{children}</div>
    </div>
  )
}

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const {
    title, tagline, disciplines: discIds, status,
    year, role, timeline, stack, stats,
    problem, approach, result,
  } = project

  const statusStyle = STATUS_STYLES[status] ?? STATUS_STYLES.archived

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      {/* Back */}
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10"
      >
        ← All work
      </Link>

      {/* Title block */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={statusStyle.cls}>{status}</span>
          {discIds.map(id => {
            const d = DISC_MAP[id]
            return d ? (
              <span key={id} className={d.color === 'cyan' ? 'tag-cyan' : 'tag-amber'}>
                {d.label}
              </span>
            ) : null
          })}
          <span className="tag">{year}</span>
        </div>

        <h1 className="font-display font-bold text-3xl md:text-4xl text-heading tracking-tight leading-tight mb-3">
          {title}
        </h1>
        <p className="text-body text-lg leading-relaxed max-w-2xl">{tagline}</p>
      </div>

      {/* Meta strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded overflow-hidden mb-12">
        {[
          { label: 'Role',     value: role },
          { label: 'Timeline', value: timeline },
          { label: 'Status',   value: status },
          { label: 'Year',     value: year },
        ].map(({ label, value }) => (
          <div key={label} className="bg-canvas-2 px-4 py-3">
            <p className="section-label mb-1">{label}</p>
            <p className="font-display text-sm text-heading font-medium">{value}</p>
          </div>
        ))}
      </div>

      {/* Stack */}
      {stack?.length > 0 && (
        <div className="mb-12">
          <p className="section-label mb-3">Stack / Tools</p>
          <div className="flex flex-wrap gap-2">
            {stack.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      )}

      {/* Stats */}
      {stats?.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="stat-block text-center py-6">
              <div className="font-display font-bold text-3xl text-cyan mb-1">{s.value}</div>
              <div className="font-mono text-xs text-muted uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Narrative */}
      <div className="border-t border-border">
        <Section label="Problem">
          <p>{problem}</p>
        </Section>

        <Section label="Approach">
          <p>{approach}</p>
        </Section>

        <Section label="Result">
          <p>{result}</p>
        </Section>
      </div>

      {/* Nav between projects */}
      <div className="mt-16 pt-8 border-t border-border flex justify-between gap-4">
        {(() => {
          const idx = projects.findIndex(p => p.slug === slug)
          const prev = projects[idx - 1]
          const next = projects[idx + 1]
          return (
            <>
              <div>
                {prev && (
                  <Link
                    to={`/work/${prev.slug}`}
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="font-mono text-xs text-muted group-hover:text-body transition-colors">← Previous</span>
                    <span className="font-display text-sm text-heading group-hover:text-cyan transition-colors">{prev.title}</span>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link
                    to={`/work/${next.slug}`}
                    className="group flex flex-col gap-0.5 items-end"
                  >
                    <span className="font-mono text-xs text-muted group-hover:text-body transition-colors">Next →</span>
                    <span className="font-display text-sm text-heading group-hover:text-cyan transition-colors">{next.title}</span>
                  </Link>
                )}
              </div>
            </>
          )
        })()}
      </div>
    </main>
  )
}
