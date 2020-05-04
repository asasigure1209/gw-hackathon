import React from "react";

function Category({ match }) {
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
      <div
        style={{ width: "100%", height: 400, backgroundColor: "black" }}
      ></div>
      <p>{match.params.category}</p>
    </div>
  );
}

export default Category;
