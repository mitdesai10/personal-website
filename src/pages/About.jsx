import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { about, experiences } from '../data/projects'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: 'easeOut' } },
})

function ExperienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1A1D28', color: '#E8EAF0', border: '1px solid #2A2E3F', borderRadius: '6px', boxShadow: 'none' }}
      contentArrowStyle={{ borderRight: '7px solid #2A2E3F' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: `2px solid ${experience.iconColor}`, boxShadow: 'none' }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <span
            style={{ color: experience.iconColor, fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em' }}
          >
            {experience.initials}
          </span>
        </div>
      }
    >
      <div>
        <h3 className="font-display font-bold text-lg text-heading">
          {experience.title}
        </h3>
        <p className="font-mono text-sm mt-0.5" style={{ color: experience.iconColor, margin: 0 }}>
          {experience.company}
        </p>
        <p className="font-mono text-xs text-muted mt-0.5">{experience.location}</p>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {experience.points.map((point, i) => (
          <li key={i} className="text-sm text-body leading-relaxed flex gap-2">
            <span className="shrink-0 mt-1.5 text-xs" style={{ color: experience.iconColor }}>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      {/* Header */}
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate="show"
        className="mb-16"
      >
        <motion.p variants={fadeUp()} className="section-label mb-2">About</motion.p>
        <motion.h1
          variants={fadeUp(0.05)}
          className="font-display font-bold text-4xl text-heading tracking-tight mb-3"
        >
          Hi, I'm <span className="text-cyan">{about.name}</span>
        </motion.h1>
        <motion.p variants={fadeUp(0.1)} className="font-mono text-sm text-muted">
          {about.location}
        </motion.p>
      </motion.div>

      {/* Bio + photo */}
      <div className="grid md:grid-cols-[1fr_16rem] gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4"
        >
          {about.bio.map((para, i) => (
            <p key={i} className="text-body leading-relaxed text-base">{para}</p>
          ))}
          <div className="flex gap-3 mt-4">
            <Link to="/work" className="font-mono text-sm px-4 py-2 bg-cyan text-canvas rounded font-medium hover:bg-cyan-dim transition-colors">
              See my work
            </Link>
            <Link to="/contact" className="font-mono text-sm px-4 py-2 border border-border rounded text-body hover:border-border-2 hover:text-heading transition-colors">
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/photo.png"
            alt={about.name}
            className="w-full aspect-square object-cover object-top rounded border border-border"
          />
        </motion.div>
      </div>

      {/* Experience timeline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="border-t border-border pt-12 mb-20"
      >
        <div className="text-center mb-12">
          <p className="section-label mb-2">Experience</p>
          <h2 className="font-display font-bold text-3xl text-heading">What I've done so far.</h2>
        </div>

        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* Toolkit */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="border-t border-border pt-12"
      >
        <p className="section-label mb-6">Toolkit by Discipline</p>
        <div className="grid md:grid-cols-2 gap-6">
          {about.toolkit.map(({ discipline, tools }, i) => (
            <motion.div
              key={discipline}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-border bg-canvas-2 rounded p-5"
            >
              <h3 className="font-display font-semibold text-sm text-heading mb-3 flex items-center gap-2">
                <span className={`font-mono text-base ${i < 2 ? 'text-cyan' : 'text-amber'}`} aria-hidden="true">
                  {['◈', '◉', '◎', '◇'][i]}
                </span>
                {discipline}
              </h3>
              <ul className="flex flex-col gap-1.5" role="list">
                {tools.map(t => (
                  <li key={t} className="font-mono text-xs text-muted flex items-center gap-2">
                    <span className="text-border-2" aria-hidden="true">—</span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
