import React, { Component, Fragment } from "react";
import "./AddVehicule.css";

export class AddVehicule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AlertStyle: { display: "none" },
      AlertOkStyle: { display: "none" },
      AlertText: "Alert"
    };

    this.Alert = this.Alert.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }
  Alert(props) {
    return (
      <Fragment>
        <div
          class="alert alert-danger"
          style={this.state.AlertStyle}
          role="alert"
        >
          {this.state.AlertText}
        </div>
        <div
          class="alert alert-success"
          style={this.state.AlertOkStyle}
          role="alert"
        >
          Dodano nowy pojazd do bazy.
        </div>
      </Fragment>
    );
  }
  GetValue(inputName) {
    // FUNKCJA ZWRACA WAROŚĆ INPUTU O PODANYM ID NP "inputMarka"
    return document.getElementById(inputName).value;
  }
  HandleSubmit(e) {
    // FUNKCJA WALIDACJI FORMULARZA
    if (this.GetValue("inputMarka").length < 1) {
      // JEŻELI POLE JEST PUSTE ITP.
      this.setState({
        AlertStyle: { display: "block" },
        AlertText: "Pole Marka jest wymagane"
      }); // KOMUNIKAT DO WYŚWIETLENIA W ALERCIE
    } else if (this.GetValue("inputModel").length < 1) {
      this.setState({
        AlertStyle: { display: "block" },
        AlertText: "Pole Model jest wymagane"
      });
    } else if (this.GetValue("inputTyp").length < 1) {
      this.setState({
        AlertStyle: { display: "block" },
        AlertText: "Pole Typ pojazdu jest wymagane"
      });
    } else if (this.GetValue("inputRej").length < 1) {
      this.setState({
        AlertStyle: { display: "block" },
        AlertText: "Pole Nr rejestracyjny jest wymagane"
      });
    } else if (this.GetValue("inputVIN").length < 1) {
      this.setState({
        AlertStyle: { display: "block" },
        AlertText: "Pole Nr VIN jest wymagane"
      });
    } else if (this.GetValue("inputRejDat").length < 1) {
      this.setState({
        AlertStyle: { display: "block" },
        AlertText: "Data pierwszej rejestracji jest wymagana"
      });
    } else if (this.GetValue("inputWazDat").length < 1) {
      this.setState({
        AlertStyle: { display: "block" },
        AlertText: "Data ważnośći dowodu jest wymagana"
      });
    } else {
      this.setState({
        AlertStyle: { display: "none" },
        AlertOkStyle: { display: "block" }
      });

      // TUTAJ DODAĆ ZADANIA PO WALIDACJI !!!!
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Dodaj pojazd</h1>
        <this.Alert />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputMarka">Marka :</label>
              <input type="text" className="form-control" id="inputMarka" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputModel">Model :</label>
              <input type="text" className="form-control" id="inputModel" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputTyp">Typ pojazdu :</label>
              <input type="text" className="form-control" id="inputTyp" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputRej">Nr rejestracyjny :</label>
              <input type="text" className="form-control" id="inputRej" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputVIN">Nr VIN:</label>
              <input type="text" className="form-control" id="inputVIN" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputRejDat">Data pierwszej rejestacji:</label>
              <input type="date" className="form-control" id="inputRejDat" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputWazDat">Data ważnośći dowodu :</label>
              <input type="date" className="form-control" id="inputWazDat" />
            </div>
            <div className="form-group col-md-12">
              <h4>Dane właściciela pojazdu :</h4>
            </div>
            <div className="form-group col-md-6">
              <label for="inputImie">Imię :</label>
              <input type="text" className="form-control" id="inputImie" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputNazwisko">Nazwisko :</label>
              <input type="text" className="form-control" id="inputNazwisko" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputRegon">Nr Regon :</label>
              <input type="text" className="form-control" id="inputRegon" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPesel">Nr Pesel :</label>
              <input type="text" className="form-control" id="inputPesel" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAdres">Adres :</label>
              <input type="text" className="form-control" id="inputAdres" />
            </div>
            <div className="form-group col-md-12">
              <h4>Dodatkowe dane pojazdu :</h4>
            </div>
            <div className="form-group col-md-6">
              <label for="inputlad">Dopuszczalna ładowność :</label>
              <input type="text" className="form-control" id="inputlad" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputKatpoj">Kategoria pojazdu :</label>
              <input type="text" className="form-control" id="inputKatpoj" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputHomo">Numer homologacji :</label>
              <input type="text" className="form-control" id="inputHomo" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputOsi">Liczba osi :</label>
              <input type="text" className="form-control" id="inputOsi" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputMasPrzy">
                Maksymalna masa całkowita przyczepy :{" "}
              </label>
              <input type="text" className="form-control" id="inputMasPrzy" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputMasPoj">
                Maksymalna masa całkowita pojazdu :{" "}
              </label>
              <input type="text" className="form-control" id="inputMasPoj" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPojSil">Pojemność śilnika : </label>
              <input type="text" className="form-control" id="inputPojSil" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputMocSil">Moc śilnika w kW : </label>
              <input type="text" className="form-control" id="inputMocSil" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputRodzPal">Rodzaj Paliwa : </label>
              <input type="text" className="form-control" id="inputRodzPal" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputMiej">Liczba miejsc : </label>
              <input type="text" className="form-control" id="inputMiej" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputSiedz">Liczba siedzeń : </label>
              <input type="text" className="form-control" id="inputSiedz" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPrze">Przeznaczenie pojazdu : </label>
              <input type="text" className="form-control" id="inputPrze" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputDatPro">Data produkcji :</label>
              <input type="date" className="form-control" id="inputDatPro" />
            </div>
            <div className="form-group col-md-12">
              <button
                type="submit"
                onClick={this.HandleSubmit}
                className="btn btn-primary mb-2"
              >
                Dodaj +
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default AddVehicule;
