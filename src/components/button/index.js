import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.scss";

function Button({ children }) {
  return <button className={style["button"]}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default Button;
