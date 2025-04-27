
import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/page.home';
import { LoginPage } from '../pages/page.login';
import { InventoryPage } from '../pages/page.inventory';


test('User can login and logout', async ({ page }) => {
    const homepage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const inventory = new InventoryPage(page);

    
    await homepage.open(user.url);
    await loginPage.login(user.email, user.password)
    await inventory.isUserLoggedInSuccessfully();


  });