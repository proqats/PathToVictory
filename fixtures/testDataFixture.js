require ('dotenv').config();
const {test: base, expect}=require('@playwright/test')
const {LoginFunction}=require('../PageObjects/Login_Page')

const test=base.extend({
      loginpage: async({page},use)=>{
        const loginpage=new LoginFunction(page)
        await use(loginpage)
      }
})
module.exports={test, expect}