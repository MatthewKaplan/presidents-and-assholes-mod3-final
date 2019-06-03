import React, { Component } from "react";
import { fetchAllPresidents } from "../api/apiCalls";
import "./App.scss";
import { connect } from "react-redux";
import { allPresidents, hasErrored } from "../Actions/index";
import CardContainer from "../CardContainer/CardContainer";

class App extends Component {
  componentDidMount() {
    this.fetchPresidentsData();
  }

  fetchPresidentsData = () => {
    fetchAllPresidents()
    .then(results => this.props.allPresidents(results))
    .catch(error => this.props.hasErrored(error))
  };

  render() {
    console.log(this.props.error)
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
        <CardContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  allPresidents: presidents => dispatch(allPresidents(presidents)),
  hasErrored: error => dispatch(hasErrored(error))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
