import React, { useState } from "react";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";
import { categoryName } from "../constans/categories";
import postOrderTypes from "../constans/postOrderTypes";
import PostButton from "../component/PostButton";
import LogoutButton from "../component/LogoutButton";
import PostModal from "../component/PostModal";

function Category({ match }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const category = match.params.category;

  const increment = () => {
    setOffset(offset + 1);
  };
  const decrement = () => {
    setOffset(offset - 1);
  };

  const isClickSub = offset <= 0;

  console.log(offset);

  return (
    <div className='App'>
      <div className='global'>
        <div className='l-contents clearfix'>
          <div className='l-header c-header'>
            <a href='/'><img className='c-logo' src='/kip_logo.png'></img></a>
            <CategoryCardList />
            <LogoutButton />
          </div>
          <div className='l-main c-main'>
            <h1>{categoryName[category]}で一番役に立ったナレッジ</h1>
            <KnowledgeCardList
              type={postOrderTypes.popular}
              category={category}
              offset={0}
              limit={1}
            />
            <h1>新着のナレッジ</h1>
            <KnowledgeCardList
              type={postOrderTypes.new}
              category={category}
              offset={4 * offset}
              limit={4}
            />
            <button onClick={decrement} disabled={isClickSub}>
              前
            </button>
            <button onClick={increment}>次</button>
            <PostButton onClick={openModal} />
            <PostModal isOpen={modalIsOpen} onClick={closeModal}></PostModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
