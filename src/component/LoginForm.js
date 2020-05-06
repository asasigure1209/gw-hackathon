import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const url = "http://localhost:8000/login";

function LoginForm() {
  const [, setUser] = useContext(UserContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const sendLoginData = () => {
    console.log(id, password);
    axios.post(url, {
      uid: id,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      setUser(res.data.user);
      history.push("/");
    })
  }

  const handleChangeId = (event) => {
    setId(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className='global clearfix'>
      <div className='l-contents'>
        <div className='l-lp c-lp'>
          <p>ナレッジ共有サービス</p>
          <img className='c-logo' src='/kip_logo.png' alt='KIPロゴ'></img>
          <img className='l-mainimg c-mainimg' src='/kip_main.png' alt="メインイメージ"></img>
        </div>
        <div className='l-login c-login'>
          <h2>Login</h2>
          <label>Login ID</label>
          <input type='text' name='id' value={id} onChange={handleChangeId}></input>
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={handleChangePassword}></input>
          <button className='loginbtn' onClick={sendLoginData}>ログイン</button>
          <div className='center'><Link className='registerbtn' type='button' to={'/signup'}>会員登録はこちら</Link></div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
