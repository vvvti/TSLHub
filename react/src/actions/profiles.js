import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_PROFILES } from "./types";
import { tokenConfig } from "./auth";

//get profiles
export const getProfiles = () => (dispatch, getState) => {
  axios
    .get("/api/profile/", tokenConfig(getState))
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
