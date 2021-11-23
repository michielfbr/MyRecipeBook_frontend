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
    default: {
      return state;
    }
  }
}
