import React, { Component } from "react";
import "./CardContainer.scss";
import { connect } from "react-redux";
import PresidentCards from "../PresidentCards/PresidentCards";

class CardContainer extends Component {
  renderPresidentCards = () => {
    const { presidents } = this.props;
    return presidents.map(president => (
      <PresidentCards key={president.id} presidents={president} />
    ));
  };

  render() {
    return (
      <div className="card-container">
        {this.renderPresidentCards()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
