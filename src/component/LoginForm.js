import React from "react";

function LoginForm() {
  return (
    <div>
      <h2>Login</h2>
      <label>Login ID</label>
      <input type='text' name='id'></input>
      <label>Password</label>
      <input type='password' name='password'></input>
      <button type='button'>ログイン</button>
      <button type='button'>会員登録はこちら</button>
    </div>
  );
}

export default LoginForm;
