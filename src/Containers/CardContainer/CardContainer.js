import React, { Component } from "react";
import "./CardContainer.scss";
import { connect } from "react-redux";
import PresidentCards from "../../Components/PresidentCards/PresidentCards";
import Error from "../Error/Error";
import Loading from "../../Components/Loading/Loading";
const shortid = require('shortid');

class CardContainer extends Component {
  renderPresidentCards = () => {
    const { presidents, error, loading } = this.props;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />
    } else {
      return presidents.map(president => (
        <PresidentCards key={shortid.generate()} presidents={president} />
      ));
    }
  };

  render() {
    return <div className="card-container">{this.renderPresidentCards()}</div>;
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  error: state.error,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
