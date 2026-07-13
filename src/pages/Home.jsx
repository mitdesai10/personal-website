import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { about, disciplines, projects } from '../data/projects'
import DisciplineCard from '../components/DisciplineCard'
import ProjectCard from '../components/ProjectCard'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

// Four-quadrant discipline diagram
function DisciplineDiagram() {
  const S = 220
  const pad = 12
  const gap = 8
  const q = (S - pad * 2 - gap) / 2

  const cx = S / 2
  const cy = S / 2

  const quads = [
    { id: 'product',   lines: ['Product', 'Management'], col: 0, row: 0, color: '#5EEAD4' },
    { id: 'data',      lines: ['Data &', 'Analytics'],   col: 1, row: 0, color: '#5EEAD4' },
    { id: 'marketing', lines: ['Performance', 'Marketing'], col: 0, row: 1, color: '#F5A623' },
    { id: 'web',       lines: ['Web', 'Development'],    col: 1, row: 1, color: '#F5A623' },
  ]

  return (
    <div aria-hidden="true" className="w-full max-w-sm mx-auto select-none">
      <svg viewBox={`0 0 ${S} ${S}`} className="w-full h-auto" role="img" aria-label="Four disciplines diagram">
        {quads.map(({ id, lines, col, row, color }) => {
          const x = pad + col * (q + gap)
          const y = pad + row * (q + gap)
          const qcx = x + q / 2
          const qcy = y + q / 2
          return (
            <g key={id}>
              <rect x={x} y={y} width={q} height={q} fill={`${color}12`} stroke={color} strokeWidth="1" rx="4" />
              <line x1={qcx} y1={qcy} x2={cx} y2={cy} stroke={color} strokeWidth="0.5" strokeOpacity="0.25" />
              {lines.map((line, i) => (
                <text
                  key={i}
                  x={qcx}
                  y={qcy + (i - (lines.length - 1) / 2) * 13}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={color}
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize="9"
                  fontWeight="500"
                >
                  {line}
                </text>
              ))}
            </g>
          )
        })}
        <circle cx={cx} cy={cy} r="14" fill="none" stroke="rgba(94,234,212,0.2)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r="3.5" fill="#5EEAD4" />
      </svg>
    </div>
  )
}

// Scroll indicator (inspired by old site)
function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center">
      <a href="#disciplines" aria-label="Scroll down">
        <div className="w-8 h-14 rounded-3xl border-2 border-border flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop' }}
            className="w-2 h-2 rounded-full bg-cyan"
          />
        </div>
      </a>
    </div>
  )
}

const featured = projects.filter(p => p.featured).slice(0, 3)

export default function Home() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative grid-bg min-h-screen flex items-center pt-16">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-canvas pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: copy */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              <motion.p variants={fadeUp(0)} className="section-label">
                Portfolio
              </motion.p>

              <motion.h1
                variants={fadeUp(0.05)}
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-heading leading-tight tracking-tight"
              >
                Hi, I'm{' '}
                <span className="text-cyan">{about.name}</span>
              </motion.h1>

              <motion.p
                variants={fadeUp(0.1)}
                className="font-display text-xl md:text-2xl text-body font-medium leading-snug"
              >
                {about.tagline}
              </motion.p>

              <motion.p variants={fadeUp(0.15)} className="text-body leading-relaxed max-w-lg">
                {about.intro}
              </motion.p>

              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/work"
                  className="font-mono text-sm px-5 py-2.5 bg-cyan text-canvas font-medium rounded hover:bg-cyan-dim transition-colors"
                >
                  View Work
                </Link>
                <Link
                  to="/about"
                  className="font-mono text-sm px-5 py-2.5 border border-border rounded text-body hover:border-border-2 hover:text-heading transition-colors"
                >
                  About Me
                </Link>
              </motion.div>

              <motion.div variants={fadeUp(0.25)} className="flex flex-wrap gap-2 pt-2">
                {['Product Management', 'Data & Analytics', 'Performance Marketing', 'Web Development'].map(d => (
                  <span key={d} className="tag">{d}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center md:justify-end"
            >
              <DisciplineDiagram />
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ── Disciplines grid ─────────────────────────────────────── */}
      <section id="disciplines" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-2">Disciplines</p>
          <h2 className="font-display font-semibold text-2xl text-heading">
            One operator, four modes
          </h2>
          <p className="text-body mt-2 max-w-xl leading-relaxed">
            The same analytical instinct that drives good product decisions drives good data questions — and good marketing ones.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {disciplines.map((d, i) => (
            <motion.div key={d.id} variants={fadeUp(i * 0.05)}>
              <DisciplineCard discipline={d} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Featured case studies ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="divider pt-12 mb-10"
        >
          <p className="section-label mt-10 mb-2">Selected Work</p>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display font-semibold text-2xl text-heading">
              Case studies
            </h2>
            <Link to="/work" className="font-mono text-xs text-cyan hover:underline shrink-0">
              All work →
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {featured.map((p, i) => (
            <motion.div key={p.slug} variants={fadeUp(i * 0.1)}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
