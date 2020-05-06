import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.scss";
import Home from "./page/Home";
import Category from "./page/Category";
import Login from "./page/Login";
import Signup from "./page/Signup";

export const UserContext = createContext(["fe",() => {}]);

function App() {
  const [user, setUser] = useState("mic");

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/categories/:category' component={Category} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
