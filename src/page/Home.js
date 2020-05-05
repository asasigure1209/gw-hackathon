import React, { useState } from "react";
import Modal from "react-modal";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";
import categories from "../constans/categories";
import postOrderTypes from "../constans/postOrderTypes";
import PostButton from "../component/PostButton";
import LogoutButton from "../component/LogoutButton";
import PostModal from "../component/PostModal";

function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='App'>
      <div className='l-contents clearfix'>
        <div className='l-header c-header'>
          <CategoryCardList />
          <LogoutButton />
        </div>

        <div className='l-main c-main'>
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
          <PostButton onClick={openModal} />
          <PostModal isOpen={modalIsOpen} onClick={closeModal}></PostModal>
        </div>
      </div>
    </div>
  );
}

export default Home;
