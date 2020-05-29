import { GET_VEHICULES, ADD_VEHICULE } from "../actions/types";

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
    case ADD_VEHICULE:
      return {
        ...state,
        vehicules: [...state.vehicules, action.payload]
      };

    default:
      return state;
  }
}
