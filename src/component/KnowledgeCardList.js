import React, { Fragment } from "react";
import KnowledgeCard from "./KnowledgeCard";

function KnowledgeCardList() {
  return (
    <Fragment>
      <KnowledgeCard name={"minami"} content={"今日はだれとも喋らんかった。"} />
      <KnowledgeCard name={"daisuke"} content={"今日はこの人と喋った。とても良かった。"} />
      <KnowledgeCard name={"taichi"} content={"今日はいっぱい出た"} />
      <KnowledgeCard name={"gotosyun"} content={"今日は面白いゲームで遊んだ"} />
    </Fragment>
  );
}

export default KnowledgeCardList;
