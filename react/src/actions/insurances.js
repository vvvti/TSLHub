import axios from "axios";

import { GET_INSURANCES, ADD_INSURANCE } from "./types";
import { tokenConfig } from "./auth";

export const getInsurances = () => (dispatch, getState) => {
  axios
    .get("/api/insurance/", tokenConfig(getState))
    .then(response => {
      dispatch({
        type: GET_INSURANCES,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const addInsurance = vehicule => (dispatch, getState) => {
  axios
    .post("/api/insurance/", insurance, tokenConfig(getState))
    .then(response => {
      dispatch({
        type: ADD_INSURANCE,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
