import React, { Component } from "react";
import Counter from "./counter";
import axios from "axios";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    values: [],
  };
  GetNotes() {
    // value = { ...this.state.values };
    axios.get("/getnotes").then((response) => {
      for (var i = 0; i < response["data"].length; i++) {
        this.state.values.push(response["data"][i]);
      }
    });
    this.setState();
    console.log(this.state.values);
    return (
      <div>
        {this.state.values.map((c) => (
          <ul>
            <li>{c}</li>
          </ul>
        ))}
      </div>
    );
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    for (var i = 0; i < counters.length; i++) {
      if (counters[i].id === counter.id) {
        counters[i].value++;
      }
    }
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    for (var i = 0; i < counters.length; i++) {
      counters[i].value = 0;
    }
    //const counters = this.state.counters.map((c) => (c.value = 0));
    this.setState({ counters });
  };
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
    console.log("delete called");
  };
  render() {
    console.log("counters rendered");
    return (
      <div>
        {/* {this.GetNotes()} */}
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default counters;
