import SectionHeading from './ui/SectionHeading'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ce que nous faisons"
          title="Nos services"
          subtitle="Des solutions technologiques conçues pour répondre aux défis de votre organisation."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
