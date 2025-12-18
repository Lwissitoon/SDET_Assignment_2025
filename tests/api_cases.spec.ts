import { test, expect } from '@playwright/test';


const base_url = 'https://bookcart.azurewebsites.net/api/';
const USER = 'adsmin';
const user_id = '13208';
const bookId = 32

test('TC_API_5 Validate username @api', async ({ request }) => {
    const response = await request.get(`${base_url}User/validateUserName/${USER}`);

    expect(response.ok()).toBeTruthy();
    expect(response.body()).toBeTruthy();


});


test('TC_API_1 Get book by valid ID @api', async ({ request }) => {

    const response = await request.get(`${base_url}Book/${bookId}`);

    expect(response.ok()).toBeTruthy();

    const data = await response.json();


    expect(data.author).toContain("Sarah MacLean");
});

test('TC_API_6 Add to cart (valid) @api', async ({ request }) => {

    const response = await request.post(`${base_url}ShoppingCart/AddToCart/${user_id}/${bookId}`);

    expect(response.ok()).toBeTruthy();

    const data = await response.text();


    expect(data).toContain("Sarah MacLean");
});

test('TC_API_3 Get cart by user @api', async ({ request }) => {

    const response = await request.get(`${base_url}ShoppingCart/${user_id}`);

    expect(response.ok()).toBeTruthy();

    const data = await response.text();


    expect(data).toContain("Sarah MacLean");
});

test('TC_API_4 Remove from cart @api', async ({ request }) => {

    const response = await request.delete(`${base_url}ShoppingCart/${user_id}`);

    expect(response.ok()).toBeTruthy();

    const data = await response.text();


    expect(data).toEqual("0");
});