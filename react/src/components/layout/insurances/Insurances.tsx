import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import InsuranceCard from "./InsuranceCard";

const Insurances: React.FC = () => {
    return (
      <Fragment>
        <Link
          to="/addinsurance"
          className="btn btn-primary btn-lg active float-right"
        >
          Dodaj Polisę +
        </Link>
        <h2>Insurances</h2>
        <InsuranceCard />
      </Fragment>
    );
  }
}

export default Insurances;
