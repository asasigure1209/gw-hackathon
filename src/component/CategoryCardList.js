import React, { Fragment } from "react";
import CategoryCard from "./CategoryCard";
import { categoryId } from "../constans/categories";

function CategoryCardList() {
  return (
    <Fragment>
      <CategoryCard id={categoryId.business} />
      <CategoryCard id={categoryId.mylife} />
      <CategoryCard id={categoryId.comminucation} />
      <CategoryCard id={categoryId.etc} />
    </Fragment>
  );
}

export default CategoryCardList;
