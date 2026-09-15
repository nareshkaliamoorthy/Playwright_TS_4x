# Playwright TypeScript 4.x - Test Automation Framework

A modern test automation framework built with Playwright and TypeScript using the Page Object Model (POM) pattern for testing web applications.

## Overview

This repository contains automated test suites for web application testing using Playwright 4.x with TypeScript. The framework implements best practices including the Page Object Model pattern for maintainable and scalable test code.

## Features

- **Playwright 4.x**: Latest generation of Playwright test automation framework
- **TypeScript**: Full type safety and modern development experience
- **Page Object Model**: Organized page objects for better code maintainability
- **Parallel Execution**: Tests run in parallel by default for faster feedback
- **HTML Reporting**: Built-in HTML test reports
- **Cross-browser Testing**: Easy configuration for testing across different browsers

## Project Structure

```
.
├── pages/                      # Page Object Models
│   ├── base_page.ts           # Base page class with common methods
│   ├── login_page.ts          # Login page object
│   ├── products_page.ts       # Products page object
│   ├── playwrightLab_login_page.ts
│   └── playwrightLab_home_page.ts
├── tests/                      # Test files
│   ├── login_test.spe.ts      # Login functionality tests
│   └── playwrightLab_test.spec.ts
├── test_data/                  # Test data and fixtures
├── playwright.config.ts        # Playwright configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Playwright_TS_4x
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The project uses `playwright.config.ts` for test configuration. Key settings include:

- **Test Directory**: `./tests` - Location of test files
- **Parallel Execution**: Tests run in parallel by default
- **Reporter**: HTML report generation
- **Projects**: Currently configured for Chromium browser (Firefox and Safari can be enabled)
- **Trace**: Traces are collected on first retry for debugging failed tests

## Running Tests

### Run all tests
```bash
npm test
```

Or use the Playwright CLI directly:
```bash
npx playwright test
```

### Run tests in headed mode (browser UI visible)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run a specific test file
```bash
npx playwright test tests/login_test.spe.ts
```

### Run tests matching a pattern
```bash
npx playwright test -g "Login Functionality"
```

## Viewing Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Page Object Model Pattern

This framework uses the Page Object Model pattern for maintainability:

- **Base Page** (`base_page.ts`): Contains common actions applicable to all pages
- **Specific Pages**: `LoginPage`, `ProductsPage`, etc. extend the base page and define page-specific selectors and methods

Example usage:
```typescript
import { LoginPage } from '../pages/login_page';
import { ProductsPage } from '../pages/products_page';

test("valid login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    let loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "secret_sauce");
    let productsPage = new ProductsPage(page);
    let itemsList = await productsPage.getItemsList();
});
```

## Browser Configuration

To enable additional browsers, uncomment the project configurations in `playwright.config.ts`:

- **Firefox**: Uncomment the Firefox project
- **WebKit (Safari)**: Uncomment the WebKit project
- **Mobile Browsers**: Uncomment mobile projects for device emulation

## CI/CD Integration

The configuration includes CI-specific settings:

- **On CI**: Tests run with 2 retries and single worker
- **Locally**: Tests run in parallel with no retries

Set the `CI` environment variable to enable CI mode:
```bash
CI=true npm test
```

## Debugging

### Use Playwright Inspector
```bash
npx playwright test --debug
```

### View Traces
Failed tests automatically generate traces (when configured). View them with:
```bash
npx playwright show-trace <path-to-trace>
```

## Dependencies

- `@playwright/test`: ^1.63.0 - Playwright testing framework
- `@types/node`: ^26.4.1 - TypeScript definitions for Node.js

## Contributing

When adding new tests:

1. Create page objects in the `pages/` directory
2. Extend `BasePage` for common functionality
3. Add test files in `tests/` directory with `.spec.ts` suffix
4. Follow the existing Page Object Model pattern

## License

ISC
