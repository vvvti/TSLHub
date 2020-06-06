import { GET_INSURANCES, ADD_INSURANCE } from "../actions/types";

const initialState = {
  insurances: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INSURANCES:
      return {
        ...state,
        insurances: action.payload
      };
    case ADD_INSURANCE:
      return {
        ...state,
        insurances: [...state.insurances, action.payload]
      };

    default:
      return state;
  }
}
