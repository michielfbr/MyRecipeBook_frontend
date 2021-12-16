import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import RecipeBrowserCard from "../RecipeBrowserCard";
import RecipeBrowserSearchForm from "../RecipeBrowserSearchForm";
import { fetchAllRecipes } from "../../store/recipe/actions";
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

  return (
    <Container>
      <div className="pagePadding" style={{ paddingTop: "32px" }}>
        <RecipeBrowserSearchForm userId={userId} />
        {!recipes ? (
          <></>
        ) : (
          <div style={{ paddingTop: "32px" }}>
            {recipes.map((recipe) => {
              return <RecipeBrowserCard key={recipe.id} recipe={recipe} />;
            })}
          </div>
        )}
      </div>
    </Container>
  );
}
