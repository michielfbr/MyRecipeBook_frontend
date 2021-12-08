import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Col,
  Row,
  FloatingLabel,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

    dispatch(signUp(email, password, firstName, lastName));

    // setEmail("");
    // setPassword("");
    // setFirstName("");
    // setLastName("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h2 className="Header">Welcome to MyRecipeBook</h2>
        <h4>A place to store and browse through the recipes you collect</h4>
        <Form.Group className="mt-5" controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput"
            label="First name"
            className="mb-3"
          >
            <Form.Control
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              placeholder="Enter first name"
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <FloatingLabel
            controlId="floatingInput"
            label="Last name"
            className="mb-3"
          >
            <Form.Control
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder="Enter last name"
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
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
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
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
        {/* <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group> */}
        <Form.Group className="mt-5">
          <Button variant="success" type="submit"onClick={submitForm}>
            Sign up
          </Button>{" "}
          <Link className="Link" to="/">
            or log in
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
}
