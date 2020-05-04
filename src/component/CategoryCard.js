import React from "react";
import {
  Link
} from "react-router-dom";

function CategoryCard({ name, id }) {
  return (
    <Link to={`/categories/${id}`}>{name}</Link>
  );
}

export default CategoryCard;
