
const { test, expect } = require('../fixtures/testDataFixture')

test('login functionality with valid credentials', async ({ page }) => {
  //const loginpage = new LoginFunction(page)
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  //await page.goto('/')
  await expect(page).toHaveURL(/dashboard/);
});


