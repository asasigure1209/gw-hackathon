import React from "react";

function KnowledgeCard({ knowledge }) {
  const { user } = knowledge;

  return (
    <div className='c-knowledgecard clearfix'>
      <img
        src={user.image}
        style={{ width: "65px", height: "65px", objectFit: "cover" }}
        alt='user icon'
      />
      <div className='c-knowledge'>
        <p className='created'>{knowledge.created_at}</p>
        <h2>{user.name}</h2>
        <p className='contents'>{knowledge.content}</p>
      </div>
      <p className='category'>{knowledge.category}</p>
      <div className='c-right'>
        <p className='useful'>{knowledge.useful_count} 役に立った</p>
        <p className='good'>良いね: {knowledge.like_users.length}</p>
      </div>
    </div>
  );
}

export default KnowledgeCard;
