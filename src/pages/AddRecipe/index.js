import React from "react";
import RecipeForm from "../../components/RecipeForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function AddRecipe() {
  const pageTitle = "Add recipe";
  const [recipe, setRecipe] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    //   dispatch(login(email, password));

    //   setEmail("");
    //   setPassword("");
  }

  return (
    <Container>
      <h1 className="mt-5">page.AddRecipe</h1>
      <p>
        {"< "}
        <Link to={`/`}>back to overview</Link>
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
