import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.scss";

function Header({ title }) {
  return <h1 className={style["title"]}>{title}</h1>;
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Título do app"
};

export default Header;
