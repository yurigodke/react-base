import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.scss";

function Button({ children, action = () => {} }) {
  return (
    <button className={style["button"]} onClick={action}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default Button;
