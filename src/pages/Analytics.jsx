import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  AreaChart, Area, CartesianGrid,
} from 'recharts'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } },
})
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

// ── Pre-computed from IBM Telco Customer Churn dataset (7,043 records) ──────
const KPI = [
  { label: 'Churn Rate',        value: '26.5%',   sub: '1,869 of 7,043 customers lost' },
  { label: 'MRR at Risk',       value: '$139K',    sub: '30.5% of $456K monthly revenue' },
  { label: 'Early-Stage Churn', value: '53.3%',   sub: 'Customers lost within first 6 months' },
  { label: 'Best Retention',    value: '2.8%',    sub: 'Churn rate on two-year contracts' },
]

const churnByContract = [
  { name: 'Month-to-month', rate: 42.7 },
  { name: 'One year',       rate: 11.3 },
  { name: 'Two year',       rate: 2.8  },
]

const churnByTenure = [
  { band: '0–6 mo',   rate: 53.3 },
  { band: '7–12 mo',  rate: 35.9 },
  { band: '13–24 mo', rate: 28.7 },
  { band: '25–48 mo', rate: 20.4 },
  { band: '49–72 mo', rate: 9.5  },
]

const churnByService = [
  { name: 'No Internet', rate: 7.4  },
  { name: 'DSL',         rate: 19.0 },
  { name: 'Fiber Optic', rate: 41.9 },
]

const PURPLE = '#804dee'
const TEAL   = '#00cea8'

const chartColors = (rate) => rate > 30 ? PURPLE : rate > 15 ? '#a78bfa' : TEAL

const TooltipBox = ({ active, payload, label, suffix = '%' }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-canvas-2 border border-border rounded px-3 py-2 text-xs font-mono">
      <p className="text-muted mb-1">{label || payload[0]?.payload?.name || payload[0]?.payload?.band}</p>
      <p className="text-heading">{payload[0]?.value}{suffix}</p>
    </div>
  )
}

const findings = [
  {
    icon: '⚡',
    title: 'Contract type is the biggest lever',
    body: 'Month-to-month customers churn at 42.7% vs 2.8% on two-year contracts — a 15× difference. Converting even 10% of M2M customers to annual contracts would recover ~$8K MRR.',
  },
  {
    icon: '🕐',
    title: 'The first 6 months are make-or-break',
    body: '53% of churned customers leave within the first 6 months. This points to an onboarding gap — customers never reach the activation moment that drives long-term retention.',
  },
  {
    icon: '📡',
    title: 'Fiber optic has a product-quality signal',
    body: 'Fiber optic customers churn at 41.9% vs 19% on DSL and 7.4% for non-internet — despite paying more. High charges + poor satisfaction is the likely driver.',
  },
]

const tools = ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter']

