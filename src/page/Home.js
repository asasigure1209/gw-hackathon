import React from "react";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";

function Home() {
  return (
    <div className='App'>
      <CategoryCardList />
      <p>Home</p>
      <KnowledgeCardList />
    </div>
  );
}

export default Home;
