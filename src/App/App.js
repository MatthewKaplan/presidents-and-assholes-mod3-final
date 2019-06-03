import React, { Component } from "react";
import { fetchAllPresidents } from "../api/apiCalls";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.fetchPresidentsData();
  }

  fetchPresidentsData = () => {
    fetchAllPresidents()
    .then(response => console.log(response))
  };

  render() {
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
      </div>
    );
  }
}

export default App;
