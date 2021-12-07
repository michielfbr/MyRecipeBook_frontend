import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Offcanvas,
  Container,
  Col,
} from "react-bootstrap";

export default function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="Footer" expand="sm" fixed="bottom">
        <Nav className="FooterText" fill>
          <Nav.Link onClick={handleShow}>About</Nav.Link>
        </Nav>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ backgroundColor: "#f8f6ee" }}
      >
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>MyRecipeBook</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container
            as={Col}
            md={{ span: 12, offset: 0 }}
            className="pagePadding"
          >
            <h2 className="Header">MyRecipeBook</h2>
            <h4>A place to store and browse through the recipes you collect</h4>

            <h6 className="Header" style={{ marginTop: "24px" }}>
              About
            </h6>
            <p style={{ marginTop: "8px" }}>
              MyRecipeBook has been built to hold your recipes that before were
              kept in many different places. Email/webpage print outs,
              recipecards from meal-kits, recipes.docx, browser bookmarks, etc.
            </p>

            <p style={{ marginTop: "24px" }}>
              Starting of as my portfolio project following the{" "}
              <a href={`https://codaisseur.com/`} className="Link">
                Codaisseur
              </a>{" "}
              fullstack development bootcamp, it is now used almost daily by my
              family and me.
            </p>

            <h6 className="Header" style={{ marginTop: "24px" }}>
              Thank you
            </h6>
            <p style={{ marginTop: "8px" }}>
              All Codaisseur teachers for giving me the knowledge to build this
              and help me when I got stuck.
            </p>

            <p style={{ marginTop: "12px" }}>
              Hanne for doing your magic on the design &amp; creating time for
              me to attend Codaisseur and therefor build this.
            </p>

            <h6 className="Header" style={{ marginTop: "24px" }}>
              Code
            </h6>
            <p style={{ marginTop: "8px" }}>
              You can check out MyRecipeBook's source code on{" "}
              <a
                href={`https://github.com/michielfbr/MyRecipeBook_frontend`}
                className="Link"
              >
                GitHub
              </a>
              .
            </p>

            <p style={{ marginTop: "24px" }}>
              Happy cooking!
              <br />
              Michiel Brongers
            </p>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
