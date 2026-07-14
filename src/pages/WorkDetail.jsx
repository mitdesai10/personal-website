import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, disciplines } from '../data/projects'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  AreaChart, Area, CartesianGrid,
} from 'recharts'

const PURPLE = '#804dee'
const TEAL   = '#00cea8'
const chartColor = (rate) => rate > 30 ? PURPLE : rate > 15 ? '#a78bfa' : TEAL

const ChartTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const item = payload[0]?.payload
  return (
    <div className="bg-canvas-2 border border-border rounded px-3 py-2 text-xs font-mono">
      <p className="text-muted mb-1">{item?.name || item?.band}</p>
      <p className="text-heading">{payload[0]?.value}%</p>
    </div>
  )
}

function AnalyticsDetail({ project }) {
  const { title, tagline, stack, stats, kpis, chartData, findings, dataset, datasetUrl, disciplines: discIds, status, year } = project
  const DISC_MAP = Object.fromEntries(disciplines.map(d => [d.id, d]))

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10">
        ← All work
      </Link>

      {/* Title */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag-cyan">{status}</span>
          {discIds.map(id => {
            const d = DISC_MAP[id]
            return d ? <span key={id} className="tag-cyan">{d.label}</span> : null
          })}
          <span className="tag">{year}</span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-heading tracking-tight leading-tight mb-3">{title}</h1>
        <p className="text-body text-lg leading-relaxed max-w-2xl">{tagline}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {stack.map(s => <span key={s} className="tag">{s}</span>)}
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="bg-canvas-2 border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-muted mb-2">{k.label}</p>
            <p className="font-display font-bold text-3xl text-heading mb-1">{k.value}</p>
            <p className="font-mono text-xs text-muted leading-snug">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Churn Rate by Contract Type</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Contract lock-in cuts churn by 15×</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.byContract} barSize={36} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 50]} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                {chartData.byContract.map((d) => <Cell key={d.name} fill={chartColor(d.rate)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Churn Rate by Customer Tenure</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">First 6 months lose 53% of new customers</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartData.byTenure} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="tenureGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={PURPLE} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={PURPLE} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="band" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 60]} />
              <Tooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="rate" stroke={PURPLE} strokeWidth={2} fill="url(#tenureGrad)" dot={{ fill: PURPLE, r: 3, strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6 md:col-span-2">
          <p className="font-mono text-xs text-muted mb-1">Churn Rate by Internet Service Type</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Fiber optic churns at 2× DSL rate despite higher price</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={chartData.byService} layout="vertical" barSize={24} margin={{ top: 0, right: 40, left: 20, bottom: 0 }}>
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 50]} />
              <YAxis type="category" dataKey="name" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} width={80} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
                {chartData.byService.map((d) => <Cell key={d.name} fill={chartColor(d.rate)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Findings */}
      <div className="mb-10">
        <p className="section-label mb-5">Key Findings</p>
        <div className="grid md:grid-cols-3 gap-5">
          {findings.map((f) => (
            <div key={f.title} className="bg-canvas-2 border border-border rounded-xl p-5">
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h3 className="font-display font-semibold text-sm text-heading mb-2">{f.title}</h3>
              <p className="font-mono text-xs text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dataset credit */}
      <p className="font-mono text-xs text-muted border-t border-border pt-6 mb-16">
        Dataset:{' '}
        <a href={datasetUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{dataset}</a>
        {' '}· Analysis by Mit Desai
      </p>

      {/* Prev / Next */}
      <div className="pt-8 border-t border-border flex justify-between gap-4">
        {(() => {
          const idx = projects.findIndex(p => p.slug === project.slug)
          const prev = projects[idx - 1], next = projects[idx + 1]
          return (
            <>
              <div>{prev && <Link to={`/work/${prev.slug}`} className="group flex flex-col gap-0.5"><span className="font-mono text-xs text-muted group-hover:text-body transition-colors">← Previous</span><span className="font-display text-sm text-heading group-hover:text-cyan transition-colors">{prev.title}</span></Link>}</div>
              <div className="text-right">{next && <Link to={`/work/${next.slug}`} className="group flex flex-col gap-0.5 items-end"><span className="font-mono text-xs text-muted group-hover:text-body transition-colors">Next →</span><span className="font-display text-sm text-heading group-hover:text-cyan transition-colors">{next.title}</span></Link>}</div>
            </>
          )
        })()}
      </div>
    </main>
  )
}

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
  if (project.type === 'analytics') return <AnalyticsDetail project={project} />

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
