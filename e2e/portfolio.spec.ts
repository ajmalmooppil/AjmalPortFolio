import { test, expect } from '@playwright/test'

const appUrl = '/AjmalPortFolio/'

test('renders the portfolio home page', async ({ page }) => {
  await page.goto(appUrl, { waitUntil: 'domcontentloaded' })

  await expect(page.getByRole('heading', { name: /Full-Stack/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Ajmal Sadiqe/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /Let's Talk/i }).first()).toBeVisible()
})

test('opens the mobile navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(appUrl, { waitUntil: 'domcontentloaded' })

  await page.locator('.hamburger').click()

  await expect(page.locator('.mobile-nav.open')).toBeVisible()
  await expect(page.locator('.mobile-link', { hasText: 'Work' })).toBeVisible()
})

test('lets visitors interact with the contact form', async ({ page }) => {
  await page.goto(appUrl, { waitUntil: 'domcontentloaded' })

  await page.getByRole('link', { name: /Let's Talk/i }).first().click()
  await expect(page.locator('#contact')).toBeVisible()

  const form = page.locator('.contact-form')

  await form.locator('input[name="name"]').fill('Ajmal')
  await form.locator('input[name="email"]').fill('ajmal@example.com')
  await form.locator('input[name="phone"]').fill('+91 98765 43210')
  await form.getByRole('button', { name: /Website/i }).click()
  await form.getByRole('option', { name: /Backend API/i }).click()
  await form.locator('textarea[name="message"]').fill('I need help building an API.')

  await expect(form.getByRole('button', { name: /Backend API/i })).toBeVisible()
})

test('moves through featured project slides', async ({ page }) => {
  await page.goto(appUrl, { waitUntil: 'domcontentloaded' })

  await expect(page.locator('.slider-count')).toHaveText('1 / 4')
  await page.getByRole('button', { name: 'Next project' }).click()

  await expect(page.locator('.slider-count')).toHaveText('2 / 4')
  await expect(page.getByRole('heading', { name: /Mobile Application/i })).toBeVisible()
})
