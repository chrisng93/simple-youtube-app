import { SEARCH_VIDEOS, SEARCH_VIDEOS_SUCCESS, SEARCH_VIDEOS_FAILURE, SELECT_VIDEO } from '../constants';
import { searchVideos, searchVideosSuccess, searchVideosFailure, selectVideo } from '../actions';

describe('HomePage actions', () => {
  describe('searchVideos', () => {
    it('should return the right type and payload', () => {
      const expectedResult = {
        type: SEARCH_VIDEOS,
        payload: { test: 'test' },
      };
      expect(searchVideos(expectedResult.payload)).toEqual(expectedResult);
    });
  });

  describe('searchVideosSuccess', () => {
    it('should return the right type and payload', () => {
      const expectedResult = {
        type: SEARCH_VIDEOS_SUCCESS,
        payload: { test: 'test' },
      };
      expect(searchVideosSuccess(expectedResult.payload)).toEqual(expectedResult);
    });
  });

  describe('searchVideosFailure', () => {
    it('should return the right type and payload', () => {
      const expectedResult = {
        type: SEARCH_VIDEOS_FAILURE,
        payload: { test: 'test' },
      };
      expect(searchVideosFailure(expectedResult.payload)).toEqual(expectedResult);
    });
  });

  describe('selectVideo', () => {
    it('should return the right type and payload', () => {
      const expectedResult = {
        type: SELECT_VIDEO,
        payload: { test: 'test' },
      };
      expect(selectVideo(expectedResult.payload)).toEqual(expectedResult);
    });
  });
});
