import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    private itemsList: Locator;
    private itemsDescription: Locator;
    private itemsPrice: Locator;

    constructor(page: Page) {
        this.itemsList = page.locator("[data-test='inventory-item-name']");
        this.itemsDescription = page.locator("[data-test='inventory-item-desc']");
        this.itemsPrice = page.locator("[data-test='inventory-item-price']");
    }

    async getItemsList(): Promise<string[]> {
        return await this.itemsList.allTextContents();
    }

    async getItemsDescription(): Promise<string[]> {
        return await this.itemsDescription.allTextContents();
    }

    async getItemsPrice(): Promise<string[]> {
        return await this.itemsPrice.allInnerTexts();
    }
} 