import React, { Component } from "react";
import axios from "axios";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }
  GetNotes() {
    axios.get("/getnotes").then((response) => {
      for (var i = 0; i < response["data"].length; i++) {
        this.state.notes.push(response["data"][i]);
      }
    });
    this.setState();
    console.log(this.state.notes);
    return <div>{this.state.notes.map((c) => ({ c }))}</div>;
  }
  render() {
    return this.GetNotes();
  }
}

export default Notes;
