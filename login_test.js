import loginPageModel from "./page_models/login_page_model";

fixture("Airport Gap Login").page(
  "https://airportgap-staging.dev-tester.com/login"
);

test("User can log in to their account", async t => {
  await t
    .typeText(loginPageModel.emailInput, "airportgap@dev-tester.com")
    .typeText(loginPageModel.passwordInput, "airportgap123")
    .click(loginPageModel.submitButton);

  await t.expect(loginPageModel.accountHeader.exists).ok();
});
