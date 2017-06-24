import { List, Map, fromJS } from 'immutable';
import { SEARCH_VIDEOS, SEARCH_VIDEOS_SUCCESS, SEARCH_VIDEOS_FAILURE, SELECT_VIDEO } from './constants';

const initialError = Map({ status: false, message: '' });

const initialState = fromJS({
  isSearchingVideos: false,
  videos: List(),
  selectedVideo: Map(),
  error: initialError,
});

export default function homeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case SEARCH_VIDEOS:
      return state
        .set('isSearchingVideos', true);
    case SEARCH_VIDEOS_SUCCESS:
      return state
        .set('videos', fromJS(payload.videos))
        .set('isSearchingVideos', false)
        .set('error', initialError);
    case SEARCH_VIDEOS_FAILURE:
      return state
        .set('videos', List())
        .set('isSearchingVideos', false)
        .set('error', Map({ status: true, message: payload.message }));

    case SELECT_VIDEO:
      console.log(payload)
      return state
        .set('selectedVideo', payload.video);

    default:
      return state;
  }
}
