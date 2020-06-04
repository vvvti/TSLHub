import axios from "axios";

import { GET_VEHICULES, ADD_VEHICULE } from "./types";
import { tokenConfig, getUserId } from "./auth";

export const getVehicules = () => (dispatch, getState) => {
  axios
    .get("/api/vehicule/", tokenConfig(getState))
    .then(response => {
      dispatch({
        type: GET_VEHICULES,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const addVehicule = vehicule => (dispatch, getState) => {
  axios
    .post("/api/vehicule/", vehicule, tokenConfig(getState))
    .then(response => {
      dispatch({
        type: ADD_VEHICULE,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
