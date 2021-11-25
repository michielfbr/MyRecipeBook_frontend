import React from "react";
import RecipeForm from "../../components/RecipeForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../../store/recipe/selectors";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function EditRecipe() {
  const pageTitle = "Edit recipe";
  const [recipe, setRecipe] = useState(useSelector(selectRecipe));
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();
    console.log("Edit recipe submitted");
  }

  if (!recipe) {
    navigate("/");
    return <></>;
  } else {
    return (
      <Container>
        <p>
          {"< "}
          <Link to={`/recipe/${recipe.id}`}>back to recipe</Link>
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
}
