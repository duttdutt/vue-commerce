import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import CatalogPage from './pages/CatalogPage.vue'
import ProductPage from './pages/ProductPage.vue'
import BasketPage from './pages/BasketPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog', component: CatalogPage },
  { path: '/basket', component: BasketPage },
  { path: '/product/:slug', component: ProductPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router