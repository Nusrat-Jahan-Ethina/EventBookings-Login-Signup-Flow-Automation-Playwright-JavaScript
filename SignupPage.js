const { expect } = require("@playwright/test");

exports.SignupPage = class SignupPage {

    constructor(page){

        this.page = page;
        this.dropSignin = 'id=SignIn'
        this.signup = "//a[@aria-label='SignUp']";
        this.firstName = 'id=FirstName'
        this.lastName = 'id=LastName'
        this.emailInput = 'id=Email';
        this.passInput = 'id=Password';
        this.confirmPass = 'id=ConfirmPassword';
        this.signupButton = 'id=btnSubmit';

    }

    async navigateToSignup(){

        await this.page.goto ('https://www.eventbookings.com/');
        await this.page.locator(this.dropSignin).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.signup).click();

    }

    async createNewUser(firstName, lastName, email, password){

        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.passInput).fill(password);
        await this.page.locator(this.confirmPass).fill(password);
        await this.page.locator(this.signupButton).click();

    }

    async isSignupSuccessful(){

            await this.page.waitForSelector('#select-geo');
            await this.page.click('#select-geo'); //Select location
            await this.page.waitForSelector('.font-15.user-name.mr-0'); //Verify user is automatically logged in
            await this.page.click(".ml-2[width='12']");  
            await this.page.click("//a[normalize-space()='Sign Out']"); //Logout
    }
}