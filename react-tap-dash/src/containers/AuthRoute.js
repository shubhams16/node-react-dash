import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";



const AuthRoute = props => {
  const isAuthUser= localStorage.getItem('usertoken')
  const { type } = props;
 
  if (type === "public" && isAuthUser) return <Redirect to="/dashboard" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/login" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);