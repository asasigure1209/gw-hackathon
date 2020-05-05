import React from "react";

function PostForm({ onClick }) {
  return (
    <div>
      <img
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
        src='init_profile.png'
        alt='自分のアイコン'
      />
      <h2>Daisuke Hasegawa</h2>
      <select>
        <option value='business'>ビジネススキル</option>
        <option value='communication'>コミュニケーション</option>
        <option value='mylife'>マイライフ</option>
        <option value='etc'>つぶやき</option>
      </select>
      <input type='text'></input>
      <button onClick={onClick}>投稿する</button>
    </div>
  );
}

export default PostForm;
