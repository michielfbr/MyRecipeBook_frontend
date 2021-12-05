import React from "react";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <p>
        {"< "}
        <Link to={`/`} className="Link">
          home
        </Link>
      </p>
      <h2 className="Header">MyRecipeBook</h2>
      <h4>A place to store and browse through the recipes you collect</h4>

      <p style={{ marginTop: "24px" }}>
        MyRecipeBook has been built to hold your recipes that before were kept
        in many different places. Email and webpage print outs, recipecards from
        meal-kits, recipes.docx, browser bookmarks, etc.
      </p>

      <p style={{ marginTop: "24px" }}>
        Starting of as my portfolio project following the Codaisseur fullstack
        development bootcamp, we now daily welcome millions of users from around
        the world.
      </p>
    </Container>
  );
}
