import React, { Component } from "react";
//import logo from "./logo.svg";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/Fields";
import Login from "./components/login";
import NavigationBar from "./components/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HashRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  async componentDidMount() {
    if (localStorage.getItem("auth") === undefined) {
      localStorage.setItem("auth", "false");
    } else if (localStorage.getItem("auth") === "true") {
      this.setState({ show: true });
    }
  }
  render() {
    console.log("App rendered");
    const authenticated = localStorage.getItem("auth") === "true";
    console.log(authenticated);
    return (
      <HashRouter className="container">
        <div className="App">
          {authenticated ? (
            <Route
              path="/nav"
              render={(props) => (
                <NavigationBar
                  {...props}
                  //isAuthed={this.state.show}
                  updateAuth={(show) => this.setState({ show })}
                />
              )}
            ></Route>
          ) : (
            <Redirect to="/" />
          )}
          <div>
            {authenticated ? (
              <Switch>
                {/* <Route exact path="/" component={Login} /> */}
                <Route
                  exact
                  path="/nav/counters"
                  render={(props) => (
                    <Counters
                      {...props}
                      //isAuthed={this.state.show}
                      updateAuth={(show) => this.setState({ show })}
                    />
                  )}
                />
              </Switch>
            ) : (
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Login
                      {...props}
                      // isAuthed={this.state.show}
                      updateAuth={(show) => this.setState({ show })}
                    />
                  )}
                ></Route>
              </Switch>
            )}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
