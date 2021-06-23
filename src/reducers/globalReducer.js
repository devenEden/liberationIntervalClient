import { globalConstants } from "../actions/global/globalActions";
const initialState = {
  // "https://liberation-interval.herokuapp.com"
  api_url: "http://localhost:5000",

  authLayout: "login",
  isForgotPasswordModalOpen: false,

  loginSuccess: true,
  isLoginButtonLoading: false,

  isglobalDrawerVisible: false,

  isProfileDrawerVisible: false,
  profileLoading: true,
  profileSuccess: false,
  profileInfo:{}
  
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
    case globalConstants.TOGGLE_PROFILE_DRAWER:
      return {
        ...state,
        isProfileDrawerVisible: payload,
      };
    case globalConstants.SET_LOGIN_SUCESSS:
      return {
        ...state,
        loginSuccess: payload.success,
        isLoginButtonLoading: payload.loading,
      };
      case globalConstants.SET_PROFILE_REQUEST:
        return {
          ...state,
          profileInfo: payload.profileInfo,
          profileLoading: payload.loading,
          profileSuccess: payload.success
        };
        case globalConstants.SET_PROFILE_ERROR:
          return {
            ...state,
            profileInfo: payload.profileInfo,
            profileLoading: payload.loading,
            profileSuccess: payload.success,
          };
    default:
      return state;
  }
};

export default globalReducer;
