import React, { Component } from "react";
import { fetchAllPresidents } from "../api/apiCalls";
import "./App.scss";
import { connect } from "react-redux";
import { allPresidents, hasErrored, isLoading } from "../Actions/index";
import CardContainer from "../CardContainer/CardContainer";

class App extends Component {
  componentDidMount() {
    this.fetchPresidentsData();
  }

  fetchPresidentsData = () => {
    this.props.isLoading(true)
    fetchAllPresidents()
    .then(results => this.props.allPresidents(results) && this.props.isLoading(false))
    .catch(error => this.props.hasErrored(error))
  };

  render() {
    const {loading, error} = this.props;
    console.log(error)
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
  error: state.error,
  loading: state.loading
});

export const mapDispatchToProps = dispatch => ({
  allPresidents: presidents => dispatch(allPresidents(presidents)),
  hasErrored: error => dispatch(hasErrored(error)),
  isLoading: loading => dispatch(isLoading(loading))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
