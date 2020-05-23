import React from "react";
import style from "./App.module.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./pages";

const Container = ({ children }) => {
  return (
    <div className={style["app"]}>
      <div className={style["app__holder"]}>{children}</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Container>
            <Login />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
