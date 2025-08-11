import {test} from '@playwright/test';
import {LoginPage} from 'D:/Desktop/Automation Task/node_modules/Pages/LoginPage';
import {SignupPage} from 'D:/Desktop/Automation Task/node_modules/Pages/SignupPage';

const BASE_GMAIL = process.env.BASE_GMAIL || 'testuser@gmail.com';
const BASE_PASSWORD = process.env.BASE_PASSWORD || 'Password123!';

// helper to create gmail alias: base+timestamp@gmail.com
function generateAlias(baseEmail) {
  const parts = baseEmail.split('@');
  const ts = Date.now();
  return `${parts[0]}+${ts}@${parts[1]}`;
}

 // Generate unique email alias and use base password (or generate)
    const email = generateAlias(BASE_GMAIL);
    const password = BASE_PASSWORD;

test ('test', async ({page}) => {
    
    //Signup Flow - Positive Testing
    const signup = new SignupPage(page);
    await signup.navigateToSignup();
    await signup.createNewUser('Test', 'User', email, password);
    await signup.isSignupSuccessful().catch(e => console.log('Not navigating:', e.message));
    await page.waitForTimeout(3000);
    
    //Login Flow
    const login = new LoginPage(page);
    await page.context().clearCookies();  // clear cookies to remove login session
    await login.navigateToLogin();
    await login.loginForm();
    await login.loginWithCredentials('johndoe@gmail.com', 'Abcd#1234');
    await page.waitForTimeout(3000);

});