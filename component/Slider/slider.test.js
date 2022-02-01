import React from "react";
import renderer from "react-test-renderer";
import InputSlider from "./index";

it("Slider renders correctly", () => {
  const tree = renderer.create(<InputSlider handleChange={() => {}} sliderValue={30} min={0} max={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});
