import styles from "./TextField.module.scss";

import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const RenderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <React.Fragment>
    <Input
      {...input}
      transparent
      placeholder={placeholder}
      type={type}
      className={styles.input}
    />
    {touched && error && <span>{error}</span>}
  </React.Fragment>
);

RenderField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  meta: PropTypes.shape({
    invalid: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

RenderField.defaultProps = {
  placeholder: "",
  type: "",
  input: {},
  meta: {},
};

export default RenderField;
