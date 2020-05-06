import React, { useState } from "react";
import { categoryId } from "../constans/categories";
import axios from "axios";

const url = "http://localhost:3004/posts";

function PostForm({ onClick }) {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categoryId.etc);

  const sendPostData = () => {
    let params = new URLSearchParams();
    // ID仮置
    params.append("user_id", 1);
    params.append("content", content);
    params.append("category", category);

    axios.post(url, params).then((res) => {
      console.log("送信しました。");
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
        src='init_profile.png'
        alt='自分のアイコン'
      />
      <h2>Daisuke Hasegawa</h2>
      <div>
        <select className='c-categoryselect' value={category} onChange={handleChangeCategory}>
          <option value={categoryId.business}>ビジネススキル</option>
          <option value={categoryId.comminucation}>コミュニケーション</option>
          <option value={categoryId.mylife}>マイライフ</option>
          <option value={categoryId.etc}>つぶやき</option>
        </select>
        <textarea placeholder="ここにナレッジを入力しよう" maxlength="140" value={content} onChange={handleChangeContent} ></textarea>
        <button className='c-post' onClick={sendPostData} disabled={isClick}>
          投稿する
        </button>
      </div>
    </div>
  );
}

export default PostForm;
