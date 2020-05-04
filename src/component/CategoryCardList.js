import React, { Fragment } from "react";
import CategoryCard from "./CategoryCard";

function CategoryCardList() {
  return (
    <Fragment>
      <CategoryCard name={"ビジネススキル"} id={"business"} />
      <CategoryCard name={"マイライフ"} id={"mylife"} />
      <CategoryCard name={"コミュニケーション"} id={"comminucation"} />
      <CategoryCard name={"その他"} id={"etc"} />
    </Fragment>
  );
}

export default CategoryCardList;
