import {test, expect} from '@playwright/test'

test.use({storageState : './LoginAuth.json'})
test.describe('Login state', ()=>{
    test('Reuse login auth', async({page, context})=>{

await page.goto('https://www.demoblaze.com/')
        await page.getByRole('link', {name: 'Laptops'}).click()
        await expect (page.getByText('Sony vaio i5')).toBeVisible()
        const cookies = await context.cookies()
        console.log(cookies[0].name)
    })
})