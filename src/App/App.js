import React, { Component } from "react";
import { fetchAllPresidents } from "../api/apiCalls";
import "./App.scss";
import { connect } from "react-redux";
import { allPresidents } from "../Actions/index";

class App extends Component {
  componentDidMount() {
    this.fetchPresidentsData();
  }

  fetchPresidentsData = () => {
    fetchAllPresidents().then(results => this.props.allPresidents(results));
  };

  render() {
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
	presidents: state.presidents
});

export const mapDispatchToProps = dispatch => ({
	allPresidents: presidents => dispatch(allPresidents(presidents))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
