import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import KnowledgeCard from "./KnowledgeCard";
import { UserContext } from "../App";

const url = "http://localhost:8000/posts";

function KnowledgeCardList(params) {
  const [knowledges, setKnowledges] = useState();
  const [user,] = useContext(UserContext);

  useEffect(() => {
    // api呼び出してナレッジを取得
    axios
      .get(url, {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      .then((res) => {
        setKnowledges(res.data);
      });
  }, [params, user]);

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
