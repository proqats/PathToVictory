class Systemusers {
    constructor(page) {
        this.page = page
        //
        this.userRoleDropdown = page.locator('.oxd-select-text-input').first()

    }
    //admin tab
    async openAdminPage() {
        await this.page.locator('.oxd-main-menu-item')//await this.page.getByRole('link', { name: 'Admin' }).click();
            .filter({ hasText: 'Admin' })
            .click()
    }
    //username
    async Username(username) {
        await this.page.locator('.oxd-form-row .oxd-input').fill(username)
    }
    async UserRole() {
        //User role
        //await this.page.locator('.oxd-input').last().click()
        await this.userRoleDropdown.click()
        //Drop Down
        const options = this.page.getByRole('option')
        const count = await options.count()
        for (let i = 0; i < count; i++) {
            const text = await options.nth(i).textContent()
            if (text === 'ESS') {
                await options.nth(i).click()
                console.log('ESS Selected')

                break
            }
        }
    }


}
module.exports = { Systemusers }