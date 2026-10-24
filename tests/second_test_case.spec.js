
const { test, expect } = require('../fixtures/testDataFixture')
const { Systemusers } = require('../PageObjects/admin_page')

test('admin page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    const systemusers = new Systemusers(page)
    await systemusers.openAdminPage()
    await systemusers.Username(process.env.HRM_USERNAME)
    await systemusers.UserRole()
    await expect(systemusers.userRoleDropdown)
        .toHaveText('ESS')
})