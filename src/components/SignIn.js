import React from "react";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { store } from "../store";
import { connect } from "unistore/react";
import { actions } from "../store";

// const is_login = JSON.parse(localStorage.getItem('is_login'));

class SignIn extends React.Component {
  state = { email: "", password: "" };
  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postLogin = () => {
    const { email, password } = this.state;
    const data = {
      email: email,
      password: password
    };
    const self = this;
    axios
      .post("https://api-todofancy.herokuapp.com/api/auth", data)
      .then(function(response) {
        console.log(self.props.is_login);
        console.log(response.data);
        if (response.data.hasOwnProperty("status")) {
          console.log(self.props.is_login);
          self.props.setName(response.data.userdata.username);
          self.props.setLogin(true);
          console.log(self.props.is_login);
          self.props.setEmail(response.data.userdata.email);
          self.props.setAvatar(response.data.userdata.avatar);
          self.props.history.push("/");
          // console.log(this.props.api_key);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.props.is_login);
    // console.log(is_login);
    if (this.props.is_login === true) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => this.changeInput(e)}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={e => this.changeInput(e)}
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => this.postLogin()}
          >
            Submit
          </button>
        </form>
      );
    }
  }
}

export default connect(
  "email, full_name, is_login, api_key",
  actions
)(withRouter(SignIn));
