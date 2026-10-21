class LoginFunction {
    constructor(page) {
        this.page = page
    }

    async openUrl() {
        await this.page.goto(process.env.PROJECT_URL)
    }
    async Userlogin(username, password) {
        await this.page.getByPlaceholder('Username').fill(username)
        await this.page.getByPlaceholder('Password').fill(password)
        await this.page.getByRole('button',{name:'Login'}).click()
    }
}
module.exports={LoginFunction}