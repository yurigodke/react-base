import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import style from "./index.module.scss";

function ButtonSide({ children, type = "middle", action = () => {} }) {
  const buttonStyle = classNames(style["button"], style["button__" + type]);

  return (
    <button className={buttonStyle} onClick={action}>
      {children}
    </button>
  );
}

ButtonSide.propTypes = {
  children: PropTypes.string.isRequired
};

export default ButtonSide;
