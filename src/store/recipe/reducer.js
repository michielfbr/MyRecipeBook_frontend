const initialState = {
};

export default function Recipes(state = initialState, action) {
  switch (action.type) {
    case "recipesFetched": {
      return {
        ...state,
        recipes: action.payload.recipes,
      };
    }
    case "recipeFetched": {
      return {
        ...state,
        recipe: action.payload.recipe,
      };
    }
    default: {
      return state;
    }
  }
}