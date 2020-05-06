import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

const createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
const initImage = "init_profile.png";
const url = "http://localhost:8000/kip_users"

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
    console.log(e.target.files);

    const imageFiles = e.target.files;
    const image_url = createObjectURL(imageFiles[0]);
    setImageSrc(image_url);
  };

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
        <div className='l-login c-login'>
          <h2>Register</h2>
          <img
            src={imageSrc}
            alt='登録するアカウント画像'
            style={{ width: "65px", height: "65px", objectFit: "cover" }}
          />
          <input
            type='file'
            accept='image/*'
            onChange={handleChangeImageFile}
          ></input>
          <label>User Image</label>
          <label>User Name</label>
          <input type='text' name='name' value={name} onChange={handleChangeName}></input>
          <label>Login ID</label>
          <input type='text' name='id' value={id} onChange={handleChangeId}></input>
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={handleChangePassword}></input>
          <button className='loginbtn' type='button' onClick={sendSingupData}>登録</button>
          <button className='registerbtn' type='button'>キャンセル</button>
        </div>
      </div>
    </div>

  );
}

export default SignupForm;
