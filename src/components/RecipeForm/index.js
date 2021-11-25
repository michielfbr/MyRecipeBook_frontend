import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function RecipeForm({
  pageTitle,
  recipe,
  setRecipe,
  submitForm,
}) {
  const [title, setTitle] = useState(recipe.title);
  const [imageUrl, setImageUrl] = useState(recipe.imageUrl);
  const [cookingTime, setCookingTime] = useState(recipe.cookingTime);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [reference, setReference] = useState(recipe.reference)

  return (
    
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5">{pageTitle}</h1>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Recipe name</Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Recipe title"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Image url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="url"
            placeholder="Image url"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cooking Time</Form.Label>
          <Form.Control
            value={cookingTime}
            onChange={(event) => setCookingTime(event.target.value)}
            type="time"
            required
          />
        </Form.Group>

        <Form.Group controlId="ControlTextarea1">
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

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Reference</Form.Label>
          <Form.Control
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            type="text"
            placeholder="Recipe title"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Save recipe
          </Button>
        </Form.Group>
      </Form>
    
  );
}
