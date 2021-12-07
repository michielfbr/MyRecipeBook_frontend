import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Col, Badge, Image } from "react-bootstrap";
import { fetchSpecificRecipe } from "../../store/recipe/actions";
import { deleteSpecificRecipe } from "../../store/recipe/actions";
import { Link } from "react-router-dom";
import { selectRecipe } from "../../store/recipe/selectors";
import Button from "react-bootstrap/Button";
import RecipeDeletePopup from "../../components/RecipeDeletePopup";
import RecipeDetailsIngredients from "../../components/RecipeDetailsIngredients";

export default function RecipeDetails() {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const recipe = useSelector(selectRecipe);
  const [deleteRecipePopupShow, setDeleteRecipePopupShow] = useState(false);

  function deleteRecipe() {
    dispatch(deleteSpecificRecipe(recipe.id));
    setDeleteRecipePopupShow(false);
  }

  useEffect(() => {
    dispatch(fetchSpecificRecipe(recipeId));
  }, [dispatch, recipeId]);

  return (
    <>
      {!recipe ? (
        <></>
      ) : (
        <div>
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            style={{
              width: "100%",
              height: "296px",
              objectFit: "cover",
            }}
          ></Image>
        </div>
      )}

      {!recipe ? (
        <></>
      ) : (
        <Container
          as={Col}
          md={{ span: 8, offset: 2 }}
          className="FullRecipe pagePadding"
        >
          <p>
            {"< "}
            <Link to={`/`} className="Link">
              back to overview
            </Link>
          </p>
          <h1 className="Header">{recipe.title}</h1>
          <h6>Cooking time: {recipe.cookingTime.substring(0, 5)}</h6>

          <h4>
            {recipe.tags.map((tag) => {
              return (
                <Badge pill className="Tagbadge" bg="succes" key={tag.id}>
                  {tag.title}
                </Badge>
              );
            })}
          </h4>

          <hr />
          <h3 className="Header">Ingredients</h3>

          <table>
            <tbody>
              {recipe.ingredients.map((ingredient) => {
                return (
                  <RecipeDetailsIngredients
                    ingredient={ingredient}
                    key={ingredient.id}
                  />
                  // <tr>
                  //   <td style={{ paddingRight: "20px" }}>
                  //     {ingredient.recipe_ingredients.quantity}{" "}
                  //     {ingredient.recipe_ingredients.unit_singular}
                  //     {/* {ingredient.recipe_ingredients.quantity > 1
                  //         ? ingredient.recipe_ingredients.unit_plural
                  //         : ingredient.recipe_ingredients.unit_singular} */}
                  //   </td>
                  //   <td>{ingredient.title}</td>
                  // </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h3 className="Header">Instructions</h3>
          <p>{recipe.instructions}</p>
          <p>
            {/* <label className="Header">Reference:</label>{" "} */}
            <label>
              <i>{recipe.reference}</i>
            </label>
          </p>
          <Link to={`/edit_recipe`}>
            <Button variant="success" style={{ marginRight: "8px" }}>
              Edit recipe
            </Button>
          </Link>

          <Button
            variant="outline-success"
            style={{ marginRight: "8px" }}
            onClick={() => setDeleteRecipePopupShow(true)}
          >
            Delete recipe
          </Button>
        </Container>
      )}
      <RecipeDeletePopup
        deleteRecipePopupShow={deleteRecipePopupShow}
        setDeleteRecipePopupShow={() => setDeleteRecipePopupShow()}
        deleteRecipe={() => deleteRecipe()}
      />
    </>
  );
}
