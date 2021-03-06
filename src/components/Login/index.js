import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col, FloatingLabel } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h2 className="Header">Welcome to MyRecipeBook</h2>
        <h4>A place to store and browse through the recipes you collect</h4>
        <Form.Group className="mt-5" controlId="formBasicEmail">
          <FloatingLabel
            controlId="email"
            label="Email adress"
            className="mb-3"
          >
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <FloatingLabel
            controlId="password"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="success" type="submit" onClick={submitForm}>
            Log in
          </Button>{" "}
          <Link className="Link" to="/signup">
            or sign up
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
}
