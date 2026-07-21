import { contact, about } from '../data/projects'

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="section-label mb-2">Contact</p>
        <h1 className="font-display font-bold text-4xl text-heading tracking-tight mb-4">
          Let's talk
        </h1>
        <p className="text-body leading-relaxed max-w-lg">
          Open to product and data roles, advisory conversations, and anything at the intersection of the two. If you have something interesting, send a note.
        </p>
      </div>


      {/* Email CTA */}
      <div className="border border-border bg-canvas-2 rounded p-8 mb-8">
        <p className="section-label mb-3">Email</p>
        <a
          href={`mailto:${contact.email}`}
          className="font-display font-semibold text-2xl text-cyan hover:underline break-all"
        >
          {contact.email}
        </a>
        <p className="font-mono text-xs text-muted mt-2">
          Best way to reach me — I typically reply within 24–48 hours.
        </p>
      </div>

      {/* Social links */}
      <div className="border border-border bg-canvas-2 rounded p-8">
        <p className="section-label mb-5">Elsewhere</p>
        <ul className="flex flex-col gap-4" role="list">
          {contact.links.map(({ label, url }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-border last:border-0 hover:border-border-2 transition-colors"
              >
                <span className="font-display font-medium text-heading group-hover:text-cyan transition-colors">
                  {label}
                </span>
                <span className="font-mono text-xs text-muted group-hover:text-cyan transition-colors">
                  {url.replace('https://', '')} →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

    </main>
  )
}
