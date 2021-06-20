export const mixtapeConstants = {
  SET_MIXTAPES_REQUEST: "SET_MIXTAPES_REQUEST",
  SET_MIXTAPES_ERROR: "SET_MIXTAPES_ERROR",
};

export const setMixtapesRequest = (payload) => ({
  type: mixtapeConstants.SET_MIXTAPES_REQUEST,
  payload,
});

export const setMixtapesError = (payload) => ({
    type: mixtapeConstants.SET_MIXTAPES_REQUEST,
    payload,
});
