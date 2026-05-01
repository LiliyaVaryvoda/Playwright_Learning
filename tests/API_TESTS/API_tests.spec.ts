import { test, expect } from '@playwright/test'

test.describe('API testing', () => {
    test('API test: GET', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
        const jsonResponse = await response.json()
        const responseHeaders = response.headers()
        const responseHeadersArray = response.headersArray()
        const statusCode = response.status()
        expect(statusCode).toBe(200)
        expect(response.statusText()).toBe('OK')
        expect(response.ok()).toBeTruthy()
        expect(jsonResponse).toHaveProperty('userId', 1)
    })


    test('API test: POST', async ({ request }) => {
        const response = await request.post('https://restful-booker.herokuapp.com/auth', {
            headers: { "Content-Type": "application/json" }, data: {
                "username": "admin",
                "password": "password123"
            }
        })

        const statusCode = response.status()
        expect(statusCode).toBe(200)
        const jsonBody = await response.json()
        expect(jsonBody.token).toBeTruthy()
    })
})