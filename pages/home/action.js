/*
 * Hotel List Actions
 *
 * Actions change things in your application
 * Since this applications uses a uni-directional data flow,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { SET_HOTELS, ADD_RECIPE_COUNT, REDUCE_RECIPE_COUNT } from "./constants";

export function setHotels(data) {
  return {
    type: SET_HOTELS,
    data,
  };
}

export function addRecipesCount(recipe) {
  return {
    type: ADD_RECIPE_COUNT,
    recipe,
  };
}

export function reduceRecipesCount(recipe) {
  return {
    type: REDUCE_RECIPE_COUNT,
    recipe,
  };
}
