import {
  Component,
  Server,
  Terminal,
  Coffee,
  Leaf,
  Smartphone,
  Database,
  Box,
  Cloud,
  Plug,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react'

export interface Technology {
  name: string
  category: string
  icon: LucideIcon
}

export const technologies: Technology[] = [
  { name: 'React', category: 'Frontend', icon: Component },
  { name: 'Django', category: 'Backend', icon: Server },
  { name: 'Python', category: 'Backend', icon: Terminal },
  { name: 'Java', category: 'Backend', icon: Coffee },
  { name: 'Spring Boot', category: 'Backend', icon: Leaf },
  { name: 'Flutter', category: 'Mobile', icon: Smartphone },
  { name: 'PostgreSQL', category: 'Base de données', icon: Database },
  { name: 'Docker', category: 'DevOps', icon: Box },
  { name: 'Cloud', category: 'Infrastructure', icon: Cloud },
  { name: 'APIs', category: 'Intégration', icon: Plug },
  { name: 'AI / Machine Learning', category: 'Data', icon: BrainCircuit },
]
