import { Tilt } from 'react-tilt'

export default function DisciplineCard({ discipline }) {
  const { label, color, icon, summary, skills } = discipline
  const isCyan = color === 'cyan'

  return (
    <Tilt
      options={{ max: 10, scale: 1.02, speed: 500, glare: true, 'max-glare': 0.08 }}
      className="gradient-border w-full h-full"
    >
      <article className="gradient-border-inner p-6 flex flex-col gap-4 shadow-card group h-full rounded-2xl">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: isCyan
                ? 'rgba(139,92,246,0.12)'
                : 'rgba(6,182,212,0.12)',
              border: `1px solid ${isCyan ? 'rgba(139,92,246,0.25)' : 'rgba(6,182,212,0.25)'}`,
            }}
          >
            <span
              className={`font-mono text-base ${isCyan ? 'text-cyan' : 'text-amber'}`}
              aria-hidden="true"
            >
              {icon}
            </span>
          </div>
          <h3 className="font-display font-semibold text-heading text-base">{label}</h3>
        </div>

        <p className="text-sm text-body leading-relaxed flex-1">{summary}</p>

        <ul className="flex flex-wrap gap-1.5" aria-label={`${label} skills`}>
          {skills.map(skill => (
            <li key={skill}>
              <span className={isCyan ? 'tag-cyan' : 'tag-amber'}>{skill}</span>
            </li>
          ))}
        </ul>
      </article>
    </Tilt>
  )
}
