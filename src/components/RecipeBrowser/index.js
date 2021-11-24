import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { fetchAllRecipes } from "../../store/recipe/actions";
import { Link } from "react-router-dom";
import { selectAllRecipes } from "../../store/recipe/selectors";

export default function RecipeBrowser() {
  const dispatch = useDispatch();
  const recipes = useSelector(selectAllRecipes);

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  return (
    <Jumbotron>
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
                  <span>
                    {recipe.tags.map((tag) => {
                      return <>{tag.title} </>;
                    })}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Jumbotron>
  );
}
