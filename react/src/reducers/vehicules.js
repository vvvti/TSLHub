import { GET_VEHICULES } from "../actions/types";

const initialState = {
  vehicules: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICULES:
      return {
        ...state,
        vehicules: action.payload
      };
    default:
      return state;
  }
}
