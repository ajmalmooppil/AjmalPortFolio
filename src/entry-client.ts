import { createPortfolioApp } from './app'
import './style.css'

const root = document.querySelector('#app')
const { app, router } = createPortfolioApp({ hydrate: !!root?.firstElementChild })

router.isReady().then(() => {
  app.mount('#app')
})
