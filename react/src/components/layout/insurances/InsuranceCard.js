import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getInsurances } from "../../../actions/insurances";

export class InsuranceCard extends Component {
  static propTypes = {
    insurances: PropTypes.array.isRequired,
    getInsurances: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getInsurances();
  }
  render() {
    return (
      <Fragment>
        {this.props.insurances.map(insurance => (
          <div className="vehicule-card" key={insurance.id}>
            <div className="vehicule-detail">
              <h6>Numer polisy ubezpieczeniowej</h6>
              <p className="detail-content">{insurance.number}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Rodzaj ubezpieczenia</h6>
              <p className="detail-content">{insurance.insurance_type}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Ubezpieczyciel</h6>
              <p className="detail-content">{insurance.insurance_company}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Data zawarcia polisy</h6>
              <p className="detail-content">{insurance.start_date}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Data wygaśnięcia polisy</h6>
              <p className="detail-content">{insurance.expiry_date}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Numer rejestracyjny</h6>
              <p className="detail-content">{}</p>
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
  insurances: state.insurances.insurances
});

export default connect(mapStateToProps, { getInsurances })(InsuranceCard);
