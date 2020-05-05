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
    <div>
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
      <input type='text' name='name'></input>
      <label>Login ID</label>
      <input type='text' name='id'></input>
      <label>Password</label>
      <input type='password' name='password'></input>
      <button type='button'>登録</button>
      <button type='button'>キャンセル</button>
    </div>
  );
}

export default SignupForm;
