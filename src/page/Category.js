import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import KnowledgeCardList from "../component/KnowledgeCardList";
import CategoryCardList from "../component/CategoryCardList";
import { categoryName } from "../constans/categories";
import postOrderTypes from "../constans/postOrderTypes";
import PostButton from "../component/PostButton";
import LogoutButton from "../component/LogoutButton";
import PostModal from "../component/PostModal";
import { UserContext } from "../App";
import axios from "axios";

const url = "http://localhost:8000/posts_count";

function Category({ match }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [user,] = useContext(UserContext);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const category = match.params.category;

  useEffect(() => {
    axios.get(url, {
      params: {
        category
      },
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then((res) => {
      setCount(res.data.count);
    },[user, category])
  })

  const increment = () => {
    setOffset(offset + 1);
  };
  const decrement = () => {
    setOffset(offset - 1);
  };

  const isClickSub = offset <= 0;
  const isClickAdd = count <= ((offset + 1) * 4);

  return (
    <div className='App'>
      <div className='global'>
        <div className='l-contents clearfix'>
          <div className='l-header c-header'>
            <Link to='/'><img className='c-logo' src='/kip_logo.png' alt="logo"></img></Link>
            <CategoryCardList />
            <LogoutButton />
          </div>
          <div className='l-main c-main'>
            <h1>{categoryName[category]}で一番役に立っているナレッジ</h1>
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
            <button className='page' onClick={increment}>次</button>
            <button className='page' onClick={decrement} disabled={isClickSub}>
              前
            </button>
            <button onClick={increment} disabled={isClickAdd}>次</button>
            <PostButton onClick={openModal} />
            <PostModal isOpen={modalIsOpen} onClick={closeModal}></PostModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
