import { combineReducers } from "redux";
import profiles from "./profiles";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import vehicules from "./vehicules";
import insurances from "./insurances";

export default combineReducers({
  profiles,
  errors,
  messages,
  auth,
  vehicules,
  insurances
});
