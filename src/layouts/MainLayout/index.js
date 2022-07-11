import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Signin from "../../screens/Signin";
import Home from "../../screens/Home";

const MainLayout = (props) => {
  const { userData } = props;
  return userData ? <Home /> : <Signin />;
};

MainLayout.propTypes = {
  userData: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  userData: {},
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(MainLayout);
