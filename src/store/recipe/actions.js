import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export function recipesFetched(data) {
  return {
    type: "recipesFetched",
    payload: data,
  };
}

export function fetchAllRecipes(userId) {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/recipe/all/${userId}`);

    const recipes = response.data;
    // console.log("recipe/actions.js All recipes:", recipes);

    dispatch(recipesFetched({ recipes }));
    dispatch(appDoneLoading());
  };
}

export function recipeFetched(data) {
  return {
    type: "recipeFetched",
    payload: data,
  };
}

export function fetchSpecificRecipe(recipeId) {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/recipe/${recipeId}`);

    const recipe = response.data;
    // console.log("recipe/actions.js Specific recipe:", recipe);

    dispatch(recipeFetched({ recipe }));
    dispatch(appDoneLoading());
  };
}
