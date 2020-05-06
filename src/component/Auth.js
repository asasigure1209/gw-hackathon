import React, { useContext } from 'react';
import { UserContext } from '../App';
import { Redirect } from 'react-router-dom';

// const Auth = props =>
//   User.isLoggedIn() ? props.children : <Redirect to={'/login'} />;

const Auth = ({ children }) => {
  const [user,] = useContext(UserContext);
  if (!user || !user.token) {
    return <Redirect to={'/login'} />
  }

  return children;
}

export default Auth;