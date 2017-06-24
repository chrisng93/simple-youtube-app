import { fromJS } from 'immutable';
import { SELECT_VIDEO } from '../constants';
import HomeReducer from '../reducer';

describe('HomeReducer', () => {
  it('returns the initial state', () => {
    expect(HomeReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles select video', () => {
    const testAction = {
      type: SELECT_VIDEO,
      payload: { video: { test: 'test' } },
    };
    expect(HomeReducer(undefined, testAction).get('selectedVideo')).toEqual(fromJS(testAction.payload.video));
  });
});
