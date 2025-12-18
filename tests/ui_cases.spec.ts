
import { test, expect } from '@playwright/test';
import App from '../page_objects/App.ts'

const base_url = 'https://bookcart.azurewebsites.net/';
const USER = 'adsmin';


test('TC_UI_1 Login with valid credentials @ui', async ({ page }) => {

    const app = new App(page)
    await page.goto(`${base_url}login`);
    `${base_url}User/validateUserName/${USER}`

    await app.login_page.login_account("adsmin","ASDF@12345a")

    await expect(page).toHaveTitle(/Home/);
});

test('TC_UI_2 Login with invalid password @ui', async ({ page }) => {

    const app = new App(page)
    await page.goto(`${base_url}login`);

    await app.login_page.login_account("adsmin","qwqw")

    await expect(page).toHaveTitle(/Login/);
});

test('TC_UI_3 Login with empty fields @ui', async ({ page }) => {

    const app = new App(page)
    await page.goto(`${base_url}login`);

    await app.login_page.login_account("","")

    await expect(page.getByText('Username is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();


});

test('TC_UI_4 Verify logout functionality @ui', async ({ page }) => {

    const app = new App(page)
    await page.goto(`${base_url}login`);
    `${base_url}User/validateUserName/${USER}`

    await app.login_page.login_account("adsmin","ASDF@12345a")
    await expect(page.getByText('adsmin')).toBeVisible();

    await app.navbar_section.logout_account()
    await expect(page).toHaveTitle(/Login/);
});