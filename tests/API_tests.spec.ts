import {test, expect} from '@playwright/test'

test.describe('API testing', ()=> {
    test('GET API test', async({request}) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
        const jsonResponse = await response.json()
        const responseHeaders = response.headers()
        console.log(responseHeaders)

    })
})