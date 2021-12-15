import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import { fetchAllMatchingRecipes } from "../../store/recipe/actions";

export default function RecipeBrowserSearchForm(props) {
  const { userId } = props;
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function submitForm(event) {
    dispatch(fetchAllMatchingRecipes(userId, search));
    event.preventDefault();
  }

  return (
    <Form as={Row} className="mt-0">
      <Form.Group as={Col} md={{ span: 4, offset: 3 }}>
        <Form.Control
          value={search}
          name="search"
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search recipe titles"
          required
        />
      </Form.Group>
      <Form.Group as={Col} md={{ span: 2, offset: 0 }}>
        <Button variant="success" type="submit" onClick={submitForm}>
          Search
        </Button>
      </Form.Group>
    </Form>
  );
}
