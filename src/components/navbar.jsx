import React, { Component } from "react";

class NavBar extends Component {
  onSubmit = () => {
    this.props.updateAuth(false);
    localStorage.setItem("auth", "false");
    this.props.history.push("/");
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <button block bsSize="large" type="submit" onClick={this.onSubmit}>
            Logout
          </button>
        </a>
      </nav>
    );
  }
}

export default NavBar;
