import React, { Component } from "react";

import "./AddVehiculeModal.css";

export class AddVehiculeModal extends Component {
  render() {
    return (
      <div className="vehicule-modal">
        <div className="modal-header">
          <h3>Wprowadż dane pojazdu</h3>
        </div>
        <div className="vehicule-data">
          <form>
            <p>
              <label>Numer rejestracyjny:</label>
              <input type="text" name="Numer rejestracyjny" />
            </p>
            <p>
              <label>Marka pojazdu:</label>
              <input type="text" name="Marka pojazdu" />
            </p>
            <p>
              <label>Typ pojazdu::</label>
              <input type="text" name="Typ pojazdu" />
            </p>
            <p>
              <label>Model pojazdu:</label>
              <input type="text" name="Model pojazdu" />
            </p>
            <p>
              <label>Numer nadwozia:</label>
              <input type="text" name="Numer nadwozia" />
            </p>
            <p>
              <label>Data I rejestracji:</label>
              <input type="text" name="Data 1 rejestracji" />
            </p>
            <p>
              <label>Nazwa właściciela dowodu rejestracyjnego:</label>
              <input
                type="text"
                name="Nazwa właściciela dowodu rejestracyjnego"
              />
            </p>
            <p>
              <label>Pesel lub Regon właściciela dowodu:</label>
              <input type="text" name="Pesel lub Regon właściciela dowodu" />
            </p>
            <p>
              <label>Adres właściciela dowodu rejestracyjnego:</label>
              <input
                type="text"
                name="Adres właściciela dowodu rejestracyjnego"
              />
            </p>
            <p>
              <label>Nazwa właściciela pojazdu:</label>
              <input type="text" name="Nazwa właściciela pojazdu" />
            </p>
            <p>
              <label>Pesel, Regon właściciela pojazdu:</label>
              <input type="text" name="Pesel, Regon właściciela pojazdu" />
            </p>
            <p>
              <label>Adres właściciela pojazdu:</label>
              <input type="text" name="Adres właściciela pojazdu" />
            </p>
            <p>
              <label>Maksymalna masa całkowita pojazdu:</label>
              <input type="text" name="Maksymalna masa całkowita pojazdu" />
            </p>
            <p>
              <label>Dopuszczalna masa całkowita pojazdu:</label>
              <input type="text" name="Dopuszczalna masa całkowita pojazdu" />
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default AddVehiculeModal;
