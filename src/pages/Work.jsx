import { useState } from 'react'
import { projects, disciplines } from '../data/projects'
import ProjectRow from '../components/ProjectRow'

const ALL = 'all'

export default function Work() {
  const [active, setActive] = useState(ALL)

  const filtered =
    active === ALL ? projects : projects.filter(p => p.disciplines.includes(active))

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
      {/* Header */}
      <div className="mb-12">
        <p className="section-label mb-2">Work</p>
        <h1 className="font-display font-bold text-4xl text-heading tracking-tight">
          Case Studies
        </h1>
        <p className="text-body mt-3 max-w-xl leading-relaxed">
          [Replace: A short sentence about what these projects have in common — the thread across disciplines.]
        </p>
      </div>

      {/* Filter bar */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filter by discipline"
      >
        <button
          onClick={() => setActive(ALL)}
          className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors ${
            active === ALL
              ? 'border-cyan text-cyan bg-cyan/5'
              : 'border-border text-muted hover:border-border-2 hover:text-body'
          }`}
        >
          All ({projects.length})
        </button>
        {disciplines.map(d => {
          const count = projects.filter(p => p.disciplines.includes(d.id)).length
          const isActive = active === d.id
          return (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors ${
                isActive
                  ? d.color === 'cyan'
                    ? 'border-cyan text-cyan bg-cyan/5'
                    : 'border-amber text-amber bg-amber/5'
                  : 'border-border text-muted hover:border-border-2 hover:text-body'
              }`}
            >
              {d.label} ({count})
            </button>
          )
        })}
      </div>

      {/* Project list */}
      <div aria-live="polite" aria-atomic="true">
        {filtered.length === 0 ? (
          <p className="text-muted font-mono text-sm py-12 text-center">No projects in this category yet.</p>
        ) : (
          <div>
            {filtered.map((p, i) => (
              <ProjectRow key={p.slug} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
