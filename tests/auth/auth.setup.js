require('dotenv').config();

const { test,expect } = require('@playwright/test')
const fs = require('fs');
const path = require('path');
const authFile = path.join(__dirname, '../../playwright/.auth/user.json');
const {LoginFunction}=require('../../PageObjects/Login_Page')


test('authenticate', async ({ page }) => {

    
    const login=new LoginFunction(page)
    await login.openUrl()
    await login.Userlogin(process.env.HRM_USERNAME,process.env.HRM_PASSWORD)
    await expect(page).toHaveURL(/dashboard/);
    fs.mkdirSync(path.dirname(authFile), { recursive: true });

    await page.context().storageState({
        path: authFile
    })
    console.log('Authentication state saved successfully');

})