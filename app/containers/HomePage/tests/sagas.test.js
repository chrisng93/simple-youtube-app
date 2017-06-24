import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';
import { YOUTUBE_API_KEY } from '../../../config/config';
import { SEARCH_VIDEOS } from '../constants';
import { searchVideosSuccess, searchVideosFailure } from '../actions';
import { getVideos, getVideosWatcher } from '../sagas';

const query = 'test';

/* eslint-disable redux-saga/yield-effects */
describe('getVideos Saga', () => {
  let getVideosGenerator;

  beforeEach(() => {
    getVideosGenerator = getVideos({ payload: { query } });

    const callDescriptor = getVideosGenerator.next(YOUTUBE_API_KEY, query).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the searchVideosSuccess action if it requests the data successfully', () => {
    const response = {
      items: [{ test: 'test' }],
    };
    const putDescriptor = getVideosGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(searchVideosSuccess({ videos: response.items })));
  });

  it('should dispatch the searchVideosFailure action if the response errors', () => {
    const response = new Error('some error');
    const putDescriptor = getVideosGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(searchVideosFailure({ message: response })));
  });
});

describe('getVideosWatcher', () => {
  const getVideosWatcherSaga = getVideosWatcher();
  const mockedTask = createMockTask();

  it('should start task to watch for SEARCH_VIDEOS action', () => {
    const takeLatestDescriptor = getVideosWatcherSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SEARCH_VIDEOS, getVideos));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = getVideosWatcherSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = getVideosWatcherSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
