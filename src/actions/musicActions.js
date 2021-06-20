export const musicConstants = {
  SET_HOME_PAGE_MUSIC_REQUEST: "SET_HOME_PAGE_MUSIC_REQUEST",
  SET_HOME_PAGE_MUSIC_ERROR: "SET_HOME_PAGE_MUSIC_ERROR",

  SET_MUSIC_PAGE_MUSIC_REQUEST: "SET_MUSIC_PAGE_MUSIC_REQUEST",
  SET_MUSIC_PAGE_MUSIC_ERROR: "SET_MUSIC_PAGE_MUSIC_ERROR",
};


export const setHomePageMusic = payload => ({
    type: musicConstants.SET_HOME_PAGE_MUSIC_REQUEST,
    payload
});

export const setHomePageMusicError = payload => ({
    type: musicConstants.SET_HOME_PAGE_MUSIC_ERROR,
    payload
});

export const setMusicPageMusic = payload => ({
    type: musicConstants.SET_MUSIC_PAGE_MUSIC_REQUEST,
    payload
});

export const setMusicPageMusicError = payload => ({
    type: musicConstants.SET_MUSIC_PAGE_MUSIC_ERROR,
    payload
});

