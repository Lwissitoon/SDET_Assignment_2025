
export default class loginPage {

    page
    constructor(page: any) {
        this.page = page

    }

    user_name = '//input[@formcontrolname="username"]'
    password = '//input[@formcontrolname="password"]'
    login_btn = '//span[.="Login"]'


    async login_account(user: string, password: string) {
        let username = this.page.locator(this.user_name)
        let pass = this.page.locator(this.password)
        let login_btn = this.page.locator(this.login_btn)
        await username.fill(user)
        await pass.fill(password)
        login_btn.click()


    }


}

module.exports = loginPage;