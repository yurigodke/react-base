import React from "react";
import style from "./App.module.scss";

import { Login } from "./pages";

function App() {
  return (
    <div className={style["app"]}>
      <Login></Login>
    </div>
  );
}

export default App;
