import React, { Component } from "react";

import "./AddVehiculeModal.css";

export class AddVehiculeModal extends Component {
  render() {
    return (
      <div className="vehicule-modal">
        <div className="modal-header">
          <h3>Wprowadź dane pojazdu</h3>
        </div>
        <div className="vehicule-data">
          <form>
            <p>
              <label>Numer rejestracyjny:</label>
              <input
                className="modal-input"
                type="text"
                name="Numer rejestracyjny"
              />
            </p>
            <p>
              <label>Marka pojazdu:</label>
              <input className="modal-input" type="text" name="Marka pojazdu" />
            </p>
            <p>
              <label>Typ pojazdu:</label>
              <input className="modal-input" type="text" name="Typ pojazdu" />
            </p>
            <p>
              <label>Model pojazdu:</label>
              <input className="modal-input" type="text" name="Model pojazdu" />
            </p>
            <p>
              <label>Numer nadwozia:</label>
              <input
                className="modal-input"
                type="text"
                name="Numer nadwozia"
              />
            </p>
            <p>
              <label>Data I rejestracji:</label>
              <input
                className="modal-input"
                type="text"
                name="Data 1 rejestracji"
              />
            </p>
            <p>
              <label>Nazwa właściciela dowodu rejestracyjnego:</label>
              <input
                className="modal-input"
                type="text"
                name="Nazwa właściciela dowodu rejestracyjnego"
              />
            </p>
            <p>
              <label>Pesel lub Regon właściciela dowodu:</label>
              <input
                className="modal-input"
                type="text"
                name="Pesel lub Regon właściciela dowodu"
              />
            </p>
            <p>
              <label>Adres właściciela dowodu rejestracyjnego:</label>
              <input
                className="modal-input"
                type="text"
                name="Adres właściciela dowodu rejestracyjnego"
              />
            </p>
            <p>
              <label>Nazwa właściciela pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Nazwa właściciela pojazdu"
              />
            </p>
            <p>
              <label>Pesel, Regon właściciela pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Pesel, Regon właściciela pojazdu"
              />
            </p>
            <p>
              <label>Adres właściciela pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Adres właściciela pojazdu"
              />
            </p>
            <p>
              <label>Maksymalna masa całkowita pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Maksymalna masa całkowita pojazdu"
              />
            </p>
            <p>
              <label>Dopuszczalna masa całkowita pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Dopuszczalna masa całkowita pojazdu"
              />
            </p>
            <p>
              <label>Dopuszczalna masa całkowita zespołu pojazdów:</label>
              <input
                className="modal-input"
                type="text"
                name="Dopuszczalna masa całkowita zespołu pojazdów"
              />
            </p>
            <p>
              <label>Masa własna pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Masa własna pojazdu"
              />
            </p>
            <p>
              <label>Kategoria pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Kategoria pojazdu"
              />
            </p>
            <p>
              <label>Numer homologacji:</label>
              <input
                className="modal-input"
                type="text"
                name="Numer homologacji"
              />
            </p>
            <p>
              <label>Liczba osi:</label>
              <input className="modal-input" type="text" name="Liczba osi" />
            </p>
            <p>
              <label>Maksymalna masa całkowita przyczepy z hamulcem:</label>
              <input
                className="modal-input"
                type="text"
                name="Maksymalna masa całkowita przyczepy z hamulcem"
              />
            </p>
            <p>
              <label>Maksymalna masa całkowita przyczepy bez hamulca:</label>
              <input
                className="modal-input"
                type="text"
                name="Maksymalna masa całkowita przyczepy bez hamulca"
              />
            </p>
            <p>
              <label>Pojemność silnika:</label>
              <input
                className="modal-input"
                type="text"
                name="Pojemność silnika"
              />
            </p>
            <p>
              <label>Moc silnika:</label>
              <input className="modal-input" type="text" name="Moc silnika" />
            </p>
            <p>
              <label>Rodzaj paliwa:</label>
              <input className="modal-input" type="text" name="Rodzaj paliwa" />
            </p>
            <p>
              <label>Stosunek mocy do masy własnej:</label>
              <input
                className="modal-input"
                type="text"
                name="Stosunek mocy do masy własnej"
              />
            </p>
            <p>
              <label>Liczba miejsc siedzących:</label>
              <input
                className="modal-input"
                type="text"
                name="Liczba miejsc siedzących"
              />
            </p>
            <p>
              <label>Liczba miejsc stojących:</label>
              <input
                className="modal-input"
                type="text"
                name="Liczba miejsc stojących"
              />
            </p>
            <p>
              <label>Rodzaj pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Rodzaj pojazdu"
              />
            </p>
            <p>
              <label>Przeznaczenie pojazdu:</label>
              <input
                className="modal-input"
                type="text"
                name="Przeznaczenie pojazdu"
              />
            </p>
            <p>
              <label>Rok produkcji:</label>
              <input className="modal-input" type="text" name="Rok produkcji" />
            </p>
            <p>
              <label>Dopuszczalna ładowność:</label>
              <input
                className="modal-input"
                type="text"
                name="Dopuszczalna ładowność"
              />
            </p>
            <p>
              <label>Dopuszczalny nacisk na oś:</label>
              <input
                className="modal-input"
                type="text"
                name="Dopuszczalny nacisk na oś"
              />
            </p>
            <p>
              <label>Przebieg:</label>
              <input className="modal-input" type="text" name="Przebieg" />
            </p>
          </form>
          <div className="modal-footer">
            <button type="submit">Zatwierdź</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVehiculeModal;
