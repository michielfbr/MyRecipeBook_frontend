import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  FormControl,
  // CloseButton,
} from "react-bootstrap";
import {
  fetchAllRecipes,
  fetchAllMatchingRecipes,
} from "../../store/recipe/actions";

export default function RecipeBrowserSearchForm(props) {
  const { userId } = props;
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function submitForm(event) {
    console.log("search", search);
    dispatch(fetchAllMatchingRecipes(userId, search));
    event.preventDefault();
  }

  function clearSearch() {
    setSearch("");
    dispatch(fetchAllRecipes(userId));
  }

  const clearButton =
    search === "" ? (
      <></>
    ) : (
      <Button
        variant="outline-success"
        id="button-addon2"
        onClick={clearSearch}
      >
        &times;
      </Button>
    );

  return (
    <>
      <Form>
        <Row className="d-flex justify-content-center align-items-center">
          {/* <Form className="d-flex align-items-center"> */}
          <Col xs="6" lg="4">
            <InputGroup>
              {/* <div class="form-group has-feedback has-clear">
          <input
            id="searchinput"
            type="search"
            value={search}
            name="search"
            class="form-control"
            placeholder="Search recipe titles ..."
            onChange={(event) => setSearch(event.target.value)}
          />
        </div> */}

              <FormControl
                type="text"
                value={search}
                name="search"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Find recipe"
                required
              />
              {clearButton}
            </InputGroup>
          </Col>

          {/* <Col xs="auto">
            <Form.Group>
              <CloseButton onClick={clearSearch} />
            </Form.Group>
          </Col> */}

          <Col xs="auto">
            <Form.Group>
              <Button variant="success" type="submit" onClick={submitForm}>
                Find
              </Button>
            </Form.Group>
          </Col>

          {/* <Col xs="auto">
            <Form.Group>
              <Button variant="success" type="submit" onClick={submitForm}>
                &#128269;
              </Button>
            </Form.Group>
          </Col> */}

          {/* <Col xs="auto">
            <Form.Group>
              <Button variant="outline-success" onClick={clearSearch}>
                Clear search
              </Button>
            </Form.Group>
          </Col> */}

          {/* </Form> */}
        </Row>
      </Form>
    </>
  );
}
