import React from "react";
import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Título do app"
};

export default Header;
