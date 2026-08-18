import Reveal from './ui/Reveal'
import AboutVisual from './ui/AboutVisual'
import { aboutValues } from '../data/about'

export default function About() {
  return (
    <section id="a-propos" className="py-24 sm:py-28">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-14">
        <div>
          <Reveal className="flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              À propos de RIM Digital
            </span>
            <h2 className="text-3xl font-bold leading-[1.15] text-brand-dark sm:text-4xl">
              Une entreprise technologique tournée vers l'avenir.
            </h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              RIM Digital est une startup mauritanienne spécialisée dans la transformation digitale et
              les solutions technologiques. Nous aidons les entreprises et les institutions à repenser
              leurs outils, leurs processus et leurs services grâce à des solutions innovantes,
              évolutives et centrées sur les besoins réels de nos clients.
            </p>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Notre approche combine expertise technique, écoute attentive et vision produit, pour
              livrer des solutions qui créent une valeur durable.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition-shadow hover:shadow-md">
                  <div className="mb-3 inline-flex rounded-xl bg-brand-blue-light p-2.5">
                    <value.icon className="text-brand-blue" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-brand-dark">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <AboutVisual />
        </Reveal>
      </div>
    </section>
  )
}
