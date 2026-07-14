import { motion } from 'framer-motion'
import { webProjects } from '../data/projects'
import StarField from '../components/StarField'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } },
})

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const FORMAT_COLORS = {
  Ecommerce:         'tag-amber',
  'Static Portfolio': 'tag',
  'SaaS Marketing Site': 'tag-cyan',
  Restaurant:        'tag-amber',
  'Event & Ticketing': 'tag-cyan',
}

function PaletteDots({ colors }) {
  return (
    <div className="flex gap-1.5 items-center">
      {colors.map((c, i) => (
        <span
          key={i}
          className="w-3 h-3 rounded-full border border-white/10 inline-block shrink-0"
          style={{ background: c }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function BrowserChrome({ children }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-canvas-3">
      {/* fake browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-canvas-2 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 mx-3 h-4 rounded bg-border text-[9px] font-mono text-muted flex items-center px-2 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

function WebsiteCard({ site, index }) {
  return (
    <motion.div variants={fadeUp(index * 0.07)}>
      <div className="gradient-border w-full h-full group">
        <div className="gradient-border-inner flex flex-col h-full shadow-card">

          {/* Preview frame */}
          <div className="relative overflow-hidden rounded-t-2xl bg-canvas-3" style={{ paddingBottom: '58%' }}>
            {/* browser chrome overlay */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-canvas-2/95 border-b border-border backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
              <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[9px] text-muted truncate">mitdesai.tech{site.file}</span>
            </div>

            <iframe
              src={site.file}
              title={`${site.name} preview`}
              aria-label={`Preview of ${site.name}`}
              className="absolute inset-0 w-full h-full border-0"
              style={{
                transformOrigin: 'top left',
                width: '285%',
                height: '285%',
                transform: 'scale(0.351)',
                marginTop: '28px',
                pointerEvents: 'none',
              }}
              loading="lazy"
              sandbox="allow-same-origin"
            />
          </div>

          {/* Card body */}
          <div className="p-5 flex flex-col gap-4 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-heading text-lg leading-tight group-hover:text-cyan transition-colors">
                  {site.name}
                </h3>
                <p className="font-mono text-xs text-muted mt-0.5">{site.subtitle}</p>
              </div>
              <span className={`${FORMAT_COLORS[site.format] ?? 'tag'} shrink-0`}>{site.format}</span>
            </div>

            <p className="text-sm text-body leading-relaxed">{site.tagline}</p>

            <div className="flex items-center justify-between">
              <PaletteDots colors={site.palette} />
              <a
                href={site.file}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-cyan hover:underline"
              >
                Open preview →
              </a>
            </div>

            <ul className="flex flex-col gap-1.5 border-t border-border pt-4 mt-auto">
              {site.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-body">
                  <span className="text-cyan mt-0.5 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Websites() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative pt-16 pb-20 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(128,77,238,0.2) 0%, transparent 60%), #050816' }}
      >
        <StarField count={120} />
        <div className="relative max-w-6xl mx-auto px-6 pt-16">
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden" animate="show"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp(0)} className="flex items-center gap-4 mb-6">
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-cyan" />
                <div className="w-0.5 h-12 violet-line" />
              </div>
              <p className="section-label">Web Development</p>
            </motion.div>

            <motion.h1 variants={fadeUp(0.05)}
              className="font-display font-bold text-5xl md:text-6xl text-heading leading-tight tracking-tight"
            >
              Sites I've <span className="gradient-text">built</span>
            </motion.h1>

            <motion.p variants={fadeUp(0.1)} className="text-body text-lg leading-relaxed mt-4 max-w-xl">
              Five concept sites across five industry verticals — each with its own palette, type pairing, and layout logic,
              none sharing a template.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Grid ──────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-28 -mt-4">
        <motion.div
          variants={stagger} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {webProjects.map((site, i) => (
            <WebsiteCard key={site.id} site={site} index={i} />
          ))}
        </motion.div>

        {/* Range callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-16 gradient-border"
        >
          <div className="gradient-border-inner p-8 text-center">
            <p className="section-label mb-3">Why five together?</p>
            <p className="text-body max-w-2xl mx-auto leading-relaxed text-sm">
              Ecommerce vs. static vs. corporate vs. hospitality vs. event — each pulling from real conventions in its industry
              rather than a shared design system stretched five ways. These are a deliberate range test.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
