import React from "react";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import Login from "../../components/Login";
import RecipeBrowser from "../../components/RecipeBrowser";

export default function Home() {
  const token = useSelector(selectToken);

  if (token) {
    return <RecipeBrowser />;
  } else {
    return <Login />;
  }
}