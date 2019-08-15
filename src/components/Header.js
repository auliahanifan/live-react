import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  postSignout = () => {
    // const self = this;
    console.log(this.props.is_login);
    this.props.setLogin(null);
    console.log(this.props.is_login);

    // localStorage.setItem('is_login', null);

    // return <Redirect to={{ pathname: '/' }} />;
    // self.props.history.push('/');
  };

  render() {
    if (this.props.is_login == null) {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">MovieReact</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/">
                    <span className="sr-only">(current)</span>
                  </Link>{" "}
                </li>
              </ul>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>{" "}
                </li>
              </ul>

              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/signin">
                    Sign In <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}
export default connect(
  "email, full_name, is_login",
  actions
)(Header);
