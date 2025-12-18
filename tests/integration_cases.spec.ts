
import { test, expect } from '@playwright/test';
import App from '../page_objects/App.ts'

const base_url_ui = 'https://bookcart.azurewebsites.net/';
const base_url_api = 'https://bookcart.azurewebsites.net/api/';
const USER = 'adsmin';
const user_id = '13208';


test('TC_API_2 Get categories list @integration', async ({ page, request }) => {

    const app = new App(page)
    await page.goto(`${base_url_ui}login`);

    await app.login_page.login_account("adsmin", "ASDF@12345a")

    const response = await request.get("https://bookcart.azurewebsites.net/api/Book/GetCategoriesList")

    expect(response.ok()).toBeTruthy();

    const data = await response.json();


    for (const item of data) {

        const categoryElement = page.getByText(item.categoryName, { exact: true });

        await expect(categoryElement).toBeVisible();
    }
});

test('TC_API_UI_3	Get cart by user  @integration', async ({ page, request }) => {

    const app = new App(page)
    await page.goto(`${base_url_ui}login`);

    await app.login_page.login_account("adsmin", "ASDF@12345a")

await page.waitForTimeout(2000)
    await app.navbar_section.click_cart_btn()

    const response = await request.get(`${base_url_api}ShoppingCart/${user_id}`);

    expect(response.ok()).toBeTruthy();

    const data = await response.json();


    for (const item of data) {

        const bookTitle = page.getByText(item.book.title, { exact: true }).first();

        await expect(bookTitle).toBeVisible();
    }
});