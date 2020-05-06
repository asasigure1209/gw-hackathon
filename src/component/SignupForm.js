import React, { useState } from "react";

const createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
const initImage = "init_profile.png";

function SignupForm() {
  const [imageSrc, setImageSrc] = useState(initImage);

  const handleChangeImageFile = (e) => {
    console.log(e.target.files);

    const imageFiles = e.target.files;
    const image_url = createObjectURL(imageFiles[0]);
    setImageSrc(image_url);
  };

  return (
    <div className='global clearfix'>
      <div className='l-contents'>
        <div className='l-lp c-lp'>
          <p>ナレッジ共有サービス</p>
          <img className='c-logo' src='/kip_logo.png'></img>
          <img className='l-mainimg c-mainimg' src='/kip_main.png'></img>
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
          <input className='username' type='text' name='name'></input>
          <label>Login ID</label>
          <input type='text' name='id'></input>
          <label>Password</label>
          <input type='password' name='password'></input>
          <button className='loginbtn' type='button'>登録</button>
          <button className='registerbtn' type='button'>キャンセル</button>
        </div>
      </div>
    </div >

  );
}

export default SignupForm;
