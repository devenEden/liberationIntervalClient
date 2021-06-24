export const mixtapeConstants = {
  SET_MIXTAPES_REQUEST: "SET_MIXTAPES_REQUEST",
  SET_MIXTAPES_ERROR: "SET_MIXTAPES_ERROR",

  ADD_MIXTAPES_DETAILS_REQUEST: "ADD_MIXTAPES_DETAILS_REQUEST",
  ADD_MIXTAPES_DETAILS_ERROR: "ADD_MIXTAPES_DETAILS_ERROR",
  TOGGLE_ADD_MIXTAPE_LOADING: "TOGGLE_ADD_MIXTAPE_LOADING",
  SET_MIXTAPE_FORM: "SET_MIXTAPE_FORM",

  GET_MYMIXTAPES_REQUEST: "GET_MYMIXTAPES_REQUEST",
  GET_MYMIXTAPES_ERROR: "GET_MYMIXTAPES_ERROR",
};

export const setMixtapesRequest = (payload) => ({
  type: mixtapeConstants.SET_MIXTAPES_REQUEST,
  payload,
});

export const setMixtapesError = (payload) => ({
  type: mixtapeConstants.SET_MIXTAPES_REQUEST,
  payload,
});

export const addMixtapesDetailsRequest = (payload) => ({
  type: mixtapeConstants.ADD_MIXTAPES_SUCCESS,
  payload,
});

export const addMixtapesDetailsError = (payload) => ({
  type: mixtapeConstants.ADD_MIXTAPES_DETAILS_ERROR,
  payload,
});

export const getMyMixtapesRequest = (payload) => ({
  type: mixtapeConstants.GET_MYMIXTAPES_REQUEST,
  payload,
});

export const getMyMixtapesError = (payload) => ({
  type: mixtapeConstants.GET_MYMIXTAPES_ERROR,
  payload,
});

export const toggleAddMixtapeLoading = (payload) => ({
  type: mixtapeConstants.TOGGLE_ADD_MIXTAPE_LOADING,
  payload,
});

export const setMixtapeForm = (payload) => ({
  type: mixtapeConstants.SET_MIXTAPE_FORM,
  payload,
});
