import { test, Page, expect } from "@playwright/test";
import { LoginPage } from '../pages/login_page';
import { ProductsPage } from "../pages/products_page";

test.describe("Login Functionality", () => {
    test("valid login", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        let loginPage = new LoginPage(page);
        await loginPage.login("standard_user", "secret_sauce");
        let productsPage = new ProductsPage(page);
        let itemsList = await productsPage.getItemsList();
        console.log(itemsList);
        let itemsDescription = await productsPage.getItemsDescription();
        console.log(itemsDescription);
        let itemsPrice = await productsPage.getItemsPrice();
        console.log(itemsPrice);
    })
})