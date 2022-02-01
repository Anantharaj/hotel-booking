import React from "react";
import renderer from "react-test-renderer";
import CardContainer from "./index";

it("Card renders correctly", () => {
  const card = {
    name: "Kempinski Hotel Mall of the Emirates",
    price: "200",
    city: "dubai",
    available_on: "2022-10-21",
  };
  const totalNights = 5;
  const tree = renderer.create(<CardContainer hotel={card} totalNights={totalNights} />).toJSON();
  expect(tree).toMatchSnapshot();
});
