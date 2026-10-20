# AbleSpace - QA Assessment

Manual QA testing and Playwright automation for the AbleSpace staging web application.

**Application:** [AbleSpace Staging](https://staging.ablespace.io)  
**Repository:** [AbleSpace-QA-Assignment](https://github.com/harshjyoti03/AbleSpace-QA-Assignment)  
**Testing Date:** 20 October 2026  
**Testing Approach:** Manual Functional, Exploratory, UI, Compatibility and Automated Testing

## Overview

This project documents a QA assessment of the AbleSpace staging application. The objective was to evaluate selected user workflows, explore application behavior, document observations, and demonstrate browser automation using Playwright and TypeScript.

The repository contains manual test scenarios, detailed test cases, potential bug reports, a compatibility report, a test summary, and an optional Playwright automation test.

## Repository Structure

```text
AbleSpace-QA-Assignment/
├── docs/
│   ├── AS - 01 - Test Scenarios.xlsx
│   ├── AS - 02 - Test Cases.xlsx
│   ├── AS - 03 - Bug Reports.xlsx
│   ├── AS - 04 - Compatibility Report.xlsx
│   └── AS - 05 - Test Summary.pdf
├── evidence/
│   └── Screenshots supporting test observations
├── playwright/
│   ├── login.spec.ts
│   ├── playwright.config.ts
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── .gitignore
└── README.md
```

The local Playwright `.env` file is intentionally excluded from version control.

## Testing Scope

### Authentication
- Successful login using an existing account.
- Incorrect-password handling.
- Behavior following repeated failed login attempts.
- Access behavior before email verification.

### Student Management and Forms
- Student record creation.
- Name-field input handling, including special characters and invisible characters.
- Date-field validation observations.

### Data Management
- Student filtering with matching and non-matching criteria.
- Positive and negative data-logging scenarios.

### Navigation and User Interface
- Browser Back behavior and consistency between the URL and displayed content.
- Layout behavior at the largest text-size setting.

### Compatibility
Browser and device results are documented in the compatibility report. Results should be interpreted according to the environments and scenarios actually tested.

### Playwright Automation
A TypeScript-based Playwright test automates the login flow using an existing manually created account and checks navigation to the Caseload page.

See [`playwright/README.md`](playwright/README.md) for setup and execution instructions.

## Deliverables

| File | Purpose |
|---|---|
| `AS - 01 - Test Scenarios.xlsx` | Exploratory scenarios and recorded observations |
| `AS - 02 - Test Cases.xlsx` | Preconditions, test data, steps, expected results and actual results |
| `AS - 03 - Bug Reports.xlsx` | Potential defects, reproduction steps and evidence references |
| `AS - 04 - Compatibility Report.xlsx` | Browser and device compatibility results |
| `AS - 05 - Test Summary.pdf` | Summary of testing scope, findings and recommendations |
| `playwright/` | Automated login test, configuration and documentation |
| `evidence/` | Screenshots supporting selected observations |

## Key Observations

The manual assessment identified the following behaviors for further review:

1. Repeated failed login attempts triggered a Firebase authentication rate-limit error and temporarily affected subsequent login attempts.
2. The dashboard was accessible before email verification; the intended access policy requires confirmation.
3. Invisible-character and special-character-only student names were accepted.
4. Browser Back changed the URL from `/caseload` to `/calendar` while the View Data panel remained visible.
5. At the largest text-size setting, the student name was truncated and the IEP Due date was partially clipped.

These observations are not automatically confirmed defects. Their expected behavior should be evaluated against the applicable product requirements.

## Evidence

The `evidence/` directory contains screenshots captured during manual testing. Filenames correspond to the associated exploratory scenarios where applicable.

Evidence should be reviewed for credentials or other sensitive information before public sharing.

## Testing Limitations

- Some input-validation rules and authentication policies require clarification.
- The assessment does not establish complete end-to-end coverage of every application workflow.
- Compatibility results are limited to the environments and scenarios tested.
- Potential defects require requirement confirmation and, where appropriate, retesting.
- Automated coverage is limited to the flow described in the Playwright documentation.

## Conclusion

This repository provides a structured record of the manual QA assessment and an example of browser automation using Playwright. It demonstrates exploratory testing, test-case documentation, evidence collection, defect reporting, compatibility assessment and basic automation.

**Note:** This assessment covers a staging environment and does not constitute certification of production readiness.
