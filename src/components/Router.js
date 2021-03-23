import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home.js";
import Login from "../routes/Login.js";

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Switch>
        <Route>{isLogin ? <Home /> : <Login />}</Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
