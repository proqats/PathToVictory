
require('dotenv').config();

const { test, expect } = require('../fixtures/testDataFixture');

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});

test('login functionality with valid credentials', async ({ loginpage, page }) => {
    await loginpage.openUrl();

    await loginpage.Userlogin(
        process.env.HRM_USERNAME,
        process.env.HRM_PASSWORD
    );

    await expect(page).toHaveURL(/dashboard/);
});
