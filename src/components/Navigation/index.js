import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const today = new Date();
  const currentTime = today.getHours();

  const greeting = (() => {
    if (currentTime < 6) {
      return `Good night`;
    } else if (currentTime < 12) {
      return `Good morning`;
    } else if (currentTime < 18) {
      return `Good afternoon`;
    } else if (currentTime < 24) {
      return `Good evening`;
    } else {
      return `Hi`;
    }
  })();

  const HiUser = token ? (
    <Navbar.Text>
      <label className="Navbar">{greeting} {user.firstName}!</label>
    </Navbar.Text>
  ) : (
    <></>
  );
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar className="Navbar" expand="sm" sticky="top">
      <Navbar.Brand as={NavLink} to="/">
        <label className="NavbarHeader">MyRecipeBook</label>
      </Navbar.Brand>
      {HiUser}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          style={{
            maxWidth: "18.75rem",
            marginLeft: "auto",
          }}
          fill
        >
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
