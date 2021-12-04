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
      <div className="pagePadding" style={{paddingTop:"24px"}}>
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
    </Container>
  );
}
