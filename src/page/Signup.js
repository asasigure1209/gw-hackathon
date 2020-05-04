import React, { useState } from "react";

const createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
const initImage = "init_profile.png";

function Signup() {
  const [imageSrc, setImageSrc] = useState(initImage);

  const handleChangeImageFile = (e) => {
    console.log(e.target.files);

    const imageFiles = e.target.files;
    const image_url = createObjectURL(imageFiles[0]);
    setImageSrc(image_url);
  };

  return (
    <div className='App'>
      <div>
        <input
          type='file'
          accept='image/*'
          onChange={handleChangeImageFile}
        ></input>
        <img
          src={imageSrc}
          alt='登録するアカウント画像'
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <label>name</label>
        <input type='text' name='name'></input>
        <label>id</label>
        <input type='text' name='id'></input>
        <label>password</label>
        <input type='password' name='password'></input>
        <button type='button'>登録</button>
      </div>
    </div>
  );
}

export default Signup;
