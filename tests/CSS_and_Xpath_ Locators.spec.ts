import {test, expect} from '@playwright/test'

test.describe('Locators', ()=> {
    test('CSS locators', async({page})=>{
        await page.goto('https://demo.nopcommerce.com/')
        const searchInput = page.locator('#small-searchterms')
        const searchBtn = page.getByRole('button', {name:'Search'})
        await searchInput.fill('iphone')
        await searchBtn.click()
    })


        test('Xpath locators', async({page})=>{
        await page.goto('https://demo.nopcommerce.com/')
        const searchInput = page.locator('//input[@placeholder="Search store"]')
        const searchBtn = page.locator('//button[text()="Search"]')
        await searchInput.fill('iphone')
        await searchBtn.click()
    })
})