import React from "react";
import { Col, Form, FloatingLabel } from "react-bootstrap";

export default function RecipeFormTags(props) {
  const { tag, index, changeTagTitle } = props;
  return (
    <Col key={index}>
      <FloatingLabel
          controlId="floatingInput"
          label="Tag"
          className="mb-3"
        >
      <Form.Control
        value={tag.title}
        name="title"
        onChange={(event) => changeTagTitle(event.target.value, index)}
        type="string"
        placeholder="Tag"
        required
      /></FloatingLabel>
    </Col>
  );
}