export default function Analytics() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">

      {/* ── Page header ─────────────────────────────────────────── */}
      <motion.div
        variants={stagger} initial="hidden" animate="show"
        className="mb-16"
      >
        <motion.p variants={fadeUp(0)} className="section-label mb-2">Data Analytics</motion.p>
        <motion.h1
          variants={fadeUp(0.05)}
          className="font-display font-bold text-4xl md:text-5xl text-heading tracking-tight"
        >
          From raw data to <span className="gradient-text">decisions</span>
        </motion.h1>
        <motion.p variants={fadeUp(0.1)} className="text-body mt-4 max-w-xl leading-relaxed">
          Real analyses on public datasets — showing the full stack from data wrangling to
          business recommendation.
        </motion.p>
      </motion.div>

      {/* ── Case Study 01 ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="gradient-border rounded-2xl"
      >
        <div className="gradient-border-inner rounded-2xl p-8 md:p-10 space-y-10">

          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-cyan border border-cyan/30 rounded px-2 py-0.5">
                Case Study — 01
              </span>
              <span className="font-mono text-xs text-muted border border-border rounded px-2 py-0.5">
                IBM Telco Dataset · 7,043 records
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-heading mb-3">
              Diagnosing $139K in Monthly Customer Churn
            </h2>
            <p className="text-body leading-relaxed max-w-3xl">
              A telecom company was losing 26.5% of its customer base per cycle with no clear
              picture of why. I ran a full churn analysis across contract type, tenure, service
              tier, and payment method to identify the highest-impact retention levers.
            </p>

            {/* Tool badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              {tools.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* ── KPI Cards ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {KPI.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="bg-canvas-2 border border-border rounded-xl p-5"
              >
                <p className="font-mono text-xs text-muted mb-2">{k.label}</p>
                <p className="font-display font-bold text-3xl text-heading mb-1">{k.value}</p>
                <p className="font-mono text-xs text-muted leading-snug">{k.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Charts ────────────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Chart 1: Churn by Contract */}
            <div className="bg-canvas-2 border border-border rounded-xl p-6">
              <p className="font-mono text-xs text-muted mb-1">Churn Rate by Contract Type</p>
              <p className="font-display text-sm text-heading font-semibold mb-5">
                Contract lock-in cuts churn by 15×
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={churnByContract} barSize={36}
                  margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                    axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                    axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 50]} />
                  <Tooltip content={<TooltipBox suffix="%" />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                  <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                    {churnByContract.map((d) => (
                      <Cell key={d.name} fill={chartColors(d.rate)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 2: Churn by Tenure */}
            <div className="bg-canvas-2 border border-border rounded-xl p-6">
              <p className="font-mono text-xs text-muted mb-1">Churn Rate by Customer Tenure</p>
              <p className="font-display text-sm text-heading font-semibold mb-5">
                First 6 months lose 53% of new customers
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={churnByTenure}
                  margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="tenureGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor={PURPLE} stopOpacity={0.35} />
                      <stop offset="95%" stopColor={PURPLE} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="band" tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                    axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                    axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 60]} />
                  <Tooltip content={<TooltipBox suffix="%" />} />
                  <Area type="monotone" dataKey="rate" stroke={PURPLE} strokeWidth={2}
                    fill="url(#tenureGrad)" dot={{ fill: PURPLE, r: 3, strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 3: Churn by Internet Service */}
            <div className="bg-canvas-2 border border-border rounded-xl p-6 md:col-span-2">
              <p className="font-mono text-xs text-muted mb-1">Churn Rate by Internet Service Type</p>
              <p className="font-display text-sm text-heading font-semibold mb-5">
                Fiber optic customers churn at 2× the rate of DSL despite paying more
              </p>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={churnByService} layout="vertical" barSize={24}
                  margin={{ top: 0, right: 40, left: 20, bottom: 0 }}>
                  <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
                  <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                    axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 50]} />
                  <YAxis type="category" dataKey="name"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                    axisLine={false} tickLine={false} width={80} />
                  <Tooltip content={<TooltipBox suffix="%" />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                  <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
                    {churnByService.map((d) => (
                      <Cell key={d.name} fill={chartColors(d.rate)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ── Key Findings ───────────────────────────────────────── */}
          <div>
            <p className="section-label mb-6">Key Findings</p>
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
          <p className="font-mono text-xs text-muted border-t border-border pt-6">
            Dataset:{' '}
            <a
              href="https://www.kaggle.com/datasets/blastchar/telco-customer-churn"
              target="_blank" rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              IBM Telco Customer Churn via Kaggle
            </a>
            {' '}· Analysis by Mit Desai
          </p>
        </div>
      </motion.div>

      {/* ── Coming Soon placeholder ──────────────────────────────── */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {['RFM Customer Segmentation — UK Online Retail', 'Revenue Pipeline — Olist E-Commerce'].map(title => (
          <div key={title} className="border border-dashed border-border rounded-2xl p-8 flex flex-col gap-3 opacity-50">
            <span className="font-mono text-xs text-muted">Coming soon</span>
            <p className="font-display font-semibold text-heading">{title}</p>
          </div>
        ))}
      </div>

    </main>
  )
}
