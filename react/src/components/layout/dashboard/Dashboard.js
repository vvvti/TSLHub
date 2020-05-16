import React, { Component, Fragment } from "react";

import "./Dashboard.css";

import Profiles from "../../profiles/Profiles";
import Navbar from "../../layout/navbar/Navbar";
import Header from "../../layout/Header";

export class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard-container">
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card bg-secondary h-100">
                <img
                  src="https://image.freepik.com/free-photo/3d-trucks_1048-4527.jpg?3"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Pojazdy</h5>
                  <p className="card-text">Panel zarządzania flotą pojazdów</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card bg-secondary h-100">
                <img
                  src="https://image.freepik.com/free-photo/robots-with-lift-truck_1048-3521.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Ubezpieczenia</h5>
                  <p className="card-text">Panel zarządzania ubezpieczeniami</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card bg-secondary h-100">
                <img
                  src="https://image.freepik.com/free-vector/nine-planning-slide-templates-set_1262-4569.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Grafik</h5>
                  <p className="card-text">
                    Informacje o terminach zaplanowanych zdarzeń
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card bg-secondary h-100">
                <img
                  src="https://image.freepik.com/free-vector/vector-realistic-receipt-collection-bill-check_33099-1336.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Dokumenty</h5>
                  <p className="card-text">Panel zarządzania dokumentacją</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card bg-secondary h-100">
                <img
                  src="https://image.freepik.com/free-photo/3d-render-online-freight-order-tracking_1048-5610.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Panel administracyjny</h5>
                  <p className="card-text">
                    Administracja ustawieniami aplikacji, kontami użytkowników
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card bg-secondary h-100">
                <img
                  src="https://image.freepik.com/free-photo/3d-render-fleet-delivery-vehicles_1048-5606.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Kierowcy</h5>
                  <p className="card-text">
                    Panel zarządzania danymi kierowców
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
