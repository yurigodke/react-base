import React from "react";
import PropTypes from "prop-types";

function Input({ label, type }) {
  const labelElm = label ? <span>{label}</span> : null;

  return (
    <label>
      {labelElm}
      <input type={type} />
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
