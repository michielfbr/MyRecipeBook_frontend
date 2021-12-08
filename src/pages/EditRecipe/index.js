import React from "react";
import RecipeForm from "../../components/RecipeForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "../../store/recipe/selectors";
import { Link, useNavigate } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import { updateRecipe } from "../../store/recipe/actions";
import { selectUser } from "../../store/user/selectors";

export default function EditRecipe() {
  const pageTitle = "Edit recipe";
  const user = useSelector(selectUser);
  const [recipe, setRecipe] = useState(useSelector(selectRecipe));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
      userId: user.id,
    });
  };

  function submitRecipe(event) {
    dispatch(updateRecipe(recipe));
  }

  if (!recipe) {
    navigate("/");
    return <></>;
  } else {
    return (
      <Container className="pagePadding">
        <Col md={{ span: 10, offset: 1 }}>
          {"< "}
          <Link to={`/recipe/${recipe.id}`} className="Link">
            back to recipe
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
}
