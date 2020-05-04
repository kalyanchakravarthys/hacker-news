import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Index from "../pages/index.js";

describe("Index Page", () => {
  it('renders fine"', () => {
    const app = shallow(<Index />);
    expect(app.find(".stories-page-no").text()).toEqual("Page No: ");
  });
});

describe("Index Snapshot Testing", () => {
  it('Index matches its snapshot"', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});