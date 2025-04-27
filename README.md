# 📚 Playwright E2E Testing with Allure Reporting

This project uses [Playwright](https://playwright.dev/) for end-to-end (E2E) testing and [Allure](https://docs.qameta.io/allure/) for beautiful test reporting.

---

## 🚀 Project Features

- ✅ End-to-end testing with Playwright
- ✅ Automatic screenshots and videos on test failure
- ✅ Allure reports (with screenshots, videos, traces)
- ✅ Test parallelization and retries
- ✅ Headless and headed modes
- ✅ Easy setup and usage

---

## 🛠 Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Install Allure Commandline

```bash
npm install -g allure-commandline
```
> ℹ️ If `allure` is not found, you can use `npx allure` or install Java (Allure needs Java).

If Java is missing, install it:
- **Mac:** `brew install openjdk`
- **Windows:** Download from [https://adoptium.net/](https://adoptium.net/)

---

## 🧪 Running Tests

### Run all Playwright tests

```bash
npx playwright test
```

### Run tests in headed mode (browser UI visible)

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.ts
```

---

## 📊 Allure Reporting

### 1. Generate the Allure Report

```bash
npx allure generate ./allure-results --clean -o ./allure-report
```

### 2. Open the Allure Report

```bash
npx allure open ./allure-report
```

---

## 📂 Project Structure

```
├── tests/
│   ├── example.spec.ts     # Test files
│
├── pages/
│   ├── inventoryPage.ts     # Page Object Models (POM)
│
├── allure-results/          # Raw Allure test results (generated after test run)
├── allure-report/           # Final HTML report (generated)
├── playwright.config.ts     # Playwright configuration
├── package.json
└── README.md
```

---

## ⚙️ Playwright Configuration Highlights (`playwright.config.ts`)

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
  use: {
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
```

- 🎥 Videos recorded only on test failure
- 📸 Screenshots captured on failure
- 🧩 Allure reporter integrated

---

## 📢 Useful Commands

| Command | Description |
|:--------|:------------|
| `npx playwright test` | Run all tests |
| `npx playwright test --headed` | Run tests with visible browser |
| `npx playwright show-report` | Show Playwright's own HTML report |
| `npx allure generate` | Generate Allure report |
| `npx allure open` | Open Allure report |

---

## 💡 Notes

- Allure reports **require Java** installed to work properly.
- Clean old results before generating new reports with `--clean`.
- Customize `playwright.config.ts` for different environments (staging, production, etc.).

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

# 🚀 Happy Testing! 🚀
