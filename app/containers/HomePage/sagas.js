import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from '../../utils/request';
import { searchVideosSuccess, searchVideosFailure } from './actions';
import { YOUTUBE_API_KEY } from '../../config/config';
import { SEARCH_VIDEOS } from './constants';

export function* getVideos({ payload: { query } }) {
  const queryString = `part=snippet&type=embeddable&video=true&maxResults=20&key=${YOUTUBE_API_KEY}&q=${query}`;
  const requestUrl = `https://www.googleapis.com/youtube/v3/search?${queryString}`;

  try {
    const response = yield call(request, requestUrl);
    yield put(searchVideosSuccess({ videos: response.items }));
  } catch(error) {
    yield put(searchVideosFailure({ message: error }));
  }
}

export function* getVideosWatcher() {
  const watcher = yield takeLatest(SEARCH_VIDEOS, getVideos);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getVideosWatcher,
]
