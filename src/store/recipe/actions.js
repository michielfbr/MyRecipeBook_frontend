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

// Get all recipes belonging to user by :userId
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

// Get specific recipe by its :recipeId
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

// Post a new recipe
export const newRecipe = (
  recipe
) => {
  return async (dispatch, getState) => {
    try {
      console.log("userId", recipe.userId)
      const response = await axios.post(
        `${apiUrl}/recipe/new`,
        {
          title: recipe.title,
          imageUrl: recipe.imageUrl,
          cookingTime: recipe.cookingTime,
          ingredients: recipe.ingredients,
          // tags,
          instructions: recipe.instructions,
          reference: recipe.reference,
          userId: recipe.userId,
        }
        // ,{
        //   headers: { Authorization: `Bearer ${token}` },
        // }
      );
      const newRecipe = response;
      console.log("New Recipe:", newRecipe);
      if (response.status === 201) {
        dispatch(
          showMessageWithTimeout(
            "success",
            false,
            "Recipe added to YourRecipeBook"
          )
        );
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
