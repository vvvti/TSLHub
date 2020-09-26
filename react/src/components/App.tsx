import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./App.css";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";

import Vehicules from "./layout/vehicules/Vehicules";
//import AddVehicule from "./layout/vehicules/AddVehicule";
import AddVehiculeModal from "./layout/vehicules/AddVehiculeModal";
import AddInsuranceeModal from "./layout/insurances/AddInsuranceModal";

import Profiles from "./layout/profiles/Profiles";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Dashboard from "./layout/dashboard/Dashboard";
import Header from "./layout/Header";
import Navbar from "./layout/navbar/Navbar";
import Insurances from "./layout/insurances/Insurances";
import Schedule from "./layout/schedule/Schedule";
import Documents from "./layout/documents/Documents";
import AdminPanel from "./layout/adminpanel/AdminPanel";
import Drivers from "./layout/drivers/Drivers";
import Footer from "./layout/footer/Footer";

import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

import Alerts from "./layout/Alerts";

//Alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <Navbar />
              <div className="main-container">
                <div className="header-container">
                  <Header />
                </div>
                <main>
                  <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute
                      exact
                      path="/vehicules"
                      component={Vehicules}
                    />
                    <PrivateRoute
                      exact
                      path="/addvehicule"
                      component={AddVehiculeModal}
                    />
                    <PrivateRoute exact path="/profile" component={Profiles} />
                    <PrivateRoute
                      exact
                      path="/insurances"
                      component={Insurances}
                    />
                    <PrivateRoute
                      exact
                      path="/addinsurance"
                      component={AddInsuranceeModal}
                    />
                    <PrivateRoute exact path="/schedule" component={Schedule} />
                    <PrivateRoute
                      exact
                      path="/documents"
                      component={Documents}
                    />
                    <PrivateRoute
                      exact
                      path="/adminpanel"
                      component={AdminPanel}
                    />
                    <PrivateRoute exact path="/drivers" component={Drivers} />

                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                  </Switch>
                </main>

                <Footer />
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
