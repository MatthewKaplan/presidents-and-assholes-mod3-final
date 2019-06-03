import React, { Component } from "react";
import "./Error.scss";

class Error extends Component {
  render() {
    return (
      <div className="error-message">
        <h1>Oops</h1>
        <h3>Something went wrong. We are working on getting this fixed as soon as we can. You may be able to try again.</h3>
      </div>
    );
  }
}

export default Error;
