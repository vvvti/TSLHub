import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import "./App.css";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";
import Profiles from "./profiles/Profiles";
import Alerts from "./layout/Alerts";

//Alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <div className="Container">
              <h1>TRUCKERSI APP!</h1>

              <Alerts />
              <Profiles />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
