import React from "react";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";

function Home() {
  return (
    <div className='App'>
      <header className='l-header c-header'>
        <div className='l-justify-spaceBetween c-header__content'>
          <div className='c-header__logo'>
            <span>時雨記</span>
          </div>
          <nav className='c-header__menu'>
            <ul className='l-justify-left c-menu'>
              <li className='c-menu__list'>トップ</li>
              <li className='c-menu__list'>アバウト</li>
              <li className='c-menu__list'>記事検索</li>
            </ul>
          </nav>
        </div>
      </header>
      <CategoryCardList />
      <p>Home</p>
      <KnowledgeCardList />
    </div>
  );
}

export default Home;
