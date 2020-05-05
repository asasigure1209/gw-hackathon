import React from "react";

function KnowledgeCard({ knowledge }) {
  const { user } = knowledge;

  return (
    <div className='c-knowledgecard'>
      <img
        src={user.image}
        style={{ width: "65px", height: "65px", objectFit: "cover" }}
        alt='user icon'
      />
      <h2>名前: {user.name}</h2>
      <p className='created'>created_at: {knowledge.created_at}</p>
      <p className='contents'>content: {knowledge.content}</p>
      <p className='category'>カテゴリ: {knowledge.category}</p>
      <p className='useful'>役に立った: {knowledge.useful_count}</p>
      <p className='good'>良いね: {knowledge.like_users.length}</p>
    </div>
  );
}

export default KnowledgeCard;
