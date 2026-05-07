import { createPinia } from 'pinia'
import { createApp, createSSRApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

const routes = [
  {
    path: '/',
    component: () => import('./views/HomeView.vue'),
  },
]

interface PortfolioAppOptions {
  hydrate?: boolean
}

export function createPortfolioApp(options: PortfolioAppOptions = {}) {
  const shouldHydrate = options.hydrate || import.meta.env.SSR
  const app = shouldHydrate ? createSSRApp(App) : createApp(App)
  const router = createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      return { top: 0 }
    },
  })

  app.use(createPinia())
  app.use(router)

  return { app, router }
}
