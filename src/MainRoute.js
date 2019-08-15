import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import SignIn from "./components/SignIn";

import { store } from "./store";
import { connect } from "unistore/react";
import { actions } from "./store";

// import { Redirect } from 'react-router-dom';

// const is_login = JSON.parse(localStorage.getItem('is_login'));

class Routing extends React.Component {
  postSignOut = () => {
    // const self = this;
    console.log(this.props.is_login);
    this.props.setLogin(false);
    console.log(this.props.is_login);
    // localStorage.setItem('is_login', null);

    // return <Redirect to={{ pathname: '/' }} />;
    // self.props.history.push('/');
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/:source_name" component={Category} />
          {/* <Route path="/signin" component={SignIn} />
          <Route path="/category/:source_name" component={Category} />

          <Route path="/signup" component={SignIn} />
          <Route path="/profile" component={Profile} /> */}{" "}
          */}
        </Switch>
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(Routing);
