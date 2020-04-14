import React, { PureComponent } from "react";

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

export default Login;
