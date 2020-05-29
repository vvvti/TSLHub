import axios from "axios";

import { GET_VEHICULES, ADD_VEHICULE } from "./types";

export const getVehicules = () => dispatch => {
  axios
    .get("/api/vehicule/")
    .then(response => {
      dispatch({
        type: GET_VEHICULES,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const addVehicule = vehicule => dispatch => {
  axios
    .post("/api/vehicule/", vehicule)
    .then(response => {
      dispatch({
        type: ADD_VEHICULE,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
