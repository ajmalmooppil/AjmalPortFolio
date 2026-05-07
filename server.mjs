import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production')
const port = Number(process.env.PORT || 5173)
const base = process.env.BASE || '/AjmalPortFolio/'
const clientDist = path.resolve(root, 'dist/client')
const serverEntry = path.resolve(root, 'dist/server/entry-server.js')

const mimeTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    appType: 'custom',
    base,
    root,
    server: { middlewareMode: true },
  })
}

async function serveStaticAsset(req, res, url) {
  if (!isProduction || !path.extname(url.pathname)) return false

  const assetPath = decodeURIComponent(url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname)
  const filePath = path.resolve(clientDist, assetPath)

  if (!filePath.startsWith(clientDist)) return false

  try {
    const file = await fs.readFile(filePath)
    res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' })
    res.end(file)
    return true
  } catch {
    return false
  }
}

async function handleRequest(req, res) {
  const requestUrl = new URL(req.url || '/', `http://${req.headers.host}`)

  if (await serveStaticAsset(req, res, requestUrl)) return

  try {
    if (vite) {
      await new Promise((resolve) => {
        vite.middlewares(req, res, resolve)
      })
      if (res.writableEnded) return
    }

    const url = requestUrl.pathname.startsWith(base)
      ? requestUrl.pathname.slice(base.length - 1) + requestUrl.search
      : requestUrl.pathname + requestUrl.search

    let template
    let render

    if (isProduction) {
      template = await fs.readFile(path.resolve(clientDist, 'index.html'), 'utf-8')
      render = (await import(pathToFileURL(serverEntry))).render
    } else {
      template = await fs.readFile(path.resolve(root, 'index.html'), 'utf-8')
      template = await vite.transformIndexHtml(requestUrl.pathname, template)
      render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
    }

    const rendered = await render(url)
    const html = template.replace('<!--app-html-->', rendered.html)

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(html)
  } catch (error) {
    vite?.ssrFixStacktrace(error)
    console.error(error)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error instanceof Error ? error.stack : String(error))
  }
}

http.createServer(handleRequest).listen(port, () => {
  console.log(`SSR server running at http://localhost:${port}${base}`)
})
