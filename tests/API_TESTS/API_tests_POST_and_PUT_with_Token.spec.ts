import { test, expect } from '@playwright/test'

test.describe('API login', () => {
    test('API test: POST and PUT with token', async ({ request }) => {

        const responseAuth = await request.post('https://restful-booker.herokuapp.com/auth', {
            data: {
                "username": "admin",
                "password": "password123"
            }, headers: { "Content-Type": "application/json" }
        })
        expect(responseAuth.status()).toBe(200)
        const responseAuthJSON = await responseAuth.json()
        const tokenAuth = responseAuthJSON.token




        const responseNewBooking = await request.post('https://restful-booker.herokuapp.com/booking', {
            headers: { 'Content-Type': 'application/json' },
            data: {
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        })
        expect(responseNewBooking.status()).toBe(200)
        const responseNewBookingJSON = await responseNewBooking.json()
        const bookingID = responseNewBookingJSON.bookingid



        const responseUpdatedBooking = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingID}`, {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Cookie': `token=${tokenAuth}` }, data: {
                "firstname": "James",
                "lastname": "Brown",
                "totalprice": 200,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast and Lunch"
            }
        })
        expect(responseUpdatedBooking.status()).toBe(200)
        expect(responseUpdatedBooking.statusText()).toBe('OK')
        const responseUpdatedBookingJSON = await responseUpdatedBooking.json()
        expect(responseUpdatedBookingJSON.totalprice).toBe(200)
        expect(responseUpdatedBookingJSON.additionalneeds).toBe('Breakfast and Lunch')




        const responseGetUpdatedBooking = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`)
        expect(responseGetUpdatedBooking.status()).toBe(200)
        const responseGetUpdatedBookingJSON = await responseGetUpdatedBooking.json()
        expect(responseGetUpdatedBookingJSON.totalprice).toBe(200)
        expect(responseGetUpdatedBookingJSON.additionalneeds).toBe('Breakfast and Lunch')

    })
})