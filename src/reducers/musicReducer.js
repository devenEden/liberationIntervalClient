import { musicConstants } from "../actions/musicActions";

const initialState = {
  homePageMusicLoading: true,
  homePageMusicSuccess: false,
  homePageMusicError: {},
  homePageMusic: [],

  musicPageMusicLoading: true,
  musicPageMusicSuccess: false,
  musicPageMusicError: {},
  musicPageMusic: [],
};

const musicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case musicConstants.SET_HOME_PAGE_MUSIC_REQUEST:
      return {
        ...state,
        homePageMusicLoading: payload.loading,
        homePageMusicSuccess: payload.success,
        homePageMusic: payload.music,
      };
    case musicConstants.SET_HOME_PAGE_MUSIC_ERROR:
      return {
        ...state,
        homePageMusicLoading: payload.loading,
        homePageMusicSuccess: payload.success,
        homePageMusicError: payload.error,
        homePageMusic: payload.music,
      };
      case musicConstants.SET_MUSIC_PAGE_MUSIC_REQUEST:
        return {
          ...state,
          musicPageMusicLoading: payload.loading,
          musicPageMusicSuccess: payload.success,
          musicPageMusic: payload.music,
        };
      case musicConstants.SET_MUSIC_PAGE_MUSIC_ERROR:
        return {
          ...state,
          musicPageMusicLoading: payload.loading,
          musicPageMusicSuccess: payload.success,
          musicPageMusicError: payload.error,
          musicPageMusicMusic: payload.music
        };

    default:
      return state;
  }
};

export default musicReducer;
