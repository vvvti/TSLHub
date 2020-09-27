import React, { Component } from "react";
import { connect } from "react-redux";

// import PropTypes from "prop-types";

import { addVehicule } from "../../../actions/vehicules";
import { IAddVehicule } from "../../../interfaces/vehicules";

import "./AddVehiculeModal.css";

export class AddVehiculeModal extends Component<IAddVehicule> {
  state = {
    user: `${this.props.userid}`,
    registration_number: "",
    vehicule_brand: "",
    vehicule_type: "",
    vehicule_model: "",
    vin_number: "",
    first_registration_date: "",
    registration_owner_name: "",
    reg_owner_pesel_regon: "",
    reg_owner_address: "",
    owner_name: "",
    owner_pesel_regon: "",
    owner_address: "",
    max_total_weight: "",
    perm_gross_weight: "",
    perm_gross_group: "",
    gross_weight: "",
    vehicule_category: "",
    homologation_number: "",
    axle_count: "",
    trailer_total_break: "",
    trailer_total: "",
    engine_capacity: "",
    engine_power: "",
    fuel_kind: "",
    power_to_weight: "",
    seat_count: "",
    places_count: "",
    vehicule_kind: "",
    vehicule_purpose: "",
    production_year: "",
    allowed_package: "",
    axle_pressure: "",
    milage: ""
  };

