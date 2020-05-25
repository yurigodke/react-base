import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.scss";

function Main({ left = null, right = null }) {
  return (
    <div className={style["main"]}>
      <div className={style["main__left"]}>{left}</div>
      <div className={style["main__right"]}>{right}</div>
    </div>
  );
}

Main.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element
};

export default Main;
