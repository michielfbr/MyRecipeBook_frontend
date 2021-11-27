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
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [tags, setTags] = useState(recipe.tags);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [reference, setReference] = useState(recipe.reference);

  const user = useSelector(selectUser);
  const userId = user.id;

  useEffect(() => {
    console.log(recipe.ingredients);
  }, []);

  function submitForm(event) {
    event.preventDefault();
    console.log("Save recipe submitted in form");
    setRecipe({
      title,
      imageUrl,
      cookingTime,
      ingredients,
      tags,
      instructions,
      reference,
      userId,
    });
    console.log(recipe);
    submitRecipe();
  }

  function changeTagTitle(value, index) {
    const newTags = [...tags];
    newTags[index].title = value;
    setTags(newTags);
  }

  function changeIngredientTitle(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].title = value;
    setIngredients(newIngredients);
  }

  function changeIngredientQuantity(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].recipe_ingredients.quantity = value;
    setIngredients(newIngredients);
  }

  function changeIngredientUnitSingular(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].recipe_ingredients.unit_singular = value;
    setIngredients(newIngredients);
  }

  function addIngredient() {
    const newIngredients = [...ingredients, { recipe_ingredients: {} }];
    setIngredients(newIngredients);
  }

  function removeIngredient(index) {
    const newIngredients = [...ingredients];
    const deletedIngredient = newIngredients.splice(index, 1);
    setIngredients(newIngredients);
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
        <Row>
          <Col xs={4}>
            <Form.Control
              value={cookingTime}
              onChange={(event) => setCookingTime(event.target.value)}
              type="time"
              required
            />
          </Col>
        </Row>
      </Form.Group>
      <hr />

      <div>
        <Form.Label>Tags</Form.Label>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Row>
            {tags.map((tag, index) => {
              return (
                <Col key={index}>
                  <Form.Control
                    value={tag.title}
                    onChange={(event) =>
                      changeTagTitle(event.target.value, index)
                    }
                    type="string"
                    placeholder="Tag"
                    required
                  />
                </Col>
              );
            })}
          </Row>
        </Form.Group>
      </div>
      <hr />

      <div>
        <Form.Label>Ingredients</Form.Label>
        {ingredients.map((ingr, index) => {
          return (
            <Form.Group controlId="exampleForm.ControlSelect1" key={index}>
              <Row>
                <Col xs={4}>
                  <Form.Control
                    value={ingr.title}
                    onChange={(event) =>
                      changeIngredientTitle(event.target.value, index)
                    }
                    type="string"
                    placeholder="ingredient"
                    required
                  />
                </Col>
                <Col xs={3}>
                  <Form.Control
                    value={ingr.recipe_ingredients.quantity}
                    onChange={(event) =>
                      changeIngredientQuantity(event.target.value, index)
                    }
                    type="number"
                    placeholder="amount"
                    required
                  />
                </Col>
                <Col xs={3}>
                  <Form.Control
                    value={ingr.recipe_ingredients.unit_singular}
                    onChange={(event) =>
                      changeIngredientUnitSingular(event.target.value, index)
                    }
                    as="select"
                  >
                    <option disabled selected>unit</option>
                    <option>g</option>
                    <option>kg</option>
                    <option>l</option>
                    <option>ml</option>
                    <option>teaspoon</option>
                    <option>piece</option>
                    <option>pinch</option>
                    <option>spoon</option>
                    <option>splash</option>
                  </Form.Control>
                </Col>
                <Col xs={1}>
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
          placeholder="Website, recipe book, mom, etc"
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
