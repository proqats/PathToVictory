const { test, expect } = require('@playwright/test')
class Systemusers {
    constructor(page) {
        this.page = page
        //
        this.userRoleDropdown = page.locator('.oxd-select-text-input').first()
        this.StatusDropdown = page.locator('.oxd-select-text').last()

    }
    //admin tab
    async openAdminPage() {
        await this.page.getByRole('link', { name: 'Admin' }).click()
    }
    //username
    async Username(username) {
        const userField = await this.page.locator('.oxd-form-row .oxd-input')
        await userField.fill(username)
        await expect(userField).toHaveValue(username)
        const value = await userField.inputValue();
        console.log(value);
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
    //
    async EmployeeStatus() {
        await this.StatusDropdown.click()

        await this.page.getByRole('option', { name: 'Enabled' }).click()
        await expect(this.StatusDropdown).toHaveText('Enabled')
    }


}
module.exports = { Systemusers }