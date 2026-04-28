import { test, expect } from '@playwright/test'

test.use({ httpCredentials: { username: 'admin', password: 'admin' } })
test.describe('Authentification tests', () => {
    test('Verify HTTP auth/Basic auth', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/basic_auth')
        const pageTitle = page.getByRole('heading', { name: 'Basic Auth' })
        await expect(pageTitle).toBeVisible()
    })


    test('Verify HTTP auth/Basic auth using context', async ({ browser }) => {
        const context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } })
        const page = await context.newPage()
        await page.goto('https://the-internet.herokuapp.com/basic_auth')
        const pageTitle = page.getByRole('heading', { name: 'Basic Auth' })
        await expect(pageTitle).toBeVisible()
        await context.close()
    })
})