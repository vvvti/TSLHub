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

import Vehicules from "./vehicules/Vehicules";
import AddVehicule from "./addvehicule/AddVehicule";
import Profiles from "./profiles/Profiles";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Dashboard from "./layout/dashboard/Dashboard";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/navbar/Navbar";

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
              <div className="header-container">
                <Header />
              </div>
              <main>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute exact path="/vehicules" component={Vehicules} />
                  <PrivateRoute
                    exact
                    path="/addvehicule"
                    component={AddVehicule}
                  />
                  <PrivateRoute exact path="/profile" component={Profiles} />
                  <PrivateRoute exact path="/vehicules" component={Vehicules} />

                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </main>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
