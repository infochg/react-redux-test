import styles from "./SigninForm.module.scss";

import React from "react";
import PropTypes from "prop-types";
import {
  Field,
  reduxForm,
  SubmissionError,
  clearSubmitErrors,
} from "redux-form";
import { Button, Card, Header } from "semantic-ui-react";
import RenderField from "../TextField";

function SignInForm(props) {
  const { error, handleSubmit, onSubmit } = props;

  const validate = (values) => {
    if (values.username !== "upworkTest" || values.password !== "2022") {
      throw new SubmissionError({
        _error: "Wrong password or username, please try again.",
      });
    } else {
      onSubmit(values);
    }
  };

  return (
    <Card className={styles.formWrapper}>
      <Header as="h2" className={styles.h2}>
        Sign in
      </Header>
      <form onSubmit={handleSubmit(validate)}>
        <div>
          <Field
            name="username"
            placeholder="Username"
            component={RenderField}
            type="text"
          />
        </div>
        <div>
          <Field
            name="password"
            placeholder="Password"
            component={RenderField}
            type="text"
          />
        </div>
        <div className={styles.error}>{error && <strong>{error}</strong>}</div>
        <Button type="submit" className={styles.btn}>
          Sign in
        </Button>
      </form>
    </Card>
  );
}

SignInForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

SignInForm.defaultProps = {
  error: "",
  handleSubmit: () => {},
  onSubmit: () => {},
};

export default reduxForm({
  form: "SignInForm",
  onChange: (values, dispatch, props) => {
    if (props.error) dispatch(clearSubmitErrors("SignInForm"));
  },
})(SignInForm);
