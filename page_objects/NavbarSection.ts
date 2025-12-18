
export default class NavbarSection {

    page
    constructor(page: any) {
        this.page = page

    }

    user_icon = '//a[@aria-haspopup="menu"]'
    logout_btn = '//button[.="Logout"]'
    cart_btn = '//mat-toolbar-row//button[2]'



    async logout_account() {
        let user_icon = await this.page.locator(this.user_icon)
        let logout_btn = await this.page.locator(this.logout_btn)
        await user_icon.click()
        await logout_btn.click()


    }

        async click_cart_btn() {
        let element = await this.page.locator(this.cart_btn)
        await element.click()


    }


}

module.exports = NavbarSection;