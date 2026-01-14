import puppeteer from 'puppeteer'
import { preview } from 'vite'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const routes = ['/', '/consulting', '/education', '/finance', '/contact']

async function prerender() {
  console.log('Starting prerender...')

  // Start preview server to serve the built files (no dev client injection)
  const server = await preview({
    root: join(__dirname, '..'),
    preview: { port: 4173, strictPort: false },
  })
  const port = server.resolvedUrls.local[0].match(/:(\d+)/)[1]
  console.log(`Server started on http://localhost:${port}`)

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  for (const route of routes) {
    console.log(`Prerendering ${route}...`)
    const page = await browser.newPage()

    try {
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      })

      // Wait a bit for React to fully render
      await page.waitForSelector('#root', { timeout: 10000 })
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Get the rendered HTML
      const html = await page.content()

      // Determine the output path
      const outputPath =
        route === '/'
          ? join(distDir, 'index.html')
          : join(distDir, route.slice(1), 'index.html')

      // Create directory if needed
      const outputDir = dirname(outputPath)
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true })
      }

      // Write the prerendered HTML
      writeFileSync(outputPath, html)
      console.log(`  -> Saved to ${outputPath}`)
    } catch (error) {
      console.error(`  Error prerendering ${route}:`, error.message)
    }

    await page.close()
  }

  await browser.close()
  await server.httpServer.close()
  console.log('Prerender complete!')
}

prerender().catch(console.error)
