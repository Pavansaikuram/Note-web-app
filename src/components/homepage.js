import React, { Component } from "react";
import Notes from "./notes";
import Fields from "./Fields";
class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Notes />
        <Fields />
      </React.Fragment>
    );
  }
}

export default HomePage;
