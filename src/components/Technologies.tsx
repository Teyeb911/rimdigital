import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { technologies } from '../data/technologies'

export default function Technologies() {
  return (
    <section className="bg-brand-dark py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Notre stack technique"
          title="Les technologies au service de vos projets."
          subtitle="Un socle technologique moderne, robuste et adapté à chaque type de projet."
          light
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={(i % 4) * 0.06}>
              <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white/[0.08]">
                <div className="rounded-lg bg-white/10 p-2.5 text-brand-green transition-colors group-hover:text-white">
                  <tech.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{tech.name}</p>
                  <p className="mt-0.5 text-xs text-white/50">{tech.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
