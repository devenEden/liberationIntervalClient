import { globalConstants } from "../actions/global/globalActions";
const initialState = {
  // "https://liberation-interval.herokuapp.com"
  api_url: "http://localhost:5000",

  authLayout: "login",
  isForgotPasswordModalOpen: false,

  loginSuccess:true,
  isLoginButtonLoading: false,

  isglobalDrawerVisible: false,

  
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
    case globalConstants.TOGGLE_GLOBAL_DRAWER:
      return {
        ...state,
        isglobalDrawerVisible: payload,
      };
    case globalConstants.SET_LOGIN_SUCESSS:
        return {
          ...state,
          loginSuccess: payload.success,
          isLoginButtonLoading: payload.loading
        }
    default:
      return state;
  }
};

export default globalReducer;
