import React, { useState, useEffect, useContext } from "react";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";
import { categoryId } from "../constans/categories";
import postOrderTypes from "../constans/postOrderTypes";
import PostButton from "../component/PostButton";
import LogoutButton from "../component/LogoutButton";
import PostModal from "../component/PostModal";
import axios from "axios";
import { UserContext } from "../App";

const url = "http://localhost:8000/posts_count";
const listNumber = 4;

function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0)
  const [user,] = useContext(UserContext);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then((res) => {
      setCount(res.data.count);
    },[user])
  })

  const increment = () => {
    window.scrollTo(0, 0);
    setOffset(offset + 1);
  };
  const decrement = () => {
    window.scrollTo(0, 0);
    setOffset(offset - 1);
  };

  const isClickSub = offset <= 0;
  const isClickAdd = count <= ((offset + 1) * listNumber);

  return (
    <div className='App'>
      <div className='global'>
        <div className='l-contents clearfix'>
          <div className='l-header c-header'>
            <img className='c-logo' src='/kip_logo.png' alt="ロゴ"></img>
            <CategoryCardList />
            <LogoutButton />
          </div>

          <div className='l-main c-main'>
            <h1>人気のナレッジ</h1>
            <KnowledgeCardList
              type={postOrderTypes.popular}
              category={categoryId.all}
              offset={0}
              limit={1}
            />
            <h1>新着のナレッジ</h1>
            <KnowledgeCardList
              type={postOrderTypes.new}
              category={categoryId.all}
              offset={listNumber * offset}
              limit={listNumber}
            />
            <button className='page' onClick={increment} disabled={isClickAdd}>次</button>
            <button className='page' onClick={decrement} disabled={isClickSub}>
              前
            </button>
            <PostButton onClick={openModal} />
            <PostModal isOpen={modalIsOpen} onClick={closeModal}></PostModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
