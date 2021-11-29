import React from "react";
import { Col, Form } from "react-bootstrap";

export default function RecipeFormTags(props) {
  const { tag, index, changeTagTitle } = props;
  return (
    <Col key={index}>
      <Form.Control
        value={tag.title}
        name="title"
        onChange={(event) => changeTagTitle(event.target.value, index)}
        type="string"
        placeholder="Tag"
        required
      />
    </Col>
  );
}
