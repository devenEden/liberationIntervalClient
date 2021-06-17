import { globalConstants } from "../actions/global/globalActions";
const initialState = {
  api_url: "http://127.0.0.1:5000",

  authLayout: "login",
  isForgotPasswordModalOpen: false,
};

const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case globalConstants.CHANGE_AUTHETICATION_PAGE:
      return {
        ...state,
        authLayout: payload,
      };
    case globalConstants.TOGGLE_FORGOT_PASSWORD_MODAL:
      return {
        ...state,
        isForgotPasswordModalOpen: payload,
      };

    default:
      return state;
  }
};

export default globalReducer;
