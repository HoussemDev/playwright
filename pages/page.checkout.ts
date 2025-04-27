import { expect } from '@playwright/test';
import type { Page } from 'playwright';

export class Checkout {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isUserInCheckoutPage() {
        await this.page.waitForSelector('#checkout_info_container', { state: 'visible' });
        await expect(this.page.locator('#checkout_info_container').first()).toBeVisible();
    }

    async isUserInCheckoutSummaryPage() {
        await this.page.waitForSelector('#checkout_summary_container', { state: 'visible' });
        await expect(this.page.locator('#checkout_summary_container').first()).toBeVisible();
    }

    async isUserInCheckoutSuccessyPage() {
        await this.page.waitForSelector('#checkout_complete_container', { state: 'visible' });
        await expect(this.page.locator('#checkout_complete_container').first()).toBeVisible();
    }

    async completeAddressForm(firstName: string, lastName: string, zipCode: string) {
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(zipCode);
    }


    async clickContinueBtn() {
        await this.page.click('#continue');
    }

    async clickFinishCheckoutBtn() {
        await this.page.click('#finish');
    }

}