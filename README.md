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

3.**Install Playwright browsers:**
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



