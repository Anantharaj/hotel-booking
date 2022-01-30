/*
 * Hotel List Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'project/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'seera/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_HOTELS = "seera/Hotels/SET_HOTELS";
export const ADD_RECIPE_COUNT = "seera/Hotels/ADD_RECIPE_COUNT";
export const REDUCE_RECIPE_COUNT = "seera/Hotels/REDUCE_RECIPE_COUNT";
