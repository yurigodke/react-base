import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ButtonSide } from "../../components";

import style from "./index.module.scss";

class SideBar extends PureComponent {
  go2Page = page => {
    const { buttonAction } = this.props;

    if (buttonAction) {
      buttonAction(page);
    }
  };

  render() {
    return (
      <li className={style["sidebar"]}>
        <ul className={style["sidebar__item"]}>
          <ButtonSide type="top" action={() => this.go2Page("/inicio")}>
            Projetos
          </ButtonSide>
        </ul>
      </li>
    );
  }
}

SideBar.propTypes = {
  buttonAction: PropTypes.func
};

export default SideBar;
