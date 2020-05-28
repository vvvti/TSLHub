import axios from "axios";

import { GET_VEHICULES } from "./types";

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
