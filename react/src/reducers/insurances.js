import {
  GET_INSURANCES,
  ADD_INSURANCE,
  DELETE_INSURANCE
} from "../actions/types";

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
    case DELETE_INSURANCE:
      return {
        ...state,
        insurances: state.insurances.filter(
          insurance => insurance.id !== action.payload
        )
      };

    default:
      return state;
  }
}
