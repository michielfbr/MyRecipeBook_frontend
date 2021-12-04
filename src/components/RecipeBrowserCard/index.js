import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { fetchAllRecipes } from "../../store/recipe/actions";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { selectRecipes } from "../../store/recipe/selectors";

export default function RecipeBrowserCard(props) {
  const { recipe } = props;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cooking time
    </Tooltip>
  );

  return (
    <Row>
      <Col sm={{ span: 4, offset: 3 }}>
        <Link to={`/recipe/${recipe.id}`}>
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            style={{
              maxWidth: "100%",
            }}
          ></img>
        </Link>
      </Col>

      <Col sm={{ span: 4, offset: 0 }}>
        <Link to={`/recipe/${recipe.id}`}>
          <h4 className='LinkHeader'>{recipe.title}</h4>
        </Link>
        <OverlayTrigger
          placement="right"
          delay={{ show: 50, hide: 300 }}
          overlay={renderTooltip}
        >
          <p>{recipe.cookingTime.substring(0, 5)}</p>
        </OverlayTrigger>
        <h5>
          {recipe.tags.map((tag) => {
            return (
              <Badge pill className="Tagbadge" bg="succes" key={tag.id}>
                <text>{tag.title}</text>
              </Badge>
            );
          })}
        </h5>
      </Col>
    </Row>
  );
}