  // static propTypes = {
  //   addVehicule: PropTypes.func.isRequired,
  //   userid: PropTypes.number.isRequired
  // };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    const {
      user,
      registration_number,
      vehicule_brand,
      vehicule_type,
      vehicule_model,
      vin_number,
      first_registration_date,
      registration_owner_name,
      reg_owner_pesel_regon,
      reg_owner_address,
      owner_name,
      owner_pesel_regon,
      owner_address,
      max_total_weight,
      perm_gross_weight,
      perm_gross_group,
      gross_weight,
      vehicule_category,
      homologation_number,
      axle_count,
      trailer_total_break,
      trailer_total,
      engine_capacity,
      engine_power,
      fuel_kind,
      power_to_weight,
      seat_count,
      places_count,
      vehicule_kind,
      vehicule_purpose,
      production_year,
      allowed_package,
      axle_pressure,
      milage
    } = this.state;
    const vehicule = {
      user,
      registration_number,
      vehicule_brand,
      vehicule_type,
      vehicule_model,
      vin_number,
      first_registration_date,
      registration_owner_name,
      reg_owner_pesel_regon,
      reg_owner_address,
      owner_name,
      owner_pesel_regon,
      owner_address,
      max_total_weight,
      perm_gross_weight,
      perm_gross_group,
      gross_weight,
      vehicule_category,
      homologation_number,
      axle_count,
      trailer_total_break,
      trailer_total,
      engine_capacity,
      engine_power,
      fuel_kind,
      power_to_weight,
      seat_count,
      places_count,
      vehicule_kind,
      vehicule_purpose,
      production_year,
      allowed_package,
      axle_pressure,
      milage
    };
    this.props.addVehicule(vehicule);

    this.setState({
      user,
      registration_number,
      vehicule_brand,
      vehicule_type,
      vehicule_model,
      vin_number,
      first_registration_date,
      registration_owner_name,
      reg_owner_pesel_regon,
      reg_owner_address,
      owner_name,
      owner_pesel_regon,
      owner_address,
      max_total_weight,
      perm_gross_weight,
      perm_gross_group,
      gross_weight,
      vehicule_category,
      homologation_number,
      axle_count,
      trailer_total_break,
      trailer_total,
      engine_capacity,
      engine_power,
      fuel_kind,
      power_to_weight,
      seat_count,
      places_count,
      vehicule_kind,
      vehicule_purpose,
      production_year,
      allowed_package,
      axle_pressure,
      milage
    });
  };

  render() {
    const {
      user,
      registration_number,
      vehicule_brand,
      vehicule_type,
      vehicule_model,
      vin_number,
      first_registration_date,
      registration_owner_name,
      reg_owner_pesel_regon,
      reg_owner_address,
      owner_name,
      owner_pesel_regon,
      owner_address,
      max_total_weight,
      perm_gross_weight,
      perm_gross_group,
      gross_weight,
      vehicule_category,
      homologation_number,
      axle_count,
      trailer_total_break,
      trailer_total,
      engine_capacity,
      engine_power,
      fuel_kind,
      power_to_weight,
      seat_count,
      places_count,
      vehicule_kind,
      vehicule_purpose,
      production_year,
      allowed_package,
      axle_pressure,
      milage
    } = this.state;
    return (
      <div className="vehicule-modal">
        <div className="modal-header">
          <h3>Wprowadź dane pojazdu</h3>
        </div>
        <div className="vehicule-data">
          <form onSubmit={this.onSubmit}>
            <p>
              <label>Numer rejestracyjny:</label>
              <input
                className="modal-input"
                type="text"
                name="registration_number"
                onChange={this.onChange}
                value={registration_number}
              />
            </p>
            <p>
              <label>Marka pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="vehicule_brand"
                onChange={this.onChange}
                value={vehicule_brand}
              />
            </p>
            <p>
              <label>Typ pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="vehicule_type"
                onChange={this.onChange}
                value={vehicule_type}
              />
            </p>
            <p>
              <label>Model pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="vehicule_model"
                onChange={this.onChange}
                value={vehicule_model}
              />
            </p>
            <p>
              <label>Numer nadwozia:</label>
              <input
                className="modal-input"
                type="text"
                name="vin_number"
                onChange={this.onChange}
                value={vin_number}
              />
            </p>
            <p>
              <label>Data I rejestracji:</label>
              <input
                className="modal-input"
                type="text"
                name="first_registration_date"
                onChange={this.onChange}
                value={first_registration_date}
              />
            </p>
            <p>
              <label>Nazwa właściciela dowodu rejestracyjnego:</label>
              <input
                className="modal-input"
                type="text"
                name="registration_owner_name"
                onChange={this.onChange}
                value={registration_owner_name}
              />
            </p>
            <p>
              <label>Pesel lub Regon właściciela dowodu:</label>
              <input
                className="modal-input"
                type="text"
                name="reg_owner_pesel_regon"
                onChange={this.onChange}
                value={reg_owner_pesel_regon}
              />
            </p>
            <p>
              <label>Adres właściciela dowodu rejestracyjnego:</label>
              <input
                className="modal-input"
                type="text"
                name="reg_owner_address"
                onChange={this.onChange}
                value={reg_owner_address}
              />
            </p>
            <p>
              <label>Nazwa właściciela pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="owner_name"
                onChange={this.onChange}
                value={owner_name}
              />
            </p>
            <p>
              <label>Pesel, Regon właściciela pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="owner_pesel_regon"
                onChange={this.onChange}
                value={owner_pesel_regon}
              />
            </p>
            <p>
              <label>Adres właściciela pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="owner_address"
                onChange={this.onChange}
                value={owner_address}
              />
            </p>
            <p>
              <label>Maksymalna masa całkowita pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="max_total_weight"
                onChange={this.onChange}
                value={max_total_weight}
              />
            </p>
            <p>
              <label>Dopuszczalna masa całkowita pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="perm_gross_weight"
                onChange={this.onChange}
                value={perm_gross_weight}
              />
            </p>
            <p>
              <label>Dopuszczalna masa całkowita zespołu pojazdów:</label>
              <input
                className="modal-input"
                type="text"
                name="perm_gross_group"
                onChange={this.onChange}
                value={perm_gross_group}
              />
            </p>
            <p>
              <label>Masa własna pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="gross_weight"
                onChange={this.onChange}
                value={gross_weight}
              />
            </p>
            <p>
              <label>Kategoria pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="vehicule_category"
                onChange={this.onChange}
                value={vehicule_category}
              />
            </p>
            <p>
              <label>Numer homologacji:</label>
              <input
                className="modal-input"
                type="text"
                name="homologation_number"
                onChange={this.onChange}
                value={homologation_number}
              />
            </p>
            <p>
              <label>Liczba osi:</label>
              <input
                className="modal-input"
                type="text"
                name="axle_count"
                onChange={this.onChange}
                value={axle_count}
              />
            </p>
            <p>
              <label>Maksymalna masa całkowita przyczepy z hamulcem:</label>
              <input
                className="modal-input"
                type="text"
                name="trailer_total_break"
                onChange={this.onChange}
                value={trailer_total_break}
              />
            </p>
            <p>
              <label>Maksymalna masa całkowita przyczepy bez hamulca:</label>
              <input
                className="modal-input"
                type="text"
                name="trailer_total"
                onChange={this.onChange}
                value={trailer_total}
              />
            </p>
            <p>
              <label>Pojemność silnika:</label>
              <input
                className="modal-input"
                type="text"
                name="engine_capacity"
                onChange={this.onChange}
                value={engine_capacity}
              />
            </p>
            <p>
              <label>Moc silnika:</label>
              <input
                className="modal-input"
                type="text"
                name="engine_power"
                onChange={this.onChange}
                value={engine_power}
              />
            </p>
            <p>
              <label>Rodzaj paliwa:</label>
              <input
                className="modal-input"
                type="text"
                name="fuel_kind"
                onChange={this.onChange}
                value={fuel_kind}
              />
            </p>
            <p>
              <label>Stosunek mocy do masy własnej:</label>
              <input
                className="modal-input"
                type="text"
                name="power_to_weight"
                onChange={this.onChange}
                value={power_to_weight}
              />
            </p>
            <p>
              <label>Liczba miejsc siedzących:</label>
              <input
                className="modal-input"
                type="text"
                name="seat_count"
                onChange={this.onChange}
                value={seat_count}
              />
            </p>
            <p>
              <label>Liczba miejsc stojących:</label>
              <input
                className="modal-input"
                type="text"
                name="places_count"
                onChange={this.onChange}
                value={places_count}
              />
            </p>
            <p>
              <label>Rodzaj pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="vehicule_kind"
                onChange={this.onChange}
                value={vehicule_kind}
              />
            </p>
            <p>
              <label>Przeznaczenie pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="vehicule_purpose"
                onChange={this.onChange}
                value={vehicule_purpose}
              />
            </p>
            <p>
              <label>Rok produkcji:</label>
              <input
                className="modal-input"
                type="text"
                name="production_year"
                onChange={this.onChange}
                value={production_year}
              />
            </p>
            <p>
              <label>Dopuszczalna ładowność:</label>
              <input
                className="modal-input"
                type="text"
                name="allowed_package"
                onChange={this.onChange}
                value={allowed_package}
              />
            </p>
            <p>
              <label>Dopuszczalny nacisk na oś:</label>
              <input
                className="modal-input"
                type="text"
                name="axle_pressure"
                onChange={this.onChange}
                value={axle_pressure}
              />
            </p>
            <p>
              <label>Przebieg:</label>
              <input
                className="modal-input"
                type="text"
                name="milage"
                onChange={this.onChange}
                value={milage}
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

export default connect(mapStateToProps, { addVehicule })(AddVehiculeModal);
