import { CV } from "../.././cv/cv";
import * as actions from "./business.actions";

const { business } = CV;

const INITIAL_STATE = {
  business: business,
};

const businessReducer = (state = INITIAL_STATE, action) => {
  const { business } = state;
  switch (action.type) {
    case actions.ADD_BUSINESS:
      return { ...state, business: [...business, action.payload] };
    case actions.DELETE_BUSINESS:
      const businessFiltered = business.filter((exp) => exp !== action.payload);
      return { ...state, business: [...businessFiltered] };
    default:
      return state;
  }
};

export default businessReducer;
