import {test, expect} from '@playwright/test'

test.use({storageState : './LoginAuth.json'})
test.describe('Reuse Auth state', ()=>{
    test('Reuse Auth state 1', async({page, context})=>{

        await page.goto('https://www.demoblaze.com/')
        await page.getByRole('link', {name: 'Laptops'}).click()
        await expect (page.getByText('Sony vaio i5')).toBeVisible()
        const cookies = await context.cookies('https://www.demoblaze.com/')
        const userCookie = cookies.find(cookie => cookie.name === 'user')
        expect(userCookie).toBeDefined()
        expect(userCookie).not.toBe(null)
    })
})