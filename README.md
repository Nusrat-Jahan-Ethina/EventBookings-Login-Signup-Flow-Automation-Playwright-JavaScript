# EventBookings-Login-Signup-Flow-Automation-Playwright-JavaScript-

## Project Overview

This project automates the signup and login authentication flows of [EventBookings](https://www.eventbookings.com) using Playwright with JavaScript.  
It is designed with a scalable Page Object Model (POM) structure, supports multiple browsers (Chromium, Firefox, mobile emulation), and emphasizes test data management and reusability.

---

1. **Clone the repository:**
```
git clone https://github.com/Nusrat-Jahan-Ethina/EventBookings-Login-Signup-Flow-Automation-Playwright-JavaScript-.git
```

2. **Install dependencies:**
```
npm install
```

3. **Install Playwright browsers:**
```
npx playwright install
```

## Configure Credentials (.env)
Create a .env file in the project root directory with the following content:
```
BASE_GMAIL=yourbaseemail@gmail.com
BASE_PASSWORD=YourSecurePassword123!
```

The tests generate unique emails using Gmail aliasing based on BASE_GMAIL.
The password BASE_PASSWORD is used for signup and login.

## Running Tests
**Run all tests:**
```
npx playwright test
```

**Run a specific test file:**
```
npx playwright test tests/login.spec.js
```

**Run tests in headed mode (with UI visible):**
```
npx playwright test --headed
```

## Test Coverage Summary and Known Limitations
Covers key signup and login scenarios, including:

New user signup with unique email alias

Validation for weak passwords and duplicate emails

Login with valid, invalid, empty, and non-existing user credentials

Logout functionality

Multi-browser and mobile device profile testing

Visual screenshots captured after successful signup for verification.

## Known Limitations:

CAPTCHA challenges during signup/login are not bypassed and can block automation.

Some dynamic UI elements might cause occasional flaky tests due to timing.

Rate limits or throttling on the website might affect repeated test runs.

## Additional Notes
Ensure your .env file is included in .gitignore to protect sensitive data.

Test data generation uses timestamp-based email aliasing for uniqueness.

Please report any issues or flaky tests via GitHub Issues.



