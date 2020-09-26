import React, { Component } from 'react'


export class VehiculeDetailsModal extends Component {
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
              <h6>Model pojazdu</h6>
              <p className="detail-content">{vehicule.vehicule_model}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Data pierwszej rejestracji</h6>
              <p className="detail-content">{vehicule.first_registration_date}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Pesel/Regon własciciela dowodu</h6>
              <p className="detail-content">{vehicule.reg_owner_pesel_regon}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Adres własciciela dowodu</h6>
              <p className="detail-content">{vehicule.reg_owner_address}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Właściciel</h6>
              <p className="detail-content">{vehicule.owner_name}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Pesel/Regon właściciela</h6>
              <p className="detail-content">{vehicule.owner_pesel_regon}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Adres właściciela</h6>
              <p className="detail-content">{vehicule.owner_address}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Maksymalna masa całkowita pojazdu</h6>
              <p className="detail-content">{vehicule.max_total_weight}</p>
            </div>
            <div className="vehicule-detail">
              <h6>Dopuszczalna masa całkowita pojazdu</h6>
              <p className="detail-content">{vehicule.perm_gross_weight}</p>
            </div>
            <div className="vehicule-detail">
              <button>Usuń</button>
              <button>Edytuj</button>
            </div>
          </div>
        ))}
      </Fragment>
        )
    }
}

export default VehiculeDetailsModal
