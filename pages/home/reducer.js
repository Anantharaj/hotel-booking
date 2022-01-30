/*
 * Hotel List Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { SET_HOTELS, ADD_RECIPE_COUNT, REDUCE_RECIPE_COUNT } from "./constants";

export const initialState = {
  allHotels: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        allHotels: action.data,
      };

    case ADD_RECIPE_COUNT: {
      return {
        ...state,
        recipes: action.recipe,
      };
    }
    case REDUCE_RECIPE_COUNT: {
      return {
        ...state,
        recipes: action.recipe,
      };
    }

    default:
      return state;
  }
};

export default reducer;
