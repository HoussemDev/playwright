import { expect } from '@playwright/test';
import type { Page } from 'playwright';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isUserInCartPage() {
        await this.page.waitForSelector('#cart_contents_container', { state: 'visible' });
        await expect(this.page.locator('#cart_contents_container').first()).toBeVisible();
    }

    async proceedToCheckoutPage() {
     await this.page.click('#checkout');
    }

}