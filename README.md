

**To set the enviroment:**
 npm install
 npx playwright install  

**To rub all test cases:**
npx playwright test  --project chromium

**To run ui cases:**
npx playwright test --grep "@ui" --project chromium

**To run api cases:**
npx playwright test --grep "@api" --project chromium

**To run integration cases:**
npx playwright test --grep "@integration" --project chromium

## Project Structure

SDET_2025_TAKE_HOME_ASSIGNMENT
1. .github/workflows       # CI/CD pipeline (playwright.yml)
2.  Helpers                 # Utility functions and shared logic
3.  page_objects            # Page Object Model classes (App, Login, Navbar)
4.  tests                   # Test suites
    1.  api_cases.spec.ts   # API-specific test cases
    2.  integration_cases.spec.ts # Combined API and UI tests
    3.  ui_cases.spec.ts    # Frontend UI test cases
5.  playwright.config.ts    # Global Playwright configuration
6.  package.json            # Project dependencies and scripts
7. .gitignore              # Files excluded from version control
