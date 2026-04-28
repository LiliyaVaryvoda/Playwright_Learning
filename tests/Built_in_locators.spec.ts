import { test, expect } from '@playwright/test'

test.describe('Built-in locators', () => {
    test('By alt text -> for images', async ({ page }) => {
    })

    test('Radio and checkbox', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        const radioFem = page.locator('#female')
        const checkboxTuesday = page.locator('#tuesday')
        await radioFem.check()
        await checkboxTuesday.check()
    })

    test('Dropdown select', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/')
        const dropdownValue = page.locator('.form-control#country')
        await dropdownValue.selectOption({ value: "france" })
        // check number of options in dropdown
    })
})