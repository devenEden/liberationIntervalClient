import { mixtapeConstants } from "../actions/mixtapeActions";

const initialState = {
  loading: true,
  success: false,
  mixtapes: [],
  errors: {},

  homePageSkip: 0,
  homePageLimit: 20,
  
};

const mixtapeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case mixtapeConstants.SET_MIXTAPES_REQUEST:
      return {
        ...state,
        loading: payload.false,
        success: payload.success,
        mixtapes: payload.mixtapes,
      };

    case mixtapeConstants.SET_MIXTAPES_ERROR:
      return {
        ...state,
        loading: payload.loading,
        success: payload.success,
        errors: payload.error,
        mixtapes:payload.mixtapes
      };
    default:
      return state;
  }
};

export default mixtapeReducer;
