import React, { useState, useContext } from "react";
import { categoryId } from "../constans/categories";
import axios from "axios";
import { UserContext } from "../App";

const url = "http://localhost:8000/posts";

function PostForm({ onClick }) {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categoryId.etc);
  const [user,] = useContext(UserContext);

  const sendPostData = () => {
    console.log(user);

    axios.post(url,{
        user_id: user.id,
        content,
        category
      },{
        headers: {
          Authorization: `Bearer ${user.token}`
      }}
    ).then((res) => {
      console.log("data", res.data);
    });

    onClick();
  };

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const isClick = content === "";

  return (
    <div className='postmodal clearfix'>
      <img
        style={{ width: "65px", height: "65px", objectFit: "cover" }}
        src={user.image}
        alt='自分のアイコン'
      />
      <h2>{user.name}</h2>
      <div>
        <select className='c-categoryselect' value={category} onChange={handleChangeCategory}>
          <option value={categoryId.business}>ビジネススキル</option>
          <option value={categoryId.comminucation}>コミュニケーション</option>
          <option value={categoryId.mylife}>マイライフ</option>
          <option value={categoryId.etc}>つぶやき</option>
        </select>
        <textarea placeholder="ここにナレッジを入力しよう" maxLength="140" value={content} onChange={handleChangeContent} ></textarea>
        <button className='c-post' onClick={sendPostData} disabled={isClick}>
          投稿する
        </button>
      </div>
    </div>
  );
}

export default PostForm;
