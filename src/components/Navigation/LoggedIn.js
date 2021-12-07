import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
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
