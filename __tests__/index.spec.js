import React from "react";
import renderer from "react-test-renderer";
import Index from "../pages/index.js";

describe("Index Snapshot Testing", () => {
  it('Index matches its snapshot"', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});