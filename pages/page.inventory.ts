import { expect } from '@playwright/test';
import type { Page } from 'playwright';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isUserLoggedInSuccessfully() {
        await this.page.waitForSelector('#inventory_container', { state: 'visible' });
        await expect(this.page.locator('#inventory_container').first()).toBeVisible();
    }

    async addToCart() {
     await this.page.click('#add-to-cart-sauce-labs-bike-light');
    }

    async clickMiniCart() {
        await this.page.click('#shopping_cart_container');
       }
}