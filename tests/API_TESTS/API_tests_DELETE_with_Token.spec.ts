import { test, expect } from '@playwright/test'

test.describe('API testing', () => {
    test('API test: DELETE with token', async ({ request }) => {

        const responseAuth = await request.post('https://restful-booker.herokuapp.com/auth', {
            data: {
                "username": "admin",
                "password": "password123"
            }, headers: { 'Content-Type': 'application/json' }
        })

        expect(responseAuth.status()).toBe(200)

        const responseAuthJSON = await responseAuth.json()
        const token = responseAuthJSON.token
        expect(token).toBeTruthy()



        const responseCreateNewBooking = await request.post('https://restful-booker.herokuapp.com/booking', {
            headers: { 'Content-Type': 'application/json' },
            data: {
                "firstname": "Anna",
                "lastname": "Black",
                "totalprice": 100,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        })

        expect(responseCreateNewBooking.status()).toBe(200)
        expect(responseCreateNewBooking.statusText()).toBe('OK')

        const responseCreateNewBookingJSON = await responseCreateNewBooking.json()
        expect(responseCreateNewBookingJSON.booking).toMatchObject({
            firstname: "Anna",
            lastname: "Black",
            totalprice: 100,
            depositpaid: true,
            additionalneeds: "Breakfast"
        })

        const bookingID = responseCreateNewBookingJSON.bookingid
        expect(bookingID).toBeTruthy()



        const responseGetNewBooking = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`)

        expect(responseGetNewBooking.status()).toBe(200)
        const responseGetNewBookingJSON = await responseGetNewBooking.json()

        expect(responseGetNewBookingJSON.firstname).toBe('Anna')
        expect(responseGetNewBookingJSON.totalprice).toBe(100)



        const responseDeleteBooking = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingID}`, { headers: { 'Content-Type': 'application/json', 'Cookie': `token=${token}` }, })
        expect(responseDeleteBooking.status()).toBe(201)
        expect(responseDeleteBooking.statusText()).toBe('Created')

        const responseGetNewBookingDeleted = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`)
        expect(responseGetNewBookingDeleted.status()).toBe(404)
    })
})