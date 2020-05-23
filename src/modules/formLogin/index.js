import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Input, Button } from "../../components";

class FormLogin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: ""
    };
  }

  setValue = (label, value) => {
    this.setState({
      [label]: value
    });
  };

  submit = () => {
    const { submitAction } = this.props;
    const { email, pass } = this.state;

    if (submitAction) {
      submitAction(email, pass);
    }
  };

  render() {
    const { submitLabel } = this.props;
    const { email, pass } = this.state;

    return (
      <>
        <Input
          type="text"
          label="Email"
          value={email}
          onChange={value => this.setValue("email", value)}
        />
        <Input
          type="password"
          label="Senha"
          value={pass}
          onChange={value => this.setValue("pass", value)}
        />
        <Button action={this.submit}>{submitLabel}</Button>
      </>
    );
  }
}

FormLogin.propTypes = {
  submitLabel: PropTypes.string.isRequired
};

export default FormLogin;
