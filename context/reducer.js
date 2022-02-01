/*
 * Hotel List Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { SET_HOTELS, FILTERED_HOTELS, TOTAL_NIGHTS, SEARCHED_HOTELS } from "./constants";

export const initialState = {
  allHotels: [],
  searchByDateHotels: [],
  filteredHotels: [],
  totalNights: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        allHotels: action.data,
      };

    case SEARCHED_HOTELS: {
      return {
        ...state,
        searchByDateHotels: action.hotels,
        filteredHotels: action.hotels,
      };
    }

    case FILTERED_HOTELS: {
      return {
        ...state,
        filteredHotels: action.hotels,
      };
    }

    case TOTAL_NIGHTS: {
      return {
        ...state,
        totalNights: action.noOfNights,
      };
    }

    default:
      return state;
  }
};

export default reducer;
