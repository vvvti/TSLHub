import React, { Component } from "react";
import AddInsuranceModal from "./AddInsuranceModal";

export class Insurances extends Component {
  render() {
    return (
      <div>
        <h2>Insurances</h2>
        <AddInsuranceModal />
      </div>
    );
  }
}

export default Insurances;
