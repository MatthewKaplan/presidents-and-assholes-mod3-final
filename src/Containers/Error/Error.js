import React, { Component } from "react";
import { connect } from "react-redux";
import "./Error.scss";

class Error extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="error-message">
        <h1>Oops</h1>
        <h3>
          Something went wrong. We are working on getting this fixed as soon as
          we can. You may be able to try again.
        </h3>
        <p>
          Error Message: <span className="errorMessage">{error.message}</span>
        </p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  null
)(Error);
