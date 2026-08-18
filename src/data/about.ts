import { Sparkles, Cpu, Users, type LucideIcon } from 'lucide-react'

export interface ValueCard {
  icon: LucideIcon
  title: string
  description: string
}

export const aboutValues: ValueCard[] = [
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Nous concevons des solutions modernes adaptées aux nouveaux enjeux numériques.',
  },
  {
    icon: Cpu,
    title: 'Expertise',
    description: 'Nous combinons développement logiciel, technologies cloud, data et expertise métier.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.',
  },
]

export interface WhyUsItem {
  title: string
  description: string
}

export const whyUsItems: WhyUsItem[] = [
  {
    title: 'Solutions sur mesure',
    description: 'Nous adaptons chaque solution aux besoins spécifiques du client.',
  },
  {
    title: 'Technologies modernes',
    description: 'Nous utilisons des technologies modernes et des architectures évolutives.',
  },
  {
    title: 'Approche orientée métier',
    description: 'La technologie doit résoudre un problème réel et créer de la valeur.',
  },
  {
    title: 'Accompagnement continu',
    description:
      'Nous accompagnons nos clients de la conception jusqu’à la mise en production et l’évolution de la solution.',
  },
]

export interface TrustValue {
  title: string
}

export const trustValues: TrustValue[] = [
  { title: 'Solutions sur mesure' },
  { title: 'Technologies modernes' },
  { title: 'Accompagnement de proximité' },
  { title: 'Approche orientée résultats' },
]
