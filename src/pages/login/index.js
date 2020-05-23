import React, { PureComponent } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { FormLogin, Header } from "../../modules";

class Login extends PureComponent {
  render() {
    return (
      <>
        <Header title="Título página" />
        <FormLogin submitLabel="Enviar" />
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
