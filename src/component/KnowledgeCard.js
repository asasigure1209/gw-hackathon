import React from "react";

function KnowledgeCard({ name, content }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{content}</p>
    </div>
  );
}

export default KnowledgeCard;
