import React from "react";

export default function RecipeDetailsIngredients(props) {
  const { ingredient } = props;

  return (
    <tr>
      <td style={{ paddingRight: "1.5rem" }}>
        {ingredient.recipe_ingredients.quantity}{" "}
        {ingredient.recipe_ingredients.unit_singular}
        {/* {ingredient.recipe_ingredients.quantity > 1
                          ? ingredient.recipe_ingredients.unit_plural
                          : ingredient.recipe_ingredients.unit_singular} */}
      </td>
      <td>{ingredient.title}</td>
    </tr>
  );
}
