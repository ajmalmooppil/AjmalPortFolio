import { renderToString } from '@vue/server-renderer'

import { createPortfolioApp } from './app'

export async function render(url: string) {
  const { app, router } = createPortfolioApp({ hydrate: true })

  await router.push(url)
  await router.isReady()

  return {
    html: await renderToString(app),
  }
}
