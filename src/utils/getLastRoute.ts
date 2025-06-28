import router from '@/router.ts'

router.afterEach((to) => {
  localStorage.setItem('last-route', to.fullPath)
})

const lastRoute = localStorage.getItem('last-route')

if (lastRoute && lastRoute !== location.pathname) {
  router.replace(lastRoute)
}