import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

const initImage = "init_profile.png";
const url = "http://localhost:8000/kip_users";

function SignupForm() {
  const [imageSrc, setImageSrc] = useState(initImage);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [,setUser] = useContext(UserContext);
  const history = useHistory();

  const sendSingupData = () => {
    console.log("call")
    axios.post(url, {
      uid: id,
      name,
      password,
      image: imageSrc
    })
    .then((res) => {
      setUser(res.data.user);
      history.push("/");
    })
  }

  const handleChangeImageFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageSrc(reader.result);
    }, false)

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleChangeId = (e) => {
    setId(e.target.value);
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='global clearfix'>
      <div className='l-contents'>
        <div className='l-lp c-lp'>
          <p>ナレッジ共有サービス</p>
          <img className='c-logo' src='/kip_logo.png' alt="ロゴ"></img>
          <img className='l-mainimg c-mainimg' src='/kip_main.png' alt="メインイメージ"></img>
        </div>
        <div className='l-login c-signup'>
          <h2>Register</h2>
          <label>
            <img
              src={imageSrc}
              alt='登録するアカウント画像'
              style={{ width: "65px", height: "65px", objectFit: "cover" }}
            />
            <input
              className='fileupload'
              type='file'
              accept='image/*'
              onChange={handleChangeImageFile}
            ></input>
            <label className='userimage'>User Image</label>
          </label>
          <label>User Name</label>
          <input type='text' name='name' className='username' value={name} onChange={handleChangeName}></input>
          <label>Login ID</label>
          <input type='text' name='id' value={id} onChange={handleChangeId}></input>
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={handleChangePassword}></input>
          <button className='loginbtn' type='button' onClick={sendSingupData}>登録</button>
          <button className='registerbtn' type='button'>キャンセル</button>
        </div>
      </div>
    </div >

  );
}

export default SignupForm;
