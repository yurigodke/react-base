import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Input, Button } from "../../components";

class FormLogin extends PureComponent {
  render() {
    const { submitLabel } = this.props;
    return (
      <>
        <Input type="text" label="Email" />
        <Input type="password" label="Senha" />
        <Button>{submitLabel}</Button>
      </>
    );
  }
}

FormLogin.propTypes = {
  submitLabel: PropTypes.string.isRequired
};

export default FormLogin;
