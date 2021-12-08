import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  FloatingLabel,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import RecipeFormIngredients from "../RecipeFormIngredients";
import RecipeFormTags from "../RecipeFormTags";
import ReactQuill from "react-quill";
import "./quill.snow.css";

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
    submitRecipe();
  }

  function changeTagTitle(value, index) {
    const newTags = [...tags];
    newTags[index].title = value.toLowerCase();
    setTags(newTags);
    onChangeHandler({ target: { name: "tags", value: newTags } });
  }

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
    const newIngredients = [
      ...ingredients,
      { recipe_ingredients: { quantity: "" } },
    ];
    setIngredients(newIngredients);
  }

  function removeIngredient(index) {
    const newIngredients = [...ingredients].splice(index, 1);
    // const deletedIngredient = newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add ingredient
    </Tooltip>
  );

  const editorModules = {
    toolbar: [
      ["bold", "italic"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  return (
    <Form as={Col} md={{ span: 10, offset: 1 }} className="mt-5">
      <h1 className="Header">{pageTitle}</h1>

      <Form.Group>
        <FloatingLabel
          controlId="floatingInput"
          label="Recipe name"
          className="mb-3"
        >
          <Form.Control
            value={title}
            name="title"
            onChange={(event) => onChangeHandler(event)}
            type="text"
            placeholder="Recipe title"
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group>
        <FloatingLabel
          controlId="floatingInput"
          label="Image url"
          className="mb-3"
        >
          <Form.Control
            value={imageUrl}
            name="imageUrl"
            onChange={(event) => onChangeHandler(event)}
            type="url"
            placeholder="Image url"
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group>
        <Row>
          <Col xs={4}>
            <FloatingLabel
              controlId="floatingInput"
              label="Cooking time"
              className="mb-3"
            >
              <Form.Control
                value={cookingTime}
                name="cookingTime"
                onChange={(event) => onChangeHandler(event)}
                type="time"
                required
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Form.Group>
      <hr />

      <div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Row>
            <Form.Label className="Header">Tags</Form.Label>
            {tags.map((tag, index) => {
              return (
                <RecipeFormTags
                  key={index}
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
        <Form.Label className="Header">Ingredients</Form.Label>
        {ingredients.map((ingr, index) => {
          return (
            <RecipeFormIngredients
              key={index}
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

      <OverlayTrigger
        placement="right"
        delay={{ show: 50, hide: 300 }}
        overlay={renderTooltip}
      >
        <Button
          variant="outline-success"
          size="sm"
          type="submit"
          onClick={addIngredient}
        >
          +
        </Button>
      </OverlayTrigger>
      <hr />

      <Form.Group>
        <Form.Label className="Header">Instructions</Form.Label>

        {/* <Form.Control
          as="textarea"
          style={{ height: "300px" }}
          value={instructions}
          name="instructions"
          onChange={(event) => onChangeHandler(event)}
          type="text"
          placeholder="Instructions"
          required
        /> */}
<div style={{backgroundColor: "#ffffff"}}>
        <ReactQuill
          modules={editorModules}
          theme="snow"
          name="instructions"
          value={instructions}
          onChange={(content) =>
            onChangeHandler({
              target: { name: "instructions", value: content },
            })
          }
        /></div>
      </Form.Group>

      <br />
      <Form.Group>
        <FloatingLabel
          controlId="floatingInput"
          label="Reference"
          className="mb-3"
        >
          <Form.Control
            value={reference}
            name="reference"
            onChange={(event) => onChangeHandler(event)}
            type="text"
            placeholder="Website, recipe book, mom, etc"
            required
          />
        </FloatingLabel>
      </Form.Group>

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

      <Form.Group className="mt-5">
        <Button variant="success" type="submit" onClick={submitForm}>
          Save recipe
        </Button>
      </Form.Group>
    </Form>
  );
}
