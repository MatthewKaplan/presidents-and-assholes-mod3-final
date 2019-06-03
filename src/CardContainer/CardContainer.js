import React, { Component } from "react";
import "./CardContainer.scss";
import { connect } from "react-redux";
import PresidentCards from "../PresidentCards/PresidentCards";
import Error from "../Error/Error";

class CardContainer extends Component {
  renderPresidentCards = () => {
    const { presidents, error } = this.props;

    if (error) {
      return <Error />;
    } else {
      return presidents.map(president => (
        <PresidentCards key={president.id} presidents={president} />
      ));
    }
  };

  render() {
    return <div className="card-container">{this.renderPresidentCards()}</div>;
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  error: state.error
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
