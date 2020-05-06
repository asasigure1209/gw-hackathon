import React, { useContext } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { useHistory } from "react-router-dom";

const url = "http://localhost:8000/logout";

function LogoutButton() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    console.log("logout", user);
    axios.post(url,{
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    setUser({});
    history.push('/');
  }

  return <button className='c-header__btn' onClick={logout}>ログアウト</button>;
}

export default LogoutButton;
