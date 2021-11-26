import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";

export default function RecipeForm({
  pageTitle,
  recipe,
  setRecipe,
  submitRecipe,
}) {
  const [title, setTitle] = useState(recipe.title);
  const [imageUrl, setImageUrl] = useState(recipe.imageUrl);
  const [cookingTime, setCookingTime] = useState(recipe.cookingTime);
  const [ingredients, setIngredients] = useState([
    { title: "test1", amount: 1, unit_singular: "l" },
    { title: "test2" },
  ]);
  const [tags, setTags] = useState(recipe.tags);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [reference, setReference] = useState(recipe.reference);

  const user = useSelector(selectUser);
  const userId = user.id;

  function submitForm(event) {
    event.preventDefault();
    console.log("Add recipe submitted");
    setRecipe(
      title,
      imageUrl,
      cookingTime,
      ingredients,
      tags,
      instructions,
      reference,
      userId
    );
    submitRecipe();
  }

  // const [ingredientTitle, setIngredientTitle] = useState("");

  function changeIngredientTitle(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].title = value;
    // console.log(newIngredients[index]);
    setIngredients(newIngredients);
    // console.log(ingredients[index]);
    // console.log(ingredients);
  }

  function changeIngredientAmount(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].amount = value;
    // console.log(newIngredients[index]);
    setIngredients(newIngredients);
    // console.log(ingredients[index]);
    // console.log(ingredients);
  }

  function changeIngredientUnitSingular(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].unit_singular = value;
    // console.log(newIngredients[index]);
    setIngredients(newIngredients);
    // console.log(ingredients[index]);
    // console.log(ingredients);
  }

  function addIngredient() {
    const newIngredients = [...ingredients, {}];
    setIngredients(newIngredients);
  }

  function removeIngredient(index) {
    console.log("delete");
    const deletedIngredient = ingredients.splice(index, 1);
    console.log(deletedIngredient);
  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1 className="mt-5">{pageTitle}</h1>

      <Form.Group>
        <Form.Label>Recipe name</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="string"
          placeholder="Recipe title"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          type="url"
          placeholder="Image url"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Cooking Time</Form.Label>
        <Form.Control
          value={cookingTime}
          onChange={(event) => setCookingTime(event.target.value)}
          type="time"
          required
        />
      </Form.Group>
      <hr />
      <div>
        {ingredients.map((ing, index) => {
          return (
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Row>
                <Col xs={5}>
                  <Form.Label>Ingredient {index}</Form.Label>{" "}
                  {/* Delete {index} in production! */}
                  <Form.Control
                    value={ing.title}
                    onChange={(event) =>
                      changeIngredientTitle(event.target.value, index)
                    }
                    type="string"
                    placeholder="Ingredient"
                    required
                  />
                </Col>
                <Col>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    value={ing.amount}
                    onChange={(event) =>
                      changeIngredientAmount(event.target.value, index)
                    }
                    type="number"
                    required
                  />
                </Col>
                <Col>
                  <Form.Label>Unit</Form.Label>
                  <Form.Control
                    value={ing.unit_singular}
                    onChange={(event) =>
                      changeIngredientUnitSingular(event.target.value, index)
                    }
                    as="select"
                  >
                    <option>g</option>
                    <option>kg</option>
                    <option>l</option>
                    <option>ml</option>
                    <option>teaspoon</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Delete</Form.Label>
                  <Button
                    variant="secondary"
                    onClick={() => removeIngredient(index)}
                  >
                    x
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          );
        })}
      </div>

      {/* <Form.Label>Add ingredient</Form.Label> */}
      <Button variant="primary" type="submit" onClick={addIngredient}>
        +
      </Button>
      <hr />
      <Form.Group>
        <Form.Label>Instructions</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
          type="text"
          placeholder="Instructions"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Reference</Form.Label>
        <Form.Control
          value={reference}
          onChange={(event) => setReference(event.target.value)}
          type="text"
          placeholder="Recipe title"
          required
        />
      </Form.Group>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save recipe
        </Button>
      </Form.Group>
    </Form>
  );
}
