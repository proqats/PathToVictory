
const {test, expect}=require('../fixtures/testDataFixture')
test('login functionality with valid credentials', async ({ loginpage }) => {
  await loginpage.openUrl()
  await loginpage.Userlogin(process.env.USERNAME,process.env.PASSWORD)
 
});


