import React from "react";

function KnowledgeCard({ knowledge }) {
  const { user } = knowledge;

  return (
    <div>
      <h2>名前: {user.name}</h2>
      <img
        src={user.image}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
        alt='user icon'
      />
      <p>created_at: {knowledge.created_at}</p>
      <p>カテゴリ: {knowledge.category}</p>
      <p>content: {knowledge.content}</p>
      <p>役に立った: {knowledge.useful_count}</p>
      <p>良いね: {knowledge.like_users.length}</p>
    </div>
  );
}

export default KnowledgeCard;
