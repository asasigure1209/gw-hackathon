import React from "react";

function LoginForm() {
  return (
    <div className='global clearfix'>
      <div className='l-contents'>
        <div className='l-lp c-lp'>
          <p>ナレッジ共有サービス</p>
          <img className='c-logo' src='/kip_logo.png'></img>
          <img className='l-mainimg c-mainimg' src='/kip_main.png'></img>
        </div>
        <div className='l-login c-login'>
          <h2>Login</h2>
          <label>Login ID</label>
          <input type='text' name='id'></input>
          <label>Password</label>
          <input type='password' name='password'></input>
          <button className='loginbtn' type='button'>ログイン</button>
          <button className='registerbtn' type='button'>会員登録はこちら</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
