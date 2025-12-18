    import Login_Page from '../page_objects/LoginPage.ts';
    import Navbar_Section from '../page_objects/NavbarSection.ts';



export default class App
{

    constructor(page: any) {
        this.login_page = new Login_Page(page)
        this.navbar_section = new Navbar_Section(page)

        
    }


   login_page
   navbar_section
    
}

module.exports =App