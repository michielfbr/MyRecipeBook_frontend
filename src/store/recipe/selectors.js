export const selectRecipes = reduxState => {
    return reduxState.recipes.recipes;
  };

  export const selectRecipe = reduxState => {
    return reduxState.recipes.recipe;
  };