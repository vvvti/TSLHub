import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class Insurances extends Component {
  render() {
    return (
      <Fragment>
        <Link
          to="/addinsurance"
          className="btn btn-primary btn-lg active float-right"
        >
          Dodaj Polisę +
        </Link>
        <h2>Insurances</h2>
      </Fragment>
    );
  }
}

export default Insurances;
