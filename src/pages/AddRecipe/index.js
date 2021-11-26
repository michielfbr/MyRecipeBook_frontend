import React from "react";
import RecipeForm from "../../components/RecipeForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { newRecipe } from "../../store/recipe/actions";

export default function AddRecipe() {
  const pageTitle = "Add recipe";
  const [recipe, setRecipe] = useState("");
  const dispatch = useDispatch();

  function submitRecipe(event) {
    event.preventDefault();
    console.log("Add recipe submitted");
    dispatch(newRecipe(recipe));
  }

  return (
    <Container>
      <p>
        {"< "}
        <Link to={`/`}>back to overview</Link>
      </p>
      <RecipeForm
        pageTitle={pageTitle}
        recipe={recipe}
        setRecipe={setRecipe}
        submitForm={submitRecipe}
      />
    </Container>
  );
}
