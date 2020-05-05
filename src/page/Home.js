import React from "react";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";
import categories from "../constans/categories";
import postOrderTypes from "../constans/postOrderTypes";
import PostButton from "../component/PostButton";
import LogoutButton from "../component/LogoutButton";

function Home() {
  return (
    <div className='App'>
      <CategoryCardList />
      <LogoutButton />
      <PostButton />
      <h1>人気のナレッジ</h1>
      <KnowledgeCardList
        type={postOrderTypes.popular}
        category={categories.all}
        offset={0}
        limit={1}
      />
      <h1>新着のナレッジ</h1>
      <KnowledgeCardList
        type={postOrderTypes.new}
        category={categories.all}
        offset={0}
        limit={4}
      />
    </div>
  );
}

export default Home;
