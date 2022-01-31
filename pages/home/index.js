/*
 * Recipes Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from "react";
import HotelSearch from "./HotelSearchContainer";
import { useHotelListStateValue, HotelListStateContext } from "../../context/stateProvider";
import { setHotels } from "../../context/action";
const axios = require("axios").default;

const Home = ({ hotels }) => {
  const [, dispatch] = useHotelListStateValue();
  console.log("hotels", hotels);
  useEffect(() => {
    dispatch(setHotels(hotels));
  }, [hotels, dispatch]);

  return <HotelSearch />;
};

export async function getServerSideProps(context) {
  const res = await axios("https://run.mocky.io/v3/0400d601-30c7-4831-8bd7-aabdfef6e1a5");
  const hotels = res.data;

  return {
    props: { hotels },
  };
}

export default Home;
