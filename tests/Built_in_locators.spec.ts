import {test, expect} from '@playwright/test'

test.describe('Built-in locators', ()=> {
    // test('By alt text -> for images', async({page})=>{
    // })

    //     test('Radio and checkbox', async({page})=>{
    //         await page.goto('https://testautomationpractice.blogspot.com/')
    //         const radioFem = page.locator('#female')
    //         const checkboxTuesday = page.locator('#tuesday')
    //         await radioFem.check()
    //         await checkboxTuesday.check()
    // })

    //         test('Dropdown select', async({page})=>{
    //             await page.goto('https://testautomationpractice.blogspot.com/')
    //             const dropdownValue = page.locator('.form-control#country')
    //             await dropdownValue.selectOption({value : "france"})
    //             // check number of options in dropdown
    // })


    //         test('Api test', async({request})=>{
    //             const response = await request.get('hhhh')
    //             await expect(response.status()).toBe(200)
    //             const body = await response.json()
    //             await expect(body).toHaveProperty('id', 2)
    // })


            test('Get all cookies', async({context, page})=>{
                await page.goto('')
                const cookies = await context.cookies() // array
                const sessionCOokies = cookies.find(c => c.name = 'session')
                expect (sessionCOokies?.value).toBeDefined()
                //await context.addCookies([{value:'123'}])

    })

})