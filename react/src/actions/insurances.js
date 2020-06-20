import axios from "axios";

import { GET_INSURANCES, ADD_INSURANCE, DELETE_INSURANCE } from "./types";

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

export const addInsurance = insurance => (dispatch, getState) => {
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

export const deleteInsurance = id => (dispatch, getState) => {
  axios
    .delete(`/api/insurance/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteInsurance: "Insurance Deleted" }));
      dispatch({
        type: DELETE_INSURANCE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
