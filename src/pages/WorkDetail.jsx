import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, disciplines } from '../data/projects'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  AreaChart, Area, CartesianGrid, ReferenceLine, LabelList,
} from 'recharts'

const PURPLE = '#f97316'
const TEAL   = '#06b6d4'
const chartColor = (rate) => rate > 30 ? PURPLE : rate > 15 ? '#fb923c' : TEAL

const ChartTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const item = payload[0]?.payload
  return (
    <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
      <p className="text-muted mb-1">{item?.name || item?.band}</p>
      <p className="text-heading">{payload[0]?.value}%</p>
    </div>
  )
}

function Roadmap({ phases }) {
  const cfg = {
    done:    { bg: 'rgba(6,182,212,0.12)',   border: '#06b6d4', color: '#06b6d4',                   badge: 'Done' },
    current: { bg: 'rgba(249, 115, 22,0.12)', border: '#f97316', color: '#f97316',                   badge: 'Active' },
    planned: { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.35)', badge: 'Planned' },
  }
  return (
    <div className="rounded-2xl p-6 mb-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <p className="section-label mb-6">Product Roadmap</p>
      <div className="flex items-start" style={{ overflowX: 'auto' }}>
        {phases.map((ph, i) => {
          const c = cfg[ph.status]
          return (
            <div key={ph.phase} className="flex-1" style={{ minWidth: 130 }}>
              <div className="flex items-center">
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: c.bg, border: `2px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: c.color, fontSize: 10, fontFamily: 'IBM Plex Mono', fontWeight: 700 }}>{ph.phase}</span>
                </div>
                {i < phases.length - 1 && (
                  <div style={{ flex: 1, height: 1, background: ph.status === 'done' ? 'rgba(0,206,168,0.35)' : 'rgba(255,255,255,0.1)' }} />
                )}
              </div>
              <div className="mt-3 pr-4">
                <p className="font-display font-semibold text-sm text-heading mb-1">{ph.label}</p>
                <p className="font-mono text-xs text-muted leading-relaxed">{ph.detail}</p>
                <span className="inline-block mt-2 font-mono text-xs" style={{ color: c.color }}>{c.badge}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AnalyticsDetail({ project }) {
  const { title, tagline, stack, kpis, chartData, findings, dataset, datasetUrl, disciplines: discIds, status, year } = project
  const DISC_MAP = Object.fromEntries(disciplines.map(d => [d.id, d]))

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10">
        ← All work
      </Link>

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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="bg-canvas-2 border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-muted mb-2">{k.label}</p>
            <p className="font-display font-bold text-3xl text-heading mb-1">{k.value}</p>
            <p className="font-mono text-xs text-muted leading-snug">{k.sub}</p>
          </div>
        ))}
      </div>

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

      <p className="font-mono text-xs text-muted border-t border-border pt-6 mb-16">
        Dataset:{' '}
        <a href={datasetUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{dataset}</a>
        {' '}· Analysis by Mit Desai
      </p>

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

function PaymentsDetail({ project }) {
  const { title, tagline, stack, kpis, chartData, findings, roadmap, dataset, datasetUrl, disciplines: discIds, status, year } = project
  const DISC_MAP_LOCAL = Object.fromEntries(disciplines.map(d => [d.id, d]))
  const typeColor = (rate) => rate > 0.5 ? PURPLE : rate > 0 ? '#fb923c' : TEAL
  const bandColor = (pct) => pct > 30 ? PURPLE : pct > 20 ? '#fb923c' : TEAL
  const coverageColor = (r) => r > 50 ? TEAL : r > 10 ? '#fb923c' : PURPLE

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10">
        ← All work
      </Link>

      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag-cyan">{status}</span>
          {discIds.map(id => {
            const d = DISC_MAP_LOCAL[id]
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="bg-canvas-2 border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-muted mb-2">{k.label}</p>
            <p className="font-display font-bold text-3xl text-heading mb-1">{k.value}</p>
            <p className="font-mono text-xs text-muted leading-snug">{k.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Risk Rate by Transaction Type</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Risk is confined to TRANSFER and CASH_OUT</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.byType} barSize={36} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 1]} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.name}</p>
                    <p className="text-heading">{payload[0]?.value}% risk rate</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                {chartData.byType.map((d) => <Cell key={d.name} fill={typeColor(d.rate)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">High-Risk Events by Transaction Amount</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">79% of high-risk events exceed $100K — large transfers are the target</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.byAmountBand} barSize={36} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="band" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 40]} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.band}</p>
                    <p className="text-heading">{payload[0]?.value}% of high-risk events</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="pct" radius={[4, 4, 0, 0]}>
                {chartData.byAmountBand.map((d) => <Cell key={d.band} fill={bandColor(d.pct)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6 md:col-span-2">
          <p className="font-mono text-xs text-muted mb-1">Detection Coverage: Existing System vs Rule-Based Baseline</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Existing system covers 0.19% of high-risk events — a targeted rule reaches 66.6%</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={chartData.byDetection} layout="vertical" barSize={32} margin={{ top: 0, right: 60, left: 20, bottom: 0 }}>
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 80]} />
              <YAxis type="category" dataKey="method" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} width={190} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.method}</p>
                    <p className="text-heading">{payload[0]?.value}% detection coverage</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="recall" radius={[0, 4, 4, 0]}>
                {chartData.byDetection.map((d) => <Cell key={d.method} fill={coverageColor(d.recall)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-8">
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

      {roadmap && <Roadmap phases={roadmap} />}

      <p className="font-mono text-xs text-muted border-t border-border pt-6 mb-16">
        Dataset:{' '}
        <a href={datasetUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{dataset}</a>
        {' '}· Analysis by Mit Desai
      </p>

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

function PMCaseStudyDetail({ project }) {
  const { title, tagline, stack, kpis, roadmap, chartData, chartType, chartTitle, chartSub, decisions, disciplines: discIds, status, year, problem, approach, result } = project
  const DISC_MAP_LOCAL = Object.fromEntries(disciplines.map(d => [d.id, d]))
  const riceColor = (s) => s >= 900 ? TEAL : s >= 600 ? '#fb923c' : PURPLE

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10">
        ← All work
      </Link>

      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag-cyan">{status}</span>
          {discIds.map(id => {
            const d = DISC_MAP_LOCAL[id]
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((k) => (
          <div key={k.label} className="bg-canvas-2 border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-muted mb-2">{k.label}</p>
            <p className="font-display font-bold text-3xl text-heading mb-1">{k.value}</p>
            <p className="font-mono text-xs text-muted leading-snug">{k.sub}</p>
          </div>
        ))}
      </div>

      {roadmap && <Roadmap phases={roadmap} />}

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">{chartTitle}</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">{chartSub}</p>

          {chartType === 'rice' && (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData.rice} layout="vertical" barSize={20} margin={{ top: 0, right: 50, left: 10, bottom: 0 }}>
                <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
                <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} domain={[0, 1400]} />
                <YAxis type="category" dataKey="feature" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 8, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} width={175} />
                <Tooltip content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  return (
                    <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                      <p className="text-muted mb-1">{payload[0]?.payload?.feature}</p>
                      <p className="text-heading">RICE: {payload[0]?.value}</p>
                    </div>
                  )
                }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {chartData.rice.map((d) => <Cell key={d.feature} fill={riceColor(d.score)} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}

          {chartType === 'settlement' && (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData.settlement} layout="vertical" barSize={24} margin={{ top: 0, right: 72, left: 20, bottom: 0 }}>
                <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
                <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}h`} domain={[0, 54]} />
                <YAxis type="category" dataKey="method" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 8, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} width={145} />
                <Tooltip content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const v = payload[0]?.value
                  return (
                    <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                      <p className="text-muted mb-1">{payload[0]?.payload?.method}</p>
                      <p className="text-heading">{v < 1 ? '< 1 minute' : `${v} hours`}</p>
                    </div>
                  )
                }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="hours" radius={[0, 4, 4, 0]}>
                  <LabelList dataKey="hours" position="right" formatter={v => v < 1 ? '< 1 min' : `${v}h`} style={{ fill: 'rgba(255,255,255,0.55)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} />
                  {chartData.settlement.map((d) => <Cell key={d.method} fill={d.hours < 1 ? TEAL : d.hours < 15 ? '#fb923c' : PURPLE} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div>
          <p className="section-label mb-4">Key Product Decisions</p>
          <div className="flex flex-col gap-4">
            {decisions.map((d) => (
              <div key={d.title} className="bg-canvas-2 border border-border rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{d.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-heading mb-1">{d.title}</h3>
                    <p className="font-mono text-xs text-muted leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mb-10">
        <div className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8 py-8 border-b border-border">
          <div><p className="section-label">Problem</p></div>
          <div className="prose-dark"><p>{problem}</p></div>
        </div>
        <div className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8 py-8 border-b border-border">
          <div><p className="section-label">Approach</p></div>
          <div className="prose-dark"><p>{approach}</p></div>
        </div>
        <div className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8 py-8">
          <div><p className="section-label">Result</p></div>
          <div className="prose-dark"><p>{result}</p></div>
        </div>
      </div>

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

function SuperstoreDetail({ project }) {
  const { title, tagline, stack, kpis, chartData, findings, dataset, datasetUrl, disciplines: discIds, status, year } = project
  const DISC_MAP_LOCAL = Object.fromEntries(disciplines.map(d => [d.id, d]))
  const marginColor = (m) => m >= 10 ? TEAL : m >= 0 ? '#fb923c' : PURPLE
  const profitColor = (p) => p >= 0 ? TEAL : PURPLE

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10">
        ← All work
      </Link>

      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag-cyan">{status}</span>
          {discIds.map(id => {
            const d = DISC_MAP_LOCAL[id]
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="bg-canvas-2 border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-muted mb-2">{k.label}</p>
            <p className="font-display font-bold text-3xl text-heading mb-1">{k.value}</p>
            <p className="font-mono text-xs text-muted leading-snug">{k.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-canvas-2 border border-border rounded-xl p-6 md:col-span-2">
          <p className="font-mono text-xs text-muted mb-1">Profit Margin by Discount Band</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Cross 20% discount and margin turns negative</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData.byDiscount} barSize={48} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="band" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[-130, 35]} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.band}</p>
                    <p className="text-heading">{payload[0]?.value}% margin</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="margin" radius={[4, 4, 0, 0]}>
                {chartData.byDiscount.map((d) => <Cell key={d.band} fill={marginColor(d.margin)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Profit by Sub-Category</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Tables and Bookcases are loss-making</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData.bySubCategory} layout="vertical" barSize={16} margin={{ top: 0, right: 50, left: 10, bottom: 0 }}>
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v/1000).toFixed(0)}K`} />
              <YAxis type="category" dataKey="name" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} width={80} />
              <ReferenceLine x={0} stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                const v = payload[0]?.value
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.name}</p>
                    <p className="text-heading">${v?.toLocaleString()} profit</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="profit" radius={[0, 4, 4, 0]}>
                {chartData.bySubCategory.map((d) => <Cell key={d.name} fill={profitColor(d.profit)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Profit Margin by Region</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Central region runs at half the margin of West</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData.byRegion} barSize={44} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="region" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 18]} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.region}</p>
                    <p className="text-heading">{payload[0]?.value}% margin</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="margin" radius={[4, 4, 0, 0]}>
                {chartData.byRegion.map((d) => <Cell key={d.region} fill={marginColor(d.margin)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

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

      <p className="font-mono text-xs text-muted border-t border-border pt-6 mb-16">
        Dataset:{' '}
        <a href={datasetUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{dataset}</a>
        {' '}· Analysis by Mit Desai
      </p>

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

function OlistDetail({ project }) {
  const { title, tagline, stack, kpis, chartData, findings, dataset, datasetUrl, disciplines: discIds, status, year } = project
  const DISC_MAP_LOCAL = Object.fromEntries(disciplines.map(d => [d.id, d]))
  const scoreColor = (s) => s >= 4.2 ? TEAL : s >= 3.8 ? '#fb923c' : PURPLE

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10">
        ← All work
      </Link>

      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag-cyan">{status}</span>
          {discIds.map(id => {
            const d = DISC_MAP_LOCAL[id]
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="bg-canvas-2 border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-muted mb-2">{k.label}</p>
            <p className="font-display font-bold text-3xl text-heading mb-1">{k.value}</p>
            <p className="font-mono text-xs text-muted leading-snug">{k.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-canvas-2 border border-border rounded-xl p-6 md:col-span-2">
          <p className="font-mono text-xs text-muted mb-1">Avg Review Score by Delivery Time</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">22-day deliveries score 1.4 points lower than 7-day</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.byDeliveryTime} barSize={56} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="bucket" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} domain={[0, 5]} ticks={[0,1,2,3,4,5]} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.bucket}</p>
                    <p className="text-heading">{payload[0]?.value} / 5</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                {chartData.byDeliveryTime.map((d) => <Cell key={d.bucket} fill={scoreColor(d.score)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Monthly Order Volume</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Nov 2017 Black Friday spike, then steady ~6.5K/mo</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartData.monthlyOrders} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={TEAL} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={TEAL} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} interval={2} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.month}</p>
                    <p className="text-heading">{payload[0]?.value?.toLocaleString()} orders</p>
                  </div>
                )
              }} />
              <Area type="monotone" dataKey="orders" stroke={TEAL} strokeWidth={2} fill="url(#ordersGrad)" dot={{ fill: TEAL, r: 3, strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Freight as % of Order Value by Price Band</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">Cheap orders carry a 33% freight burden</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.freightByPrice} layout="vertical" barSize={20} margin={{ top: 0, right: 40, left: 20, bottom: 0 }}>
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 40]} />
              <YAxis type="category" dataKey="band" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} width={70} />
              <Tooltip content={({ active, payload }) => {
                if (!active || !payload?.length) return null
                return (
                  <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                    <p className="text-muted mb-1">{payload[0]?.payload?.band}</p>
                    <p className="text-heading">{payload[0]?.value}% of order</p>
                  </div>
                )
              }} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="pct" radius={[0, 4, 4, 0]}>
                {chartData.freightByPrice.map((d) => <Cell key={d.band} fill={chartColor(d.pct)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

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

      <p className="font-mono text-xs text-muted border-t border-border pt-6 mb-16">
        Dataset:{' '}
        <a href={datasetUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{dataset}</a>
        {' '}· Analysis by Mit Desai
      </p>

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

function DSHealthcareDetail({ project }) {
  const {
    title, tagline, stack, kpis, featureImportance, segments, readmitByAge,
    costByAge, findings, dataset, datasetUrl, disciplines: discIds, status, year,
    problem, approach, result,
  } = project
  const DISC_MAP = Object.fromEntries(disciplines.map(d => [d.id, d]))

  const fiColor = (pct) => pct > 30 ? TEAL : pct > 10 ? '#fb923c' : 'rgba(255,255,255,0.3)'
  const segColor = (label) => label === 'High Risk' ? PURPLE : label === 'Medium Risk' ? '#fb923c' : TEAL

  const FiTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null
    return (
      <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
        <p className="text-muted mb-1">{payload[0]?.payload?.feature}</p>
        <p className="text-heading">{payload[0]?.value}%</p>
      </div>
    )
  }

  const SecondaryTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null
    const d = payload[0]?.payload
    return (
      <div className="rounded-lg px-3 py-2 text-xs font-mono" style={{ background: 'rgba(12,17,36,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
        <p className="text-muted mb-1">{d?.label || d?.group}</p>
        <p className="text-heading">{d?.avgCost ? `$${d.avgCost.toLocaleString()}` : `${d?.rate || d?.cost}${d?.rate ? '%' : ''}`}</p>
      </div>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10">
        ← All work
      </Link>

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

      {/* KPI Cards */}
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

        {/* Feature Importance */}
        <div className="bg-canvas-2 border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted mb-1">Model Feature Importance</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">What drives the prediction</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={featureImportance} layout="vertical" barSize={18} margin={{ top: 0, right: 50, left: 10, bottom: 0 }}>
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <YAxis type="category" dataKey="feature" tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} width={130} />
              <Tooltip content={<FiTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="pct" radius={[0, 4, 4, 0]}>
                <LabelList dataKey="pct" position="right" formatter={v => `${v}%`} style={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} />
                {featureImportance.map((d) => <Cell key={d.feature} fill={fiColor(d.pct)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Secondary Chart: Risk Segments or Readmission by Age */}
        {segments ? (
          <div className="bg-canvas-2 border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-muted mb-1">Member Risk Segmentation</p>
            <p className="font-display text-sm text-heading font-semibold mb-5">Average annual cost by risk tier</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={segments} barSize={48} margin={{ top: 4, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="label" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v/1000).toFixed(0)}K`} />
                <Tooltip content={<SecondaryTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="avgCost" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="avgCost" position="top" formatter={v => `$${(v/1000).toFixed(0)}K`} style={{ fill: 'rgba(255,255,255,0.5)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} />
                  {segments.map((d) => <Cell key={d.label} fill={segColor(d.label)} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : readmitByAge ? (
          <div className="bg-canvas-2 border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-muted mb-1">30-Day Readmission Rate by Age Group</p>
            <p className="font-display text-sm text-heading font-semibold mb-5">Young adults and 80+ show highest risk</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={readmitByAge} margin={{ top: 4, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="readmitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={PURPLE} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={PURPLE} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
                <XAxis dataKey="group" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[8, 16]} />
                <Tooltip content={<ChartTooltip />} />
                <Area type="monotone" dataKey="rate" stroke={PURPLE} strokeWidth={2} fill="url(#readmitGrad)" dot={{ fill: PURPLE, r: 3, strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ) : null}
      </div>

      {/* Cost by Age (insurance only) */}
      {costByAge && (
        <div className="bg-canvas-2 border border-border rounded-xl p-6 mb-8">
          <p className="font-mono text-xs text-muted mb-1">Average Annual Cost by Age Group</p>
          <p className="font-display text-sm text-heading font-semibold mb-5">60+ members cost 2.2× more than 18-30 members</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={costByAge} barSize={56} margin={{ top: 4, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="group" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v/1000).toFixed(0)}K`} />
              <Tooltip content={<SecondaryTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="cost" position="top" formatter={v => `$${(v/1000).toFixed(1)}K`} style={{ fill: 'rgba(255,255,255,0.5)', fontSize: 9, fontFamily: 'IBM Plex Mono' }} />
                {costByAge.map((d, i) => <Cell key={d.group} fill={i === 0 ? TEAL : i === 1 ? '#fb923c' : i === 2 ? '#c084fc' : PURPLE} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Key Findings */}
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

      {/* Problem / Approach / Result */}
      <div className="space-y-8 mb-10">
        {[['Problem', problem], ['Approach', approach], ['Result', result]].map(([label, text]) => (
          <div key={label}>
            <p className="section-label mb-3">{label}</p>
            <p className="font-mono text-sm text-body leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs text-muted border-t border-border pt-6 mb-16">
        Dataset:{' '}
        <a href={datasetUrl} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{dataset}</a>
        {' '}· Analysis by Mit Desai
      </p>

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

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />
  if (project.type === 'analytics') return <AnalyticsDetail project={project} />
  if (project.type === 'analytics-olist') return <OlistDetail project={project} />
  if (project.type === 'analytics-superstore') return <SuperstoreDetail project={project} />
  if (project.type === 'analytics-payments') return <PaymentsDetail project={project} />
  if (project.type === 'pm-treasury' || project.type === 'pm-tokenized') return <PMCaseStudyDetail project={project} />
  if (project.type === 'ds-healthcare') return <DSHealthcareDetail project={project} />

  const {
    title, tagline, disciplines: discIds, status,
    year, role, timeline, stack, stats,
    problem, approach, result,
  } = project

  const statusStyle = STATUS_STYLES[status] ?? STATUS_STYLES.archived

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <Link
        to="/work"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-body transition-colors mb-10"
      >
        ← All work
      </Link>

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

      {stack?.length > 0 && (
        <div className="mb-12">
          <p className="section-label mb-3">Stack / Tools</p>
          <div className="flex flex-wrap gap-2">
            {stack.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      )}

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

      <div className="mt-16 pt-8 border-t border-border flex justify-between gap-4">
        {(() => {
          const idx = projects.findIndex(p => p.slug === slug)
          const prev = projects[idx - 1]
          const next = projects[idx + 1]
          return (
            <>
              <div>
                {prev && (
                  <Link to={`/work/${prev.slug}`} className="group flex flex-col gap-0.5">
                    <span className="font-mono text-xs text-muted group-hover:text-body transition-colors">← Previous</span>
                    <span className="font-display text-sm text-heading group-hover:text-cyan transition-colors">{prev.title}</span>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link to={`/work/${next.slug}`} className="group flex flex-col gap-0.5 items-end">
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
