import { shallow } from "enzyme";
import React from "react";
import StoryFooter from "../components/stories/footer";

describe("Story Footer", () => {
  it('renders fine"', () => {
    const app = shallow(<StoryFooter />);
    expect(app.find(".stories-page-no").text()).toEqual("Page No: ");
  });
});
