import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.scss";
import Home from "./page/Home";
import Category from "./page/Category";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Auth from "./component/Auth";
import NotFound from "./page/NotFound";

export const UserContext = createContext([{},() => {}]);

function App() {
  const [user, setUser] = useState("mic");

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/notfound' component={NotFound} />
          <Auth>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/categories/:category' component={Category} />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
