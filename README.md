# AbleSpace — QA Testing Assessment

Manual QA assessment of the AbleSpace staging web application, covering core functionality, exploratory testing, input validation, navigation, UI behavior, and browser compatibility.

**Application:** [AbleSpace Staging](https://staging.ablespace.io)  
**Repository:** [AbleSpace-QA-Assignment](https://github.com/harshjyoti03/AbleSpace-QA-Assignment)  
**Testing Date:** 20 October 2026  
**Testing Approach:** Manual Functional and Exploratory Testing

## Project Overview

This project documents the testing performed on the AbleSpace staging application. The objective was to verify selected user workflows, observe application behavior under different inputs, document potential defects, and summarize the scope of compatibility testing.

## Testing Scope

The assessment covered the following areas:

- **Authentication:** Successful login, incorrect credentials, repeated failed attempts, and access before email verification.
- **Student Management:** Student record creation and name-field input handling.
- **Form Validation:** Unusual date values, invisible characters, and special-character-only names.
- **Data Management:** Student filtering and data logging scenarios.
- **Navigation:** Browser Back behavior and displayed panel consistency.
- **User Interface:** Text scaling and layout behavior.
- **Compatibility:** Browser and device checks recorded in the compatibility report.

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
├── .gitignore
└── README.md
```

## Deliverables

| File | Description |
|---|---|
| AS - 01 - Test Scenarios.xlsx | Exploratory scenarios and observations |
| AS - 02 - Test Cases.xlsx | Preconditions, test data, steps, expected results, and actual results |
| AS - 03 - Bug Reports.xlsx | Potential defects, reproduction steps, and evidence references |
| AS - 04 - Compatibility Report.xlsx | Browser and device compatibility results |
| AS - 05 - Test Summary.pdf | Summary of scope, findings, limitations, and recommendations |

## Key Observations

The assessment identified several areas requiring further investigation:

1. Repeated failed login attempts triggered a Firebase authentication rate-limit error, which temporarily affected subsequent login attempts.
2. The dashboard was accessible before email verification; the intended access policy requires confirmation.
3. The application accepted invisible-character and special-character-only student names.
4. Browser Back changed the URL from the Caseload page to the Calendar page while the View Data panel remained visible.
5. At the largest text-size setting, the student name was truncated and the IEP Due date was partially clipped.

These observations should be assessed against the application's requirements before being classified as confirmed defects.

## Evidence

The `evidence/` directory contains screenshots captured during testing. Filenames correspond to the relevant exploratory scenarios where applicable.

Screenshots should be reviewed for sensitive information before public sharing.

## Limitations

- Some validation rules and expected authentication policies require clarification.
- Not every application workflow has been tested end to end.
- Compatibility results are limited to the environments and scenarios actually tested.
- Additional regression testing is recommended after any fixes.

## Conclusion

The assessment verified selected core workflows and documented behaviors requiring further investigation. The test scenarios, detailed cases, bug reports, compatibility report, and summary provide a structured record of the testing performed.

**Note:** This is a manual QA assessment of a staging environment, not a certification of production readiness.
