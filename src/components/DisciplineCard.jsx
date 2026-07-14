import { Tilt } from 'react-tilt'

export default function DisciplineCard({ discipline }) {
  const { label, color, icon, summary, skills } = discipline
  const isCyan = color === 'cyan'

  return (
    <Tilt
      options={{ max: 12, scale: 1.02, speed: 400 }}
      className="gradient-border w-full h-full"
    >
      <article className="gradient-border-inner p-6 flex flex-col gap-4 shadow-card group h-full">
        <div className="flex items-center gap-3">
          <span
            className={`font-mono text-xl ${isCyan ? 'text-cyan' : 'text-amber'}`}
            aria-hidden="true"
          >
            {icon}
          </span>
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
