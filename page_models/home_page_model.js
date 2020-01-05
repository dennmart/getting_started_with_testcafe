import { Selector } from "testcafe";

class HomePageModel {
  constructor() {
    this.subtitleHeader = Selector("h1").withText(
      "An API to fetch and save information about your favorite airports"
    );
  }
}

export default new HomePageModel();
