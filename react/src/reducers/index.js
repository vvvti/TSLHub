import { combineReducers } from "redux";
import profiles from "./profiles";
import errors from "./errors";

export default combineReducers({
  profiles,
  errors
});
