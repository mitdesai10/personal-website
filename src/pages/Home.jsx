import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { about, disciplines, projects } from '../data/projects'
import DisciplineCard from '../components/DisciplineCard'
import ProjectCard from '../components/ProjectCard'
import StarField from '../components/StarField'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const ORBIT_NODES = [
  { label: ['Product', 'Management'],    color: '#804dee', angle: -Math.PI * 3 / 4 },
  { label: ['Data &', 'Analytics'],      color: '#804dee', angle: -Math.PI / 4 },
  { label: ['Performance', 'Marketing'], color: '#00cea8', angle:  Math.PI * 3 / 4 },
  { label: ['Web', 'Development'],       color: '#00cea8', angle:  Math.PI / 4 },
]

function DisciplineDiagram() {
  const canvasRef = useRef(null)
  const labelRefs = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const labels = labelRefs.current
    let animId, t = 0

    const particles = ORBIT_NODES.flatMap((_, i) => [
      { nodeIdx: i, prog: i * 0.25,              speed: 0.0055 + i * 0.0003 },
      { nodeIdx: i, prog: (i * 0.25 + 0.5) % 1, speed: 0.0065 + i * 0.0002 },
    ])

    // Cache layout values — only recompute on resize
    let W = 0, H = 0, cx = 0, cy = 0, sc = 1, R = 88

    const resize = () => {
      W  = canvas.width  = canvas.offsetWidth
      H  = canvas.height = canvas.offsetHeight
      cx = W / 2; cy = H / 2
      sc = Math.min(W, H) / 300
      R  = 88 * sc
      const fs = Math.max(9, 9 * sc)
      labels.forEach(el => { if (el) el.style.fontSize = `${fs}px` })
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = () => {
      if (!W || !H) { animId = requestAnimationFrame(draw); return }

      ctx.clearRect(0, 0, W, H)
      t += 0.008

      const pos = ORBIT_NODES.map((n, i) => {
        const ang = n.angle + t * 0.04
        return {
          x: cx + R * Math.cos(ang) + Math.sin(t * 0.6 + i * 1.3) * 2.5 * sc,
          y: cy + R * Math.sin(ang) + Math.cos(t * 0.8 + i * 1.0) * 2.5 * sc,
          ang, color: n.color,
        }
      })

      // ── Outer dashed ring ─────────────────────────────────
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(t * 0.18)
      ctx.beginPath()
      ctx.arc(0, 0, 116 * sc, 0, Math.PI * 2)
      ctx.setLineDash([4 * sc, 9 * sc])
      ctx.strokeStyle = 'rgba(128,77,238,0.2)'
      ctx.lineWidth = sc
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()

      // ── Inner counter-rotating ring ───────────────────────
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(-t * 0.28)
      ctx.beginPath()
      ctx.arc(0, 0, 42 * sc, 0, Math.PI * 2)
      ctx.setLineDash([2 * sc, 5 * sc])
      ctx.strokeStyle = 'rgba(0,206,168,0.25)'
      ctx.lineWidth = sc
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()

      // ── Orbit ghost ring ──────────────────────────────────
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(128,77,238,0.07)'
      ctx.lineWidth = sc
      ctx.stroke()

      // ── Connection lines center → nodes ───────────────────
      pos.forEach(p => {
        const g = ctx.createLinearGradient(cx, cy, p.x, p.y)
        g.addColorStop(0,   p.color + '00')
        g.addColorStop(0.4, p.color + '20')
        g.addColorStop(1,   p.color + '55')
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(p.x, p.y)
        ctx.strokeStyle = g
        ctx.lineWidth = sc
        ctx.stroke()
      })

      // ── Cross-connections ─────────────────────────────────
      const crossPairs = [[0,1],[2,3],[0,2],[1,3]]
      for (let ci = 0; ci < crossPairs.length; ci++) {
        const pa = pos[crossPairs[ci][0]], pb = pos[crossPairs[ci][1]]
        if (!pa || !pb) continue
        ctx.beginPath()
        ctx.moveTo(pa.x, pa.y)
        ctx.lineTo(pb.x, pb.y)
        ctx.strokeStyle = 'rgba(128,77,238,0.05)'
        ctx.lineWidth = 0.5 * sc
        ctx.stroke()
      }

      // ── Signal particles ──────────────────────────────────
      particles.forEach(p => {
        p.prog = (p.prog + p.speed) % 1
        const nd = pos[p.nodeIdx]
        if (!nd) return
        const px = cx + (nd.x - cx) * p.prog
        const py = cy + (nd.y - cy) * p.prog
        const alpha = Math.sin(p.prog * Math.PI)
        const hex = Math.round(alpha * 230).toString(16).padStart(2, '0')
        const pg = ctx.createRadialGradient(px, py, 0, px, py, 4 * sc)
        pg.addColorStop(0, nd.color + hex)
        pg.addColorStop(1, nd.color + '00')
        ctx.beginPath()
        ctx.arc(px, py, 4 * sc, 0, Math.PI * 2)
        ctx.fillStyle = pg
        ctx.fill()
        ctx.beginPath()
        ctx.arc(px, py, 1.5 * sc, 0, Math.PI * 2)
        ctx.fillStyle = nd.color + hex
        ctx.fill()
      })

      // ── Center hub ────────────────────────────────────────
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 24 * sc)
      cg.addColorStop(0, 'rgba(128,77,238,0.4)')
      cg.addColorStop(1, 'rgba(128,77,238,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 24 * sc, 0, Math.PI * 2)
      ctx.fillStyle = cg
      ctx.fill()

      const ph = (t * 0.55) % 1
      ctx.beginPath()
      ctx.arc(cx, cy, (5 + ph * 40) * sc, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(128,77,238,${(0.45 * (1 - ph)).toFixed(2)})`
      ctx.lineWidth = sc
      ctx.stroke()

      const dg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 16 * sc)
      dg.addColorStop(0, 'rgba(128,77,238,0.9)')
      dg.addColorStop(1, 'rgba(128,77,238,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 16 * sc, 0, Math.PI * 2)
      ctx.fillStyle = dg
      ctx.fill()
      ctx.beginPath()
      ctx.arc(cx, cy, 5 * sc, 0, Math.PI * 2)
      ctx.fillStyle = '#804dee'
      ctx.fill()

      // ── Nodes (no text — labels are HTML) ────────────────
      pos.forEach((p, i) => {
        const ph2 = (t * 0.45 + i * 0.25) % 1
        if (ph2 < 0.7) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, (7 + ph2 * 22) * sc, 0, Math.PI * 2)
          ctx.strokeStyle = p.color + Math.round(55 * (1 - ph2 / 0.7)).toString(16).padStart(2, '0')
          ctx.lineWidth = sc
          ctx.stroke()
        }
        const ng = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18 * sc)
        ng.addColorStop(0, p.color + '66')
        ng.addColorStop(1, p.color + '00')
        ctx.beginPath()
        ctx.arc(p.x, p.y, 18 * sc, 0, Math.PI * 2)
        ctx.fillStyle = ng
        ctx.fill()
        ctx.beginPath()
        ctx.arc(p.x, p.y, 7 * sc, 0, Math.PI * 2)
        ctx.fillStyle = p.color + '35'
        ctx.fill()
        ctx.strokeStyle = p.color
        ctx.lineWidth   = 1.5 * sc
        ctx.stroke()

        // Move HTML label — GPU-composited, always smooth
        const dx = p.x - cx, dy = p.y - cy
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        const lx = p.x + (dx / dist) * 30 * sc
        const ly = p.y + (dy / dist) * 30 * sc
        if (labels[i]) {
          labels[i].style.transform = `translate(${lx}px,${ly}px) translate(-50%,-50%)`
        }
      })

      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)

    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return (
    <div className="relative w-full select-none" style={{ aspectRatio: '1 / 1' }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      {ORBIT_NODES.map((node, i) => (
        <div
          key={i}
          ref={el => { labelRefs.current[i] = el }}
          className="absolute top-0 left-0 text-center pointer-events-none leading-snug"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '10px',
            fontWeight: 600,
            color: node.color,
            willChange: 'transform',
            whiteSpace: 'nowrap',
          }}
        >
          {node.label.map((line, li) => <div key={li}>{line}</div>)}
        </div>
      ))}
    </div>
  )
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
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
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(128,77,238,0.25) 0%, transparent 65%), linear-gradient(180deg, #050816 0%, #080c1f 100%)' }}
      >
        <StarField count={200} />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-canvas pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">

              {/* Violet line + label (inspired by old site) */}
              <motion.div variants={fadeUp(0)} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-cyan" />
                  <div className="w-0.5 h-16 violet-line" />
                </div>
                <p className="section-label">Portfolio</p>
              </motion.div>

              <motion.h1 variants={fadeUp(0.05)}
                className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-heading leading-tight tracking-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text">{about.name}</span>
              </motion.h1>

              <motion.p variants={fadeUp(0.1)}
                className="font-display text-xl md:text-2xl text-body font-medium leading-snug max-w-lg"
              >
                {about.tagline}
              </motion.p>

              <motion.p variants={fadeUp(0.15)} className="text-body leading-relaxed max-w-lg">
                {about.intro}
              </motion.p>

              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3 pt-2">
                <Link to="/work"
                  className="font-mono text-sm px-6 py-3 bg-cyan text-canvas font-semibold rounded-full hover:bg-cyan-dim transition-colors shadow-glow"
                >
                  View Work
                </Link>
                <Link to="/about"
                  className="font-mono text-sm px-6 py-3 border border-border rounded-full text-body hover:border-cyan hover:text-cyan transition-colors"
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

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
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

      {/* ── Disciplines ──────────────────────────────────────────── */}
      <section id="disciplines" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="section-label mb-3">Disciplines</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-heading">
            One operator, <span className="gradient-text">four modes</span>
          </h2>
          <p className="text-body mt-4 max-w-xl mx-auto leading-relaxed">
            The same analytical instinct that drives good product decisions drives good data questions — and good marketing ones.
          </p>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="show"
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
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
          className="divider pt-12 mb-12 text-center"
        >
          <p className="section-label mt-10 mb-3">Selected Work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-heading">
            Case <span className="gradient-text">studies</span>
          </h2>
          <Link to="/work" className="inline-block font-mono text-xs text-cyan hover:underline mt-4">
            View all work →
          </Link>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
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
