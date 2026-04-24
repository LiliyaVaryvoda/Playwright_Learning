import { test, expect, chromium } from "@playwright/test";

// Browser --> context --> page
// test.describe("Browser tests", () => {
  // test("Create a page from context", async ({context}) => {
  //   const page = await context.newPage()
  //   await page.goto('https://testautomationpractice.blogspot.com/')
  // })

  // test("Create a context from browser", async({browser}) => {
  //   const context = await browser.newContext()
  //   const page = await context.newPage()
  //   await page.goto('https://testautomationpractice.blogspot.com/')
  // })

  // test('Create a new browser', async()=>{
  //   const browser = await chromium.launch()
  //   const context = await browser.newContext()
  //   const page = await context.newPage()
  //   await page.goto('https://testautomationpractice.blogspot.com/')
  // })

  // test('Create multiple pages (windows) within the same context', async({context}) => {
  //   const page1 = await context.newPage()
  //   const page2 = await context.newPage()
  //   await page1.goto('https://testautomationpractice.blogspot.com/')
  //   await page2.goto('https://google.com')
  //   console.log(context.pages().length)
  // })


  //   test('Create multiple pages (tabs) within the same context', async({context}) => {
  //   const page1 = await context.newPage()
  //   const page2 = await context.newPage()
  //   console.log('Number of pages creaed', context.pages().length)
  //   await page1.goto('https://testautomationpractice.blogspot.com/')
  //   await expect(page1).toHaveTitle('Automation Testing Practice')
  //   await page2.goto('https://google.com')
  // })


  // New tab is a new page created inside the context so it is needed to wait for event in context
  // test('Handle multiple tabs when child page is opened from parent page', async({context})=>{
  //   const parentPage = await context.newPage()
  //   await parentPage.goto('https://testautomationpractice.blogspot.com/')
  //   await expect(parentPage).toHaveTitle('Automation Testing Practice')
  //   const buttonNewPage = parentPage.getByRole('button', {name:'New Tab'})
  //   const [newTabPage] = await Promise.all([context.waitForEvent('page'), buttonNewPage.click()])
  //   await newTabPage.waitForLoadState()
  //   await expect(newTabPage).toHaveTitle('SDET-QA Blog')
  // })


  // Dialog is synchronous event and it blocks JS execution 
  // Dialog belongs to the page, not to the context
  // Use page.on instead of Promise.all
  // Using expect for popup title should be without await as it is checking string
  // First event listener, then button click
  // test('Handle popup', async({context})=>{
  //   const parentPage = await context.newPage()
  //   await parentPage.goto('https://testautomationpractice.blogspot.com/')
  //   const simpleAlert = parentPage.locator('#alertBtn')
  //   parentPage.on('dialog', async dialog => {
  //   expect(dialog.message()).toContain('I am an alert box!')
  //   await new Promise(resolve => setTimeout(resolve, 5000))
  //   dialog.accept()
  //   })
  //   await simpleAlert.click()
  // })


  //   test('HTTP Auth', async({browser})=>{
  //     const context = await browser.newContext({httpCredentials:{username: 'admin', password:'admin'}})
  //     const page = await context.newPage()
  //       await page.goto('https://the-internet.herokuapp.com/basic_auth')
  //       const pageTitle = page.getByRole('heading', {name:'Basic Auth'})
  //       await expect(pageTitle).toBeVisible()
  // })
// })
