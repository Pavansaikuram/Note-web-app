import React, { Component } from "react";
import axios from "axios";
import Notes from "./notes";
class Fields extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   GetNotes() {
  //     // value = { ...this.state.values };
  //     axios.get("/getnotes").then((response) => {
  //       for (var i = 0; i < response["data"].length; i++) {
  //         this.state.values.push(response["data"][i]);
  //       }
  //     });
  //     this.setState();
  //     console.log(this.state.values);
  //     return (
  //       <div>
  //         {this.state.values.map((c) => (
  //           <ul>
  //             <li>{c}</li>
  //           </ul>
  //         ))}
  //       </div>
  //     );
  //   }
  createUI() {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <input
          type="text"
          value={el || ""}
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({ values: [...prevState.values, ""] }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.values.join(", "));
    console.log(this.state.values.join(","));
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Notes />
        <form onSubmit={this.handleSubmit}>
          {this.createUI()}
          <input
            type="button"
            value="add more"
            onClick={this.addClick.bind(this)}
          />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Fields;
