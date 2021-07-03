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

  singleMixtapeLoading: true,
  singleMixtapeData: {},
  singleMixtapeSuccess: false,

  likeMixtapeSuccess: false,

  addMixtapeCommentSuccess: false,
  addMixtapeCommentLoading: false,

  getMixtapeCommentsSuccess: false,
  getMixtapeCommentLoading: true,
  mixtapeComments: [],

  playerDisplay: "none",
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
    case mixtapeConstants.GET_SINGLE_MIXTAPE_REQUEST:
      return {
        ...state,
        singleMixtapeLoading: payload.loading,
        singleMixtapeSuccess: payload.success,
        singleMixtapeData: payload.mixtape,
      };
    case mixtapeConstants.GET_SINGLE_MIXTAPE_ERROR:
      return {
        ...state,
        singleMixtapeLoading: payload.loading,
        singleMixtapeSuccess: payload.success,
      };
    case mixtapeConstants.GET_MIXTAPE_COMMENTS_REQUEST:
      return {
        ...state,
        getMixtapeCommentsSuccess: payload.success,
        getMixtapeCommentLoading: payload.loading,
        mixtapeComments: payload.comments,
      };
    case mixtapeConstants.GET_MIXTAPE_COMMENTS_ERROR:
      return {
        ...state,
        getMixtapeCommentsSuccess: payload.success,
        getMixtapeCommentLoading: payload.loading,
      };
    case mixtapeConstants.ADD_MIXTAPES_COMMENT_ERROR:
      return {
        ...state,
        addMixtapeCommentLoading: payload.loading,
        addMixtapeCommentSuccess: payload.success,
      };
    case mixtapeConstants.ADD_MIXTAPES_COMMENT_REQUEST:
      return {
        ...state,
        addMixtapeCommentLoading: payload.loading,
        addMixtapeCommentSuccess: payload.success,
        mixtapeComments: payload.comments,
      };
    case mixtapeConstants.TOGGLE_MIXTAPE_PLAYER: 
       return {
         ...state,
         playerDisplay: payload
       }
    default:
      return state;
  }
};

export default mixtapeReducer;
