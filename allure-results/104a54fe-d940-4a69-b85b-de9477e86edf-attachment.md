# Test info

- Name: User can perform checkout
- Location: /Users/houssemmhamdi/Documents/Training/playwright/tests/checkout.spec.ts:14:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /Users/houssemmhamdi/Library/Caches/ms-playwright/chromium-1169/chrome-mac/Chromium.app/Contents/MacOS/Chromium
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 |
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | import { user } from './testdata';
   5 | import { HomePage } from '../pages/page.home';
   6 | import { LoginPage } from '../pages/page.login';
   7 | import { InventoryPage } from '../pages/page.inventory';
   8 | import { CartPage } from '../pages/page.cart';
   9 | import { Checkout } from '../pages/page.checkout';
  10 |
  11 |
  12 |
  13 |
> 14 | test('User can perform checkout', async ({ page }) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/houssemmhamdi/Library/Caches/ms-playwright/chromium-1169/chrome-mac/Chromium.app/Contents/MacOS/Chromium
  15 |     const homepage = new HomePage(page);
  16 |     const loginPage = new LoginPage(page);
  17 |     const inventory = new InventoryPage(page);
  18 |     const cartPage = new CartPage(page);
  19 |     const checkout = new Checkout(page);
  20 |
  21 |
  22 |     
  23 |     await homepage.open(user.url);
  24 |     await loginPage.login(user.email, user.password)
  25 |     await inventory.isUserLoggedInSuccessfully();
  26 |     await inventory.addToCart();
  27 |     await inventory.clickMiniCart();
  28 |     await cartPage.isUserInCartPage();
  29 |     await cartPage.proceedToCheckoutPage();
  30 |     await checkout.isUserInCheckoutPage();
  31 |     await checkout.completeAddressForm(user.firstName, user.lastName, user.zipdCode);
  32 |     await checkout.clickContinueBtn();
  33 |     await checkout.isUserInCheckoutSummaryPage();
  34 |     await checkout.clickFinishCheckoutBtn();
  35 |     await checkout.isUserInCheckoutSuccessyPage();
  36 |
  37 |
  38 |
  39 |   });
```