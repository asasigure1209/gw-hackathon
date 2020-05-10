import React, { useContext } from "react";
import { categoryName } from "../constans/categories";
import axios from "axios";
import { UserContext } from "../App";

const likeUrl = "http://localhost:8000/likes";
const usefulUrl = "http://localhost:8000/usefuls";
const postUrl = "http://localhost:8000/posts";

function KnowledgeCard({ knowledge }) {
  const { user } = knowledge;
  const [viewer, setViewer] = useContext(UserContext);

  const sendLikeData = () => {
    console.log(knowledge);

    axios.post(likeUrl,{
        user_id: viewer.id,
        post_id: knowledge.id,
      },{
        headers: {
          Authorization: `Bearer ${viewer.token}`
      }}
    ).then((res) => {
      //再レンダリングを強制する
      setViewer({...viewer});
    });
  };

  const sendUsefulData = () => {
    console.log(knowledge);

    axios.post(usefulUrl,{
        user_id: viewer.id,
        post_id: knowledge.id,
      },{
        headers: {
          Authorization: `Bearer ${viewer.token}`
        }
      }
    ).then((res) => {
      //再レンダリングを強制する
      setViewer({...viewer});
    });
  };

  const deletePost = () => {
    console.log("user_id", viewer.id);
    console.log("knowledge user id", user.id);
    axios.delete(`${postUrl}/${knowledge.id}`, {
      params: {
        user_id: viewer.id,
      },
      headers: {
        Authorization: `Bearer ${viewer.token}`
      }
    }).then((res) => {
      //再レンダリングを強制する
      setViewer({...viewer});
    })
  }

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
        {viewer.id === user.id ? <button onClick={deletePost}>削除</button> : null}
        <p className='contents'>{knowledge.content}</p>
      </div>
      <p className='category'>{categoryName[knowledge.category]}</p>
      <div className='c-right'>
        <button className='useful' onClick={sendUsefulData}>{knowledge.useful_count} 役に立った</button>
        <button className='good' onClick={sendLikeData}>良いね: {knowledge.like_users}</button>
      </div>
    </div>
  );
}

export default KnowledgeCard;
