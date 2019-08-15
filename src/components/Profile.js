import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

const Profile = props => {
  // const is_login = JSON.parse(localStorage.getItem('is_login'));
  // const email = localStorage.getItem('email');
  // const full_name = localStorage.getItem('full_name');
  console.log(props.is_login);
  console.log(props.email);
  if (props.is_login === false) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <div>
          <img src={}/>
        <h1>Profile</h1>
        <h2>
          <code>Email:</code>
          {props.email}
        </h2>
        <h2>
          <code>Full name:</code>
          {props.full_name}
        </h2>
      </div>
    );
  }
};

export default connect(
  "email, full_name, is_login",
  actions
)(Profile);
