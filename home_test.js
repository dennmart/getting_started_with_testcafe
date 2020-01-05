import homePageModel from "./page_models/home_page_model";

fixture("Airport Gap Home Page").page(
  "https://airportgap-staging.dev-tester.com/"
);

test("Verify home page loads properly", async t => {
  await t.expect(homePageModel.subtitleHeader.exists).ok();
});
