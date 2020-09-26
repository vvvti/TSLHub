import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getVehicules } from "../../../actions/vehicules";

import "./VehiculeCard.css";

export class VehiculeCard extends Component {
  static propTypes = {
    vehicules: PropTypes.array.isRequired,
    getVehicules: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getVehicules();
  }
  render() {
    return (
      <Fragment>
        {this.props.vehicules.map(vehicule => (
          <div className="vehicule-card" key={vehicule.id}>
            <div className="vehicule-detail">
              <h6>Numer rejestracyjny</h6>
              <p className="detail-content">{vehicule.registration_number}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Marka</h6>
              <p className="detail-content">{vehicule.vehicule_brand}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Typ</h6>
              <p className="detail-content">{vehicule.vehicule_type}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Rok produkcji</h6>
              <p className="detail-content">{vehicule.production_year}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Numer nadwozia</h6>
              <p className="detail-content">{vehicule.vin_number}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Właściciel</h6>
              <p className="detail-content">{vehicule.owner_name}</p>
            </div>
            <div className="vehicule-detail">
              <button>Usuń</button>
              <button>Edytuj</button>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  vehicules: state.vehicules.vehicules
});

export default connect(mapStateToProps, { getVehicules })(VehiculeCard);
