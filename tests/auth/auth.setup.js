require('dotenv').config();

const { test } = require('@playwright/test')
const fs = require('fs');
const path = require('path');
const authFile = path.join(__dirname, '../../playwright/.auth/user.json');
const {LoginFunction}=require('../../PageObjects/Login_Page')


test('authenticate', async ({ page }) => {

    
    const login=new LoginFunction(page)
    await login.openUrl()
    await login.Userlogin(process.env.HRM_USERNAME,process.env.HRM_PASSWORD)
    fs.mkdirSync(path.dirname(authFile), { recursive: true });

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    })
    console.log('Authentication state saved successfully');

})