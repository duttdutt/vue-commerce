export type CardItem = {
  id: number
  label: string
  description: string
  slug: string
  isDiscount: boolean,
  price: number
}

export const cardItems: CardItem[] = [
  {
    id: 0,
    label: 'Starter Pack',
    description: 'Everything you need to get started quickly and efficiently.',
    slug: 'starter-pack',
    isDiscount: true,
    price: 1
  },
  {
    id: 1,
    label: 'Pro Tools',
    description: 'Advanced tools for professional developers and designers.',
    slug: 'pro-tools',
    isDiscount: false,
    price: 1000
  },
  {
    id: 2,
    label: 'Design Kit',
    description: 'A curated set of design assets and components.',
    slug: 'design-kit',
    isDiscount: true,
    price: 1000
  },
  {
    id: 3,
    label: 'Analytics Booster',
    description: 'Boost your insights with powerful analytics features.',
    slug: 'analytics-booster',
    isDiscount: false,
    price: 1000
  },
  {
    id: 4,
    label: 'Collaboration Suite',
    description: 'Work better together with real-time collaboration features.',
    slug: 'collaboration-suite',
    isDiscount: false,
    price: 1000
  },
  {
    id: 5,
    label: 'Security Module',
    description: 'Enhance your app security with modern protection tools.',
    slug: 'security-module',
    isDiscount: true,
    price: 2500
  },
  {
    id: 6,
    label: 'Mobile Essentials',
    description: 'Optimized tools and layouts for mobile-first development.',
    slug: 'mobile-essentials',
    isDiscount: false,
    price: 2500
  },
  {
    id: 7,
    label: 'Performance Pack',
    description: 'Speed up your app with performance-focused components.',
    slug: 'perfomance-pack',
    isDiscount: false,
    price: 2500
  }
]
