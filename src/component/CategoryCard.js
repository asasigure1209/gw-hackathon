import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ id }) {
  return (
    <Link to={`/categories/${id}`}>
      <img src={`/${id}.jpg`} alt='カテゴリ'></img>
    </Link>
  );
}

export default CategoryCard;
