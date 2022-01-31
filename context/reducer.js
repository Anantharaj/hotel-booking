/*
 * Hotel List Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { SET_HOTELS, FILTERED_HOTELS, TOTAL_NIGHTS } from "./constants";

export const initialState = {
  allHotels: [],
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
