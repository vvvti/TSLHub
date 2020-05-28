import React, { Component } from "react";

import "./VehiculeCard.css";

export class VehiculeCard extends Component {
  render() {
    return (
      <div className="vehicule-card">
        <div className="vehicule-detail">
          <h6>Numer rejestracyjny</h6>
          <p className="detail-content">KN8884</p>
        </div>
        <div className="vehicule-detail">
          <h6>Marka</h6>
          <p className="detail-content">Ford</p>
        </div>
        <div className="vehicule-detail">
          <h6>Typ</h6>
          <p className="detail-content">Mondeo</p>
        </div>
        <div className="vehicule-detail">
          <h6>Rok produkcji</h6>
          <p className="detail-content">2017</p>
        </div>
        <div className="vehicule-detail">
          <h6>Numer nadwozia</h6>
          <p className="detail-content">VF611GZA1000034567</p>
        </div>
        <div className="vehicule-detail">
          <h6>Właściciel</h6>
          <p className="detail-content">Jarosław Kaczyński</p>
        </div>
        <div className="vehicule-detail">
          <button>Usuń</button>
          <button>Edytuj</button>
        </div>
      </div>
    );
  }
}

export default VehiculeCard;
