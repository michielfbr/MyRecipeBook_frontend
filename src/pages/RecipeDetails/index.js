import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { fetchSpecificRecipe } from "../../store/recipe/actions";
import { Link } from "react-router-dom";
import { selectRecipe } from "../../store/recipe/selectors";
import Button from "react-bootstrap/Button";

export default function RecipeDetails() {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const recipe = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(fetchSpecificRecipe(recipeId));
  }, [dispatch, recipeId]);

  return (
    <Container>
      {!recipe ? (
        <></>
      ) : (
        <div>
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            style={{
              width: "100%",
            }}
          ></img>
          <div
            style={{
              maxWidth: "600px",
              margin: "auto",
              padding: "10px",
            }}
          >
            <p>
              {"< "}
              <Link to={`/`}>back to overview</Link>
            </p>
            <h1>{recipe.title}</h1>
            <p>cooking time: {recipe.cookingTime}</p>
            <p>
              tags:{" "}
              {recipe.tags.map((tag) => {
                return <span>{tag.title} </span>;
              })}
            </p>
            <hr />
            <h3>Ingredients</h3>

            <table>
              <tbody>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <tr>
                      <td>
                        {ingredient.recipe_ingredients.quantity}{" "}
                        {ingredient.recipe_ingredients.unit_singular}
                        {/* {ingredient.recipe_ingredients.quantity > 1
                          ? ingredient.recipe_ingredients.unit_plural
                          : ingredient.recipe_ingredients.unit_singular} */}
                      </td>
                      <td>{ingredient.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <hr />
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
            <Link to={`/edit_recipe`}>
              <Button variant="primary">Edit recipe</Button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
}
