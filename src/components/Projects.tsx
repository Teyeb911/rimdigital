import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projets" className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nos projets"
          title="Des projets qui transforment les idées en résultats."
          subtitle="Exemples de projets illustrant notre expertise. Contenu de démonstration présenté à titre d'exemple."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-green">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <div className="relative rounded-2xl bg-white/15 p-5 backdrop-blur-sm ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                    <project.icon className="text-white" size={30} />
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-dark">
                    Démo
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-blue">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-brand-dark">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-green-light px-2.5 py-1 text-[11px] font-semibold text-brand-green"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all group-hover:gap-2.5"
                  >
                    Voir le projet
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
