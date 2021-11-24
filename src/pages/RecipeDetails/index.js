import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { fetchSpecificRecipe } from "../../store/recipe/actions";
import { Link } from "react-router-dom";
import { selectRecipes } from "../../store/recipe/selectors";

export default function RecipeDetails() {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  console.log(recipeId)
  const recipes = useSelector(selectRecipes);

  useEffect(() => {
    dispatch(fetchSpecificRecipe(recipeId));
  }, [dispatch, recipeId]);

  return (
    <Jumbotron>
      <h1>Recipe Details</h1>
      <p>
        <Link to={`/`}>
          <Button variant="primary">Back</Button>
        </Link>
      </p>
    </Jumbotron>
  );
}
