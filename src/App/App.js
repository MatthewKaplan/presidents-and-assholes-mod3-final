import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.fetchPresidentsData();
  }

  fetchPresidentsData = () => {};

  render() {
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
      </div>
    );
  }
}

export default App;
