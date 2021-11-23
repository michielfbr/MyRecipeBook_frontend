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

export function fetchAllRecipes() {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/recipe/all`);

    const recipes = response.data;
    console.log("fetchAllRecipes:", recipes);

    dispatch(recipesFetched({ recipes }));
    dispatch(appDoneLoading());
  };
}

// export function fetchSpecificArtwork(id) {
//   return async function thunk(dispatch, getState) {
//     dispatch(appLoading());
//     const response = await axios.get(`${apiUrl}/artwork/${id}`);

//     const artworks = [response.data];
//     // console.log("artworks/actions.js fetchSpecificArtwork:", artworks)

//     dispatch(artworksFetched({ artworks }));
//     dispatch(appDoneLoading());
//   };
// }
