import React, { useState } from "react";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";
import { categoryId, categoryName } from "../constans/categories";
import postOrderTypes from "../constans/postOrderTypes";
import PostButton from "../component/PostButton";
import LogoutButton from "../component/LogoutButton";
import PostModal from "../component/PostModal";

function Category({ match }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const category = match.params.category;

  return (
    <div className='App'>
      <div className='global'>
        <div className='l-contents clearfix'>
          <div className='l-header c-header'>
            <img className='c-logo' src='/kip_logo.png'></img>
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
              offset={0}
              limit={4}
            />
            <PostButton onClick={openModal} />
            <PostModal isOpen={modalIsOpen} onClick={closeModal}></PostModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
