
require('dotenv').config();

const { test, expect } = require('../fixtures/testDataFixture');

test('admin page - search system user', async ({ page, systemusers }) => {
  await page.goto(process.env.PROJECT_DASHBOARD);

  await systemusers.openAdminPage();

  await systemusers.Username(process.env.SYSTEM_USERNAME);

  await systemusers.UserRole();

  await systemusers.EmployeeStatus();
});