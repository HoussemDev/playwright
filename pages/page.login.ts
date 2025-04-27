import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string) {
        await this.page.waitForSelector('#user-name', { state: 'visible' });

        await this.page.locator('#user-name').fill(email);
        await this.page.locator('#password').fill(password);
        await this.page.click('#login-button');
    }
}