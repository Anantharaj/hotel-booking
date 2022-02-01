/*
 * Home Page
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";

import HotelSearch from "./HotelSearchContainer";
import { useHotelListStateValue } from "../../context/stateProvider";
import { setHotels } from "../../context/action";
import { app } from "../../config/constants";

const axios = require("axios").default;

const Home = ({ hotels }) => {
  const [, dispatch] = useHotelListStateValue();
  useEffect(() => {
    dispatch(setHotels(hotels));
  }, [hotels, dispatch]);

  return <HotelSearch />;
};

export async function getServerSideProps(context) {
  const res = await axios(`${app.baseUrl}/0400d601-30c7-4831-8bd7-aabdfef6e1a5`);
  const hotels = res.data;

  return {
    props: { hotels },
  };
}

export default Home;

Home.propTypes = {
  /**
   * List of hotels form Api call
   */
  hotels: PropTypes.array.isRequired,
};
