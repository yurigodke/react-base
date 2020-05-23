import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.scss";

function Input({ label, type, onChange, value = "" }) {
  const labelElm = label ? (
    <span className={style["inputBox__label"]}>{label}</span>
  ) : null;

  const setValue = e => {
    const value = e.target.value;

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label className={style["inputBox"]}>
      {labelElm}
      <input
        className={style["inputBox__input"]}
        type={type}
        onChange={setValue}
        value={value}
      />
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
