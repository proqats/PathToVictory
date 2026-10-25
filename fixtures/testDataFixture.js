
require('dotenv').config();

const { test: base, expect } = require('@playwright/test');
const { LoginFunction } = require('../PageObjects/Login_Page');
const { Systemusers } = require('../PageObjects/admin_page');

const test = base.extend({
    loginpage: async ({ page }, use) => {
        const loginpage = new LoginFunction(page);
        await use(loginpage);
    },

    systemusers: async ({ page }, use) => {
        const systemusers = new Systemusers(page);
        await use(systemusers);
    }
});

module.exports = { test, expect };
