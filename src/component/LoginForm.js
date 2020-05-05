import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/login";

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginData = () => {
    axios.post(url, {
      uid: id,
      password: password,
    })
    .then((res) => {
      console.log(res.data)
    })
  }

  const handleChangeId = (event) => {
    setId(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h2>Login</h2>
      <label>Login ID</label>
      <input type='text' name='id' value={id} onChange={handleChangeId}></input>
      <label>Password</label>
      <input type='password' name='password' value={password} onChange={handleChangePassword}></input>
      <button type='button' onClick={sendLoginData}>ログイン</button>
      <button type='button'>会員登録はこちら</button>
    </div>
  );
}

export default LoginForm;
