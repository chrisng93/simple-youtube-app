import { createSelector } from 'reselect';

const homeStateSelector = (state) => state.get('home');

export const videosSelector = createSelector(
  homeStateSelector,
  homeState => homeState.get('videos')
);

export const selectedVideoSelector = createSelector(
  homeStateSelector,
  homeState => homeState.get('selectedVideo')
);
