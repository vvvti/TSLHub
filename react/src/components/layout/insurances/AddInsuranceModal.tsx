import React, { Component } from "react";
import { connect } from "react-redux";
import { addInsurance } from "../../../actions/insurances";
import { IAddInsurance } from "../../../interfaces/insurances";

export class AddInsuranceModal extends Component<IAddInsurance> {
  state = {
    user: `${this.props.userid}`,
    number: "",
    insurance_type: "",
    insurance_company: "",
    start_date: "",
    expiry_date: "",
    insurance_cost: "",
    payment_type: "",
    insurance_owner: "",
    vehicule_owner: ""
  };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    const {
      user,
      number,
      insurance_type,
      insurance_company,
      start_date,
      expiry_date,
      insurance_cost,
      payment_type,
      insurance_owner,
      vehicule_owner
    } = this.state;
    const insurance = {
      user,
      number,
      insurance_type,
      insurance_company,
      start_date,
      expiry_date,
      insurance_cost,
      payment_type,
      insurance_owner,
      vehicule_owner
    };
    this.props.addInsurance(insurance);

    this.setState({
      user,
      number,
      insurance_type,
      insurance_company,
      start_date,
      expiry_date,
      insurance_cost,
      payment_type,
      insurance_owner,
      vehicule_owner
    });
  };

  render() {
    const {
      number,
      insurance_type,
      insurance_company,
      start_date,
      expiry_date,
      insurance_cost,
      payment_type,
      insurance_owner,
      vehicule_owner
    } = this.state;
    return (
      <div className="vehicule-modal">
        <div className="modal-header">
          <h3>Wprowadź dane polisy ubezpieczeniowej</h3>
        </div>
        <div className="vehicule-data">
          <form onSubmit={this.onSubmit}>
            <p>
              <label>Numer polisy:</label>
              <input
                className="modal-input"
                type="text"
                name="number"
                onChange={this.onChange}
                value={number}
              />
            </p>
            <p>
              <label>Rodzaj ubezpieczenia:</label>
              <input
                className="modal-input"
                type="text"
                name="insurance_type"
                onChange={this.onChange}
                value={insurance_type}
              />
            </p>
            <p>
              <label>Ubezpieczyciel:</label>
              <input
                className="modal-input"
                type="text"
                name="insurance_company"
                onChange={this.onChange}
                value={insurance_company}
              />
            </p>
            <p>
              <label>Data zawarcia:</label>
              <input
                className="modal-input"
                type="text"
                name="start_date"
                onChange={this.onChange}
                value={start_date}
              />
            </p>
            <p>
              <label>Data wygaśnięcia:</label>
              <input
                className="modal-input"
                type="text"
                name="expiry_date"
                onChange={this.onChange}
                value={expiry_date}
              />
            </p>
            <p>
              <label>Wysokość składki:</label>
              <input
                className="modal-input"
                type="text"
                name="insurance_cost"
                onChange={this.onChange}
                value={insurance_cost}
              />
            </p>
            <p>
              <label>NaForma płatności:</label>
              <input
                className="modal-input"
                type="text"
                name="payment_type"
                onChange={this.onChange}
                value={payment_type}
              />
            </p>
            <p>
              <label>Ubezpieczający:</label>
              <input
                className="modal-input"
                type="text"
                name="insurance_owner"
                onChange={this.onChange}
                value={insurance_owner}
              />
            </p>
            <p>
              <label>Właściciel pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="vehicule_owner"
                onChange={this.onChange}
                value={vehicule_owner}
              />
            </p>

            <div className="modal-footer">
              <button type="submit">Zatwierdź</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userid: state.auth.user.id
});
export default connect(mapStateToProps, { addInsurance })(AddInsuranceModal);
