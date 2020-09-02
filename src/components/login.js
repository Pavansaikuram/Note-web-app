import React, { Component } from "react";
import "./login.css";
import UserProfile from "./userprofile";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeHandler = (event) => {
    let name = event.target.name;
    console.log(name);
    this.setState({ [name]: event.target.value });
  };
  onSubmit = () => {
    //console.log(this.state.email);
    UserProfile.setName("authentication");
    console.log("hi pavan" + UserProfile.getName());
    if (
      this.state.email === "pavansaikuramsetti8@gmail.com" &&
      this.state.password === "pavan"
    ) {
      localStorage.setItem("auth", "true");
      this.props.updateAuth(true);
      this.props.history.push("/nav/counters");
    } else {
      alert("Register to sign in");
    }
  };
  render() {
    console.log("login page");
    return (
      <div className="Login">
        <form>
          <input
            type="text"
            name="email" // <-- event.target.name is set to "name" here
            placeholder="email"
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password" // <-- event.target.name is set to "name" here
            placeholder="password"
            onChange={this.changeHandler}
          />
          <br></br>
          <button block bsSize="large" type="submit" onClick={this.onSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
