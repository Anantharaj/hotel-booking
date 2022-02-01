/*
 * Hotel List State Provider
 *
 * The State provider create context and supplies to the components
 *
 */

import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const HotelListStateContext = createContext();

// Wrap our app and provide the Data layer
export const HotelListProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <HotelListStateContext.Provider value={[state, dispatch]}>{children}</HotelListStateContext.Provider>;
};

// Pull information from the data layer
export const useHotelListStateValue = () => useContext(HotelListStateContext);
