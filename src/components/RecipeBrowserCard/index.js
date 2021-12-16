import React from "react";
import { Row, Col, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RecipeBrowserCard(props) {
  const { recipe } = props;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cooking time
    </Tooltip>
  );

  return (
    <Row className="RecipeCard">
      <Col
        sm={{ span: 3, offset: 1 }}
        className="d-flex justify-content-sm-end"
      >
        <Link to={`/recipe/${recipe.id}`}>
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            style={{
              width: "12rem",
              maxWidth: "100%",
              height: "8rem",
              objectFit: "cover",
            }}
          ></img>
        </Link>
      </Col>

      <Col sm={{ span: 8, offset: 0 }} float="right" className="RecipeCardCol">
        <h4>
          <Link to={`/recipe/${recipe.id}`} className="LinkHeader">
            {recipe.title}
          </Link>
        </h4>

        <OverlayTrigger
          placement="left-end"
          delay={{ show: 50, hide: 300 }}
          overlay={renderTooltip}
        >
          <p>{recipe.cookingTime.substring(0, 5)}</p>
        </OverlayTrigger>
        <h5>
          {recipe.tags.map((tag) => {
            return (
              <Badge pill className="Tagbadge" bg="succes" key={tag.id}>
                {tag.title}
              </Badge>
            );
          })}
        </h5>
      </Col>
    </Row>
  );
}
