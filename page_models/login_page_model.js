import { Selector } from "testcafe";

class LoginPageModel {
  constructor() {
    this.emailInput = Selector("#user_email");
    this.passwordInput = Selector("#user_password");
    this.submitButton = Selector("input[type='submit']");
    this.accountHeader = Selector("h1").withText("Your Account Information");
  }
}

export default new LoginPageModel();
