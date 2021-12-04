import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      {/* <NavbarItem path="/" linkText="Home" /> */}
      <Link to={`add_recipe`} className="AddRecipeButton">
        <Button variant="outline-success" size="sm">
          Add recipe
        </Button>
      </Link>
      <Button
        variant="success"
        size="sm"
        className="LogOutButton"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </>
  );
}
