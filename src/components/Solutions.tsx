import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { solutions } from '../data/solutions'

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Solutions"
          title="Des solutions pensées pour votre croissance."
          subtitle="Quel que soit votre profil, nous adaptons notre accompagnement à vos enjeux."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal key={solution.id} delay={i * 0.1} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="inline-flex w-fit rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green p-4 text-white shadow-md shadow-brand-blue/20">
                  <solution.icon size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-dark">{solution.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{solution.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all group-hover:gap-2.5"
                >
                  {solution.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
