import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecipes } from "../../store/recipe/actions";

export default function RecipeBrowser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  return (
    <>
      <h1>Recipe Browser</h1>
    </>
  );
}
