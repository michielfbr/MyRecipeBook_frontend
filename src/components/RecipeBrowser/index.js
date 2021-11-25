import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron, Container } from "react-bootstrap";
import { fetchAllRecipes } from "../../store/recipe/actions";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { selectRecipes } from "../../store/recipe/selectors";

export default function RecipeBrowser() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const recipes = useSelector(selectRecipes);
  const userId = user.id

  useEffect(() => {
    dispatch(fetchAllRecipes(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      <h1>Recipe Browser</h1>
      <div>
        {!recipes ? (
          <></>
        ) : (
          <div>
            {recipes.map((recipe) => {
              return (
                <div
                  key={recipe.id}
                  style={{
                    width: "50%",
                    padding: "10px",
                    margin: "10px",
                    boxSizing: "border-box",
                    border: "1px solid lightgrey",
                  }}
                >
                  <Link to={`/recipe/${recipe.id}`}>
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      style={{
                        maxWidth: "100%",
                      }}
                    ></img>
                  </Link>
                  <Link to={`/recipe/${recipe.id}`}>
                    <h4>{recipe.title}</h4>
                  </Link>
                  <p>{recipe.cookingTime}</p>
                  <p>
                    {recipe.tags.map((tag) => {
                      return (<span key={tag.id}>{tag.title} </span>);
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
}
