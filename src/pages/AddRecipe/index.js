import React from "react";
import RecipeForm from "../../components/RecipeForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { newRecipe } from "../../store/recipe/actions";

export default function AddRecipe() {
  const pageTitle = "Add recipe";
  // const [recipe, setRecipe] = useState({title: "test", imageUrl: "test",cookingTime: "00:30", ingredients: [
  //   { title: "test1", quantity: 1, unit_singular: "l"},
  //   { title: "test2" },
  // ], instructions: "Do a dance"});
  const [recipe, setRecipe] = useState({
    cookingTime: "00:00",
    ingredients: [{recipe_ingredients:{}}],
    tags: [{}, {}, {}],
  });
  const dispatch = useDispatch();

  const submitRecipe = () => {
    // console.log("Add recipe submitted in page");
    console.log("Recipe", recipe)
    dispatch(newRecipe(recipe));
  };

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
        submitRecipe={submitRecipe}
      />
    </Container>
  );
}
