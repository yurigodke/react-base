import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.scss";

function Input({ label, type }) {
  const labelElm = label ? (
    <span className={style["inputBox__label"]}>{label}</span>
  ) : null;

  return (
    <label className={style["inputBox"]}>
      {labelElm}
      <input className={style["inputBox__input"]} type={type} />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
