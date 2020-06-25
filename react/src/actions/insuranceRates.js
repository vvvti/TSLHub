import axios from "axios";

import { GET_INSURANCES_RATES, ADD_INSURANCE_RATE, DELETE_INSURANCE_RATE } from "./types";
import { tokenConfig } from "./auth";

export const getInsuranceRates = () => (dispatch, getState) => {
  axios
    .get("/api/payment_rate/", tokenConfig(getState))
    .then(response => {
      dispatch({
        type: GET_INSURANCES_RATES,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const addInsuranceRate = insuranceRate => (dispatch, getState) => {
  axios
    .post("/api/payment_rate/", insuranceRate, tokenConfig(getState))
    .then(response => {
      dispatch({
        type: ADD_INSURANCE_RATE,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteInsuranceRate = id => (dispatch, getState) => {
  axios
    .delete(`/api/payment_rate/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteInsuranceRate: "Insurance Rate Deleted" }));
      dispatch({
        type: DELETE_INSURANCE_RATE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
