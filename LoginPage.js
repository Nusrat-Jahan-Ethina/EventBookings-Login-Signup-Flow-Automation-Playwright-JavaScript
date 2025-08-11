const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {

    //Constructor
    constructor(page){

        this.page = page;
        this.dropSignin = 'id=SignIn'
        this.signin = "//a[@aria-label='SignIn']";
        this.emailInput = 'id=Email';
        this.passInput = 'id=Password';
        this.loginButton = "//button[@type='submit']";

    }

    //Navigate to Login Page
    async navigateToLogin(){

        await this.page.goto ('https://www.eventbookings.com/');
        await this.page.locator(this.dropSignin).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.signin).click();

    }

    //Test that login form elements are visible
    async loginForm(){

        //Title text of form
        const titleText = await this.page.locator("//h2[@class='title text-center']");
        await expect(titleText).toBeVisible();

        //Email address and password input box, login button
        await expect(this.page.locator(this.emailInput)).toBeVisible();
        await expect(this.page.locator(this.passInput)).toBeVisible();
        await expect(this.page.locator(this.loginButton)).toBeVisible();

        //Remember Me checkbox, Forgot Password link
        const checkbox = await this.page.locator("//div[@class='b-input']");
        await expect(checkbox).toBeVisible();
        const forgotPass = await this.page.locator("//a[normalize-space()='Forgot password?']");
        await expect(forgotPass).toBeVisible();

        //Sign in with Google, Facebook, Apple
        const signInWith = await this.page.locator("//span[normalize-space()='Or, Sign in with']");
        await expect(signInWith).toBeVisible();
        const viaGoogle = await this.page.locator("//span[normalize-space()='Facebook']");
        await expect(viaGoogle).toBeVisible();
        const viaFacebook = await this.page.locator("//button[@title='Sign in using your Google account']");
        await expect(viaFacebook).toBeVisible();
        const viaApple = await this.page.locator("//span[normalize-space()='Apple']");
        await expect(viaApple).toBeVisible();

        //One Time Password button
        const otPass = await this.page.locator('.btn.one-time-pass.mt-3');
        await expect(otPass).toBeVisible();

        //Redirection to Signup Page link for new users
        const newHereText = await this.page.locator('.already-account.paragraph-color.text-center.mt-4');
        await expect(newHereText).toBeVisible();
        const redToSignup = await this.page.locator("//a[normalize-space()='Sign Up']");
        await expect(redToSignup).toBeVisible();

    } 

    //Login with Credentials
    async loginWithCredentials(email, password){

        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.passInput).fill(password);
        await this.page.locator(this.loginButton).click();
        await this.page.waitForSelector('.font-15.user-name.mr-0'); //Verify redirection to landing page
        
    }


}