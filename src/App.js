import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Footer from "./components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/edit_recipe" element={<EditRecipe />} />
        <Route path="/add_recipe" element={<AddRecipe />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
