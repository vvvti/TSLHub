import axios from "axios";
import { createMessage, returnErrors } from "./messages";

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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
