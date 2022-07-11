import styles from "./Signin.module.scss";

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { setUserData } from "../../actions/userData";
import SignInForm from "../../components/SignInForm";

const Signin = (props) => {
  const { setUserData } = props;

  const submit = (values) => {
    setUserData(values);
  };

  return (
    <Container className={styles.container}>
      <SignInForm onSubmit={submit} />
    </Container>
  );
};

Signin.propTypes = {
  setUserData: PropTypes.func,
};

Signin.defaultProps = {
  setUserData: () => {},
};

function mapDispatchToProps(dispatch) {
  return {
    setUserData: (data) => dispatch(setUserData(data)),
  };
}

export default connect(undefined, mapDispatchToProps)(Signin);
