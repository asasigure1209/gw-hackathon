import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import KnowledgeCard from "./KnowledgeCard";

const url = "http://localhost:3004/posts";

function KnowledgeCardList(params) {
  const [knowledges, setKnowledges] = useState();

  useEffect(() => {
    // api呼び出してナレッジを取得
    // テスト用
    axios.get(url).then((res) => {
      setKnowledges(res.data);
    });
    //本番
    // axios
    //   .get(url, {
    //     params,
    //   })
    //   .then((res) => {
    //     setKnowledges(res.data);
    //   });
  }, [params]);

  // ナレッジカードの作成
  const knowledgeCardList = (knowledges) => {
    if (knowledges) {
      return knowledges.map((knowledge, index) => (
        <KnowledgeCard key={index} knowledge={knowledge} />
      ));
    }
  };

  return <Fragment>{knowledgeCardList(knowledges)}</Fragment>;
}

export default KnowledgeCardList;
