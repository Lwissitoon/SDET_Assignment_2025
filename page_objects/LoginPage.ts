
export default class loginPage {

    page
    constructor(page: any) {
        this.page = page

    }

    user_name = '//input[@formcontrolname="username"]'
    password = '//input[@formcontrolname="password"]'
    login_btn = '//span[.="Login"]'


    async login_account(user: string, password: string) {
        let username = await this.page.locator(this.user_name)
        let pass =await this.page.locator(this.password)
        let login_btn = await this.page.locator(this.login_btn)
        await username.fill(user)
        await pass.fill(password)
        await login_btn.click()


    }


}

module.exports = loginPage;