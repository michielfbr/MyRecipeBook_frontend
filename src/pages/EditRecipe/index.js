import React from "react";
import RecipeForm from "../../components/RecipeForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSpecificRecipe } from "../../store/recipe/actions";
import { selectRecipe } from "../../store/recipe/selectors";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function EditRecipe() {
  const pageTitle = "Edit recipe";
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(useSelector(selectRecipe));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecificRecipe(recipeId));
  }, [dispatch, recipeId]);

  function submitForm(event) {
    event.preventDefault();

    //   dispatch(login(email, password));

    //   setEmail("");
    //   setPassword("");
  }

  return (
    <Container>
      <h1 className="mt-5">page.EditRecipe</h1>
      <p>
        {"< "}
        <Link to={`/recipe/${recipeId}`}>back to recipe</Link>
      </p>
      <RecipeForm
        pageTitle={pageTitle}
        recipe={recipe}
        setRecipe={setRecipe}
        submitForm={submitForm}
      />
    </Container>
  );
}
