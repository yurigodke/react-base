import React, { PureComponent } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { Header } from "../../modules";

// import { actionLogin } from "../../redux/actions";

import { Auth } from "../../utils";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    const { tokenData, history } = props;

    if (!Auth.checkAuth(tokenData, 1)) {
      history.replace("/");
    }
  }

  render() {
    return (
      <>
        <Header title="Título página" />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokenData: state.login.tokenData
  };
};

const mapDisptachToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(withRouter(Login));
