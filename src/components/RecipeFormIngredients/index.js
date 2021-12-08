import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import { apiUrl } from "../../config/constants";

export default function RecipeFormIngredients(props) {
  const {
    ingr,
    index,
    removeIngredient,
    changeIngredientTitle,
    changeIngredientQuantity,
    changeIngredientUnitSingular,
  } = props;

  const [ingredientOptions, setIngredientOptions] = useState([]);
  const getIngredientOptions = async () => {
    const res = await axios.get(`${apiUrl}/ingredients`);
    let ingredientArray = [];
    res.data.map((ingredient) => ingredientArray.push(ingredient.title));
    setIngredientOptions(ingredientArray);
  };

  useEffect(() => {
    getIngredientOptions();
  }, []);
  return (
    <Form.Group controlId="exampleForm.ControlSelect1" key={index}>
      <Row>
        <Col xs={4}>
          <Typeahead
            id="ingredient title"
            defaultInputValue={ingr.title}
            name="title"
            onInputChange={(value) => changeIngredientTitle(value, index)}
            type="text"
            placeholder="ingredient"
            required
            options={ingredientOptions}
            emptyLabel="new ingredient"
            className="mb-1"
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
            defaultValue="unit"
            value={ingr.recipe_ingredients.unit_singular}
            onChange={(event) =>
              changeIngredientUnitSingular(event.target.value, index)
            }
            as="select"
          >
            <option disabled>unit</option>
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
            size="sm"
            onClick={() => removeIngredient(index)}
          >
            x
          </Button>
        </Col>
      </Row>
    </Form.Group>
  );
}
