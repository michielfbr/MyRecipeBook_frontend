import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Badge,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import RecipeBrowserCard from "../RecipeBrowserCard";
import { fetchAllRecipes } from "../../store/recipe/actions";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { selectRecipes } from "../../store/recipe/selectors";

export default function RecipeBrowser() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const recipes = useSelector(selectRecipes);
  const userId = user.id;

  useEffect(() => {
    dispatch(fetchAllRecipes(userId));
  }, [dispatch, userId]);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cooking time
    </Tooltip>
  );

  return (
    <Container>
      {/* <Row>
      <Col sm={{ span: 4, offset: 2 }}>
      <h1 className='Header'>MyRecipeBook</h1>
      </Col>
      </Row> */}
      <div className="pagePadding" style={{ paddingTop: "40px" }}>
        {!recipes ? (
          <></>
        ) : (
          <div>
            {recipes.map((recipe) => {
              return <RecipeBrowserCard key={recipe.id} recipe={recipe} />;
            })}
          </div>
        )}
      </div>

      {/* <Col
        sm={{ span: 1, offset: 4 }}
        // className="d-flex justify-content-sm-end"
      >
        <Link
          to={`/about`}
          className="Link"
          // style={{ position: "absolute", right: "8px", bottom: "8px" }}
        >
          about
        </Link>
      </Col> */}
    </Container>
  );
}
