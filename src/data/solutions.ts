import { Building2, Landmark, Rocket, type LucideIcon } from 'lucide-react'

export interface Solution {
  id: string
  icon: LucideIcon
  title: string
  description: string
  cta: string
}

export const solutions: Solution[] = [
  {
    id: 'entreprises',
    icon: Building2,
    title: 'Entreprises',
    description: 'Solutions digitales pour améliorer la productivité et les opérations.',
    cta: 'Découvrir',
  },
  {
    id: 'institutions',
    icon: Landmark,
    title: 'Institutions',
    description: 'Plateformes numériques permettant de moderniser les services et processus.',
    cta: 'Découvrir',
  },
  {
    id: 'startups',
    icon: Rocket,
    title: 'Startups',
    description: "Accompagnement technique pour transformer rapidement une idée en produit digital.",
    cta: 'Découvrir',
  },
]
