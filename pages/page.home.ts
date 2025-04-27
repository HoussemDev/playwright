import type { Page } from 'playwright';
import { isVisible } from '../common/common_actions';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(email: string) {
        await this.page.goto(email);
    }

    // async goToLoginPage() {
    //     await this.page.click('a.ico-login');
    // }

    async userIsLoggedIn(): Promise<boolean> {
        return await isVisible(this.page, 'a[routerlink="/editor"]');
    } 

    // async goToSettings() {
    //     await this.page.click('a[routerlink="/settings"]');
    // }
}