import { Search, PenTool, Code2, LifeBuoy, type LucideIcon } from 'lucide-react'

export interface ProcessStep {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: Search,
    title: 'Comprendre',
    description: 'Nous analysons vos besoins, vos objectifs et vos contraintes.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Concevoir',
    description: "Nous définissons l'architecture et l'expérience utilisateur.",
  },
  {
    number: '03',
    icon: Code2,
    title: 'Développer',
    description: 'Nous transformons la conception en une solution fonctionnelle.',
  },
  {
    number: '04',
    icon: LifeBuoy,
    title: 'Accompagner',
    description: 'Nous assurons le déploiement, le suivi et l’évolution de la solution.',
  },
]
