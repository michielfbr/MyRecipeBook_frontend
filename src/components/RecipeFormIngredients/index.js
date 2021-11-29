import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

export default function RecipeFormIngredients(props) {
    const {
        ingr,
        index,
        removeIngredient,
        changeIngredientTitle,
        changeIngredientQuantity,
        changeIngredientUnitSingular,
      } = props;
      return (
        <Form.Group controlId="exampleForm.ControlSelect1" key={index}>
          <Row>
            <Col xs={4}>
              <Form.Control
                value={ingr.title}
                name="title"
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
                <option disabled selected>
                  unit
                </option>
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
              <Button variant="secondary" onClick={() => removeIngredient(index)}>
                x
              </Button>
            </Col>
          </Row>
        </Form.Group>
      );
    }
    