export const globalConstants = {
  CHANGE_AUTHETICATION_PAGE: "CHANGE_AUTHETICATION_PAGE",
  TOGGLE_FORGOT_PASSWORD_MODAL: "TOGGLE_FORGOT_PASSWORD_MODAL",
  TOGGLE_GLOBAL_DRAWER: "TOGGLE_GLOBAL_DRAWER",
  SET_LOGIN_SUCESSS: "SET_LOGIN_SUCESSS",
};

export const changeAuthPage = (payload) => ({
  type: globalConstants.CHANGE_AUTHETICATION_PAGE,
  payload,
});

export const toggleForgotPasswordModal = (payload) => ({
  type: globalConstants.TOGGLE_FORGOT_PASSWORD_MODAL,
  payload,
});

export const toggleglobalDrawer = (payload) => ({
  type: globalConstants.TOGGLE_GLOBAL_DRAWER,
  payload,
});

export const toggleLoginSuccess = (payload) => ({
  type: globalConstants.SET_LOGIN_SUCESSS,
  payload,
});
