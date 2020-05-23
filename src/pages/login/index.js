import React, { PureComponent } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { FormLogin, Header } from "../../modules";

import { actionLogin } from "../../redux/actions";

import { Auth } from "../../utils";

class Login extends PureComponent {
  componentDidUpdate(prevProps) {
    const { tokenData } = this.props;

    if (Auth.checkAuth(tokenData, 1)) {
      // history.replace("/inicio");
      console.log("logado");
    }
  }

  submitAction = (email, pass) => {
    this.props.getToken(email, pass);
  };

  render() {
    return (
      <>
        <Header title="Título página" />
        <FormLogin submitLabel="Enviar" submitAction={this.submitAction} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokenData: state.login.tokenData
  };
};

const mapDisptachToProps = dispatch =>
  bindActionCreators({ ...actionLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(withRouter(Login));
