import React, { Component } from "react";
import "./PresidentCards.scss";

class PresidentCards extends Component {
  render() {
    const { presidents } = this.props;
    return (
      <div className="president-cards">
        <p>Number: {presidents.number}</p>
        <p>Name: {presidents.president}</p>
        <p>Born: {presidents.birth_year}</p>
        <p>Died: {presidents.death_year}</p>
        <p>Took office: {presidents.took_office}</p>
        <p>Left office: {presidents.left_office}</p>
        <p>Party: {presidents.party}</p>
      </div>
    );
  }
}

export default PresidentCards;
