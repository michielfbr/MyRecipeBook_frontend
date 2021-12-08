import React from "react";
import RecipeForm from "../../components/RecipeForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import { newRecipe } from "../../store/recipe/actions";
import { selectUser } from "../../store/user/selectors";

export default function AddRecipe() {
  const pageTitle = "Add recipe";
  const user = useSelector(selectUser);
  const [recipe, setRecipe] = useState({
    title: "",
    imageUrl: "",
    cookingTime: "00:00",
    ingredients: [{ recipe_ingredients: { quantity: "" } }],
    tags: [{}, {}, {}],
    instructions: "",
    reference: "",
    userId: user.id,
  });
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
      userId: user.id,
    });
  };

  const submitRecipe = () => {
    dispatch(newRecipe(recipe));
  };

  return (
    <Container className="pagePadding">
      <Col md={{ span: 10, offset: 1 }}>
        {"< "}
        <Link to={`/`} className="Link">
          back to overview
        </Link>
      </Col>
      <RecipeForm
        pageTitle={pageTitle}
        recipe={recipe}
        onChangeHandler={onChangeHandler}
        submitRecipe={submitRecipe}
      />
    </Container>
  );
}
