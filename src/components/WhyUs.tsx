import Reveal from './ui/Reveal'
import WhyUsVisual from './ui/WhyUsVisual'
import { whyUsItems } from '../data/about'

export default function WhyUs() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <WhyUsVisual />
        </Reveal>

        <div>
          <Reveal className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              Notre différence
            </span>
            <h2 className="text-3xl font-bold leading-[1.15] text-brand-dark sm:text-4xl">
              Pourquoi choisir RIM Digital ?
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-5">
            {whyUsItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-sm font-bold text-brand-green">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-dark">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
