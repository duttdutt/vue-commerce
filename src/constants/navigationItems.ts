export type NavigationItem = {
  id: number
  label: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  { id: 0, label: 'Home', href: '/' },
  { id: 1, label: 'Catalog', href: '/catalog' },
  { id: 2, label: 'Basket', href: '/basket' }
]
