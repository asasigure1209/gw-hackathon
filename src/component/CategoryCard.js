import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ id }) {
  return (
    <Link to={`/categories/${id}`}>
      <img className='c-header__categoryimg' src={`${id}.jpg`} alt='カテゴリ'></img>
    </Link>
  );
}

export default CategoryCard;
