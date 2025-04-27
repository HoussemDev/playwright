
import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/page.home';
import { LoginPage } from '../pages/page.login';
import { InventoryPage } from '../pages/page.inventory';
import { CartPage } from '../pages/page.cart';
import { Checkout } from '../pages/page.checkout';




test('User can perform checkout', async ({ page }) => {
    const homepage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkout = new Checkout(page);


    
    await homepage.open(user.url);
    await loginPage.login(user.email, user.password)
    await inventory.isUserLoggedInSuccessfully();
    await inventory.addToCart();
    await inventory.clickMiniCart();
    await cartPage.isUserInCartPage();
    await cartPage.proceedToCheckoutPage();
    await checkout.isUserInCheckoutPage();
    await checkout.completeAddressForm(user.firstName, user.lastName, user.zipdCode);
    await checkout.clickContinueBtn();
    await checkout.isUserInCheckoutSummaryPage();
    await checkout.clickFinishCheckoutBtn();
    await checkout.isUserInCheckoutSuccessyPage();



  });