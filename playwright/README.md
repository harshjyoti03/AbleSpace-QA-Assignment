# AbleSpace - Playwright Automation

A browser automation test written in TypeScript using Playwright Test for the AbleSpace staging application.

## Overview

The automated test covers the sign-in flow for an existing, manually created account and verifies navigation to the Caseload page.

The test is intended to demonstrate basic Playwright skills, including:

- Accessible locators and browser interactions.
- Environment-based credential management.
- Assertions for expected behavior.
- Test configuration and execution.
- Basic failure screenshots and trace collection.

**Application:** https://staging.ablespace.io

## Tech Stack

- TypeScript
- Playwright Test
- Node.js and npm
- Chromium
- dotenv for environment-variable loading

## Project Structure

```text
playwright/
├── .env                  # Local credentials; do not commit
├── login.spec.ts         # Automated login test
├── playwright.config.ts  # Playwright configuration
├── package.json          # Dependencies and npm scripts
├── package-lock.json     # Locked dependency versions
└── README.md             # Automation documentation
```

Generated test results and reports are excluded from version control.

## Prerequisites

- Node.js installed.
- npm available in the terminal.
- An existing AbleSpace test account created manually.
- Access to the AbleSpace staging application.

## Installation

From the repository root, navigate to the automation directory:

```bash
cd playwright
npm ci
npx playwright install chromium
```

`npm ci` installs the dependencies recorded in `package-lock.json`. If the lockfile is unavailable, run `npm install` instead.

## Configure Credentials

Create a `.env` file inside the `playwright/` directory:

```dotenv
ABLESPACE_EMAIL=your_test_account_email
ABLESPACE_PASSWORD=your_test_account_password
```

Replace the placeholder values with the credentials of your existing test account.

The test reads these values from environment variables. Credentials must not be hardcoded in the test source or committed to Git.

The repository's root `.gitignore` should exclude:

```gitignore
playwright/.env
playwright/node_modules/
playwright/test-results/
playwright/playwright-report/
playwright/blob-report/
```

## Run the Test

Run in headless mode:

```bash
npm test
```

Run with a visible browser:

```bash
npm run test:headed
```

Run in debug mode:

```bash
npm run test:debug
```

The test scripts must be configured in `package.json` for these commands to work.

## Test Scenario

**Test name:** Existing user can log in and open Caseload.

### Steps
1. Open the sign-in page.
2. Enter the existing account's email address.
3. Submit the email and wait for the password field.
4. Enter the password and submit the form.
5. Handle the stay-logged-in prompt if it appears.
6. Navigate to the Caseload page.
7. Verify the expected navigation result.

### Expected Result

The existing account should authenticate successfully and the application should reach the Caseload page.

## Assertions and Reliability

The test uses Playwright assertions to check the expected page state. Locators should target accessible names, roles or stable test IDs where possible.

A URL assertion confirms navigation but does not independently confirm that Caseload data has loaded. A visible heading or another stable page element can be added to strengthen the test.

## Debugging

If the test fails, run:

```bash
npm run test:headed
```

For trace inspection, use the trace path reported in the failed test output:

```bash
npx playwright show-trace test-results/<test-result-folder>/trace.zip
```

Replace the placeholder path with the actual trace file path.

Trace files, screenshots and error context can contain personal information. Review them before sharing or publishing.

## Scope and Limitations

- The test uses an existing account; signup is not automated.
- The test targets the staging environment.
- Authentication behavior and UI locators may change as the application evolves.
- The automated coverage is limited to the documented login and Caseload flow.
- A passing test does not imply that all application features are defect-free.
