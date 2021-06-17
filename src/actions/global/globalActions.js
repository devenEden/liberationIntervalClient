export const globalConstants = {
  CHANGE_AUTHETICATION_PAGE: "CHANGE_AUTHETICATION_PAGE",
  TOGGLE_FORGOT_PASSWORD_MODAL: "TOGGLE_FORGOT_PASSWORD_MODAL",
};

export const changeAuthPage = (payload) => ({
  type: globalConstants.CHANGE_AUTHETICATION_PAGE,
  payload,
});

export const toggleForgotPasswordModal = (payload) => ({
  type: globalConstants.TOGGLE_FORGOT_PASSWORD_MODAL,
  payload,
});
