import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store";
import Profiles from "./profiles/Profiles";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>TRUCKERSI APP!</h1>
        <Profiles />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
