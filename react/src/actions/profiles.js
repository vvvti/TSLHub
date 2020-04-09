import axios from "axios";

import { GET_PROFILES } from "./types";

//get profiles
export const getProfiles = () => dispatch => {
  axios
    .get("/api/profile/")
    .then(res => {
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
