import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function CategoryCard({ name, id }) {
  return (
    <Link to={`/categories/${id}`}>{name}</Link>
  );
}

export default CategoryCard;
