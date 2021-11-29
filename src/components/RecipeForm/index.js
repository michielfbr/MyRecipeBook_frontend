import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import RecipeFormIngredients from "../RecipeFormIngredients";
import RecipeFormTags from "../RecipeFormTags";

export default function RecipeForm({
  pageTitle,
  recipe,
  onChangeHandler,
  submitRecipe,
}) {
  const { title, imageUrl, cookingTime, instructions, reference } = recipe;
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [tags, setTags] = useState(recipe.tags);

  function submitForm(event) {
    event.preventDefault();
    console.log("Save recipe submitted in form");
    submitRecipe();
  }

  function changeTagTitle(value, index) {
    const newTags = [...tags];
    newTags[index].title = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase;
    setTags(newTags);
    onChangeHandler({ target: { name: "tags", value: newTags } });
  }

  // string.charAt(0).toUpperCase() + string.slice(1)

  function changeIngredientTitle(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].title = value.toLowerCase();
    setIngredients(newIngredients);
    onChangeHandler({ target: { name: "ingredients", value: newIngredients } });
  }

  function changeIngredientQuantity(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].recipe_ingredients.quantity = value;
    setIngredients(newIngredients);
    onChangeHandler({ target: { name: "ingredients", value: newIngredients } });
  }

  function changeIngredientUnitSingular(value, index) {
    const newIngredients = [...ingredients];
    newIngredients[index].recipe_ingredients.unit_singular = value;
    setIngredients(newIngredients);
    onChangeHandler({ target: { name: "ingredients", value: newIngredients } });
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
          name="title"
          onChange={(event) => onChangeHandler(event)}
          type="text"
          placeholder="Recipe title"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          name="imageUrl"
          onChange={(event) => onChangeHandler(event)}
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
              name="cookingTime"
              onChange={(event) => onChangeHandler(event)}
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
                <RecipeFormTags
                  tag={tag}
                  index={index}
                  changeTagTitle={changeTagTitle}
                />
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
            <RecipeFormIngredients
              ingr={ingr}
              index={index}
              removeIngredient={removeIngredient}
              changeIngredientTitle={changeIngredientTitle}
              changeIngredientQuantity={changeIngredientQuantity}
              changeIngredientUnitSingular={changeIngredientUnitSingular}
            />
          );
        })}
      </div>

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
          name="instructions"
          onChange={(event) => onChangeHandler(event)}
          type="text"
          placeholder="Instructions"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Reference</Form.Label>
        <Form.Control
          value={reference}
          name="reference"
          onChange={(event) => onChangeHandler(event)}
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
