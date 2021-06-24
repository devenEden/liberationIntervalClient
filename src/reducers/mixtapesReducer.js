import { mixtapeConstants } from "../actions/mixtapeActions";

const initialState = {
  loading: true,
  success: false,
  mixtapes: [],
  errors: {},

  homePageSkip: 0,
  homePageLimit: 20,

  AddMixtapeForm: "details",
  uploadmixtapesLoading: false,
  uploadMixtapesDetailsSuccess: false,
  uploadMixtapesCoverImageSuccess: false,
  uploadMixtapesCoverAudioSuccess: false,
  uploadMixtapesDetails: {},

  myMixtapesLoading: true,
  myMixtapes: [],
  getMyMixtapesSuccess: false,
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
        mixtapes: payload.mixtapes,
      };
    case mixtapeConstants.ADD_MIXTAPES_DETAILS_REQUEST:
      return {
        ...state,
        uploadmixtapesLoading: payload.loading,
        uploadMixtapesDetailsSuccess: payload.success,
        uploadMixtapesDetails: payload.details,
        AddMixtapeForm: payload.form,
      };
    case mixtapeConstants.ADD_MIXTAPES_DETAILS_ERROR:
      return {
        ...state,
        uploadmixtapesLoading: payload.loading,
        uploadMixtapesDetailsSuccess: payload.success,
        uploadMixtapesDetails: payload.details,
        AddMixtapeForm: payload.form,
      };
    case mixtapeConstants.TOGGLE_ADD_MIXTAPE_LOADING:
      return {
        ...state,
        uploadmixtapesLoading: payload,
      };
    case mixtapeConstants.SET_MIXTAPE_FORM:
      return {
        ...state,
        AddMixtapeForm: payload,
      };
    case mixtapeConstants.GET_MYMIXTAPES_REQUEST:
      return {
        ...state,
        getMyMixtapesSuccess: payload.success,
        myMixtapes: payload.myMixtapes,
        myMixtapesLoading: payload.loading,
      };
    case mixtapeConstants.GET_MYMIXTAPES_ERROR:
      return {
        ...state,
        getMyMixtapesSuccess: payload.success,
        myMixtapes: payload.myMixtapes,
        myMixtapesLoading: payload.loading,
      };
    default:
      return state;
  }
};

export default mixtapeReducer;
