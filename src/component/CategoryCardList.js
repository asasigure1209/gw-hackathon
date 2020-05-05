import React, { Fragment } from "react";
import CategoryCard from "./CategoryCard";
import categories from "../constans/categories";

function CategoryCardList() {
  return (
    <Fragment>
      <CategoryCard id={categories.business} />
      <CategoryCard id={categories.mylife} />
      <CategoryCard id={categories.comminucation} />
      <CategoryCard id={categories.etc} />
    </Fragment>
  );
}

export default CategoryCardList;
