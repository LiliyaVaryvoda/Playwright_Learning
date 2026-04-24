import { Browser, chromium, Page , expect} from "@playwright/test";

async function globalSetup() {
    const browser: Browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page: Page = await context.newPage()

    await page.goto('https://www.demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('test')
    await page.locator('#loginpassword').fill('test')
    await page.getByRole('button', { name: 'Log in' }).click()
    await page.waitForTimeout(3000)
    await expect(page.locator('#logout2')).toBeVisible()

    // Save the state

    await page.context().storageState({path: './LoginAuth.json'})

    await browser.close()
}



export default globalSetup;