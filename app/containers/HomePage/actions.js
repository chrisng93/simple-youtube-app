import { SEARCH_VIDEOS, SEARCH_VIDEOS_SUCCESS, SEARCH_VIDEOS_FAILURE, SELECT_VIDEO } from './constants';

export const searchVideos = (payload) => {
  return {
    type: SEARCH_VIDEOS,
    payload,
  }
};

export const searchVideosSuccess = (payload) => {
  return {
    type: SEARCH_VIDEOS_SUCCESS,
    payload,
  }
};

export const searchVideosFailure = (payload) => {
  return {
    type: SEARCH_VIDEOS_FAILURE,
    payload,
  }
};

export const selectVideo = (payload) => {
  return {
    type: SELECT_VIDEO,
    payload,
  }
};
