import { createPortfolioApp } from './app'
import './style.css'

const { app, router } = createPortfolioApp()

router.isReady().then(() => {
  app.mount('#app')
})
