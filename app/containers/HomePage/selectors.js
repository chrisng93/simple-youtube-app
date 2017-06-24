import { createSelector } from 'reselect';

const homeStateSelector = (state) => state.home;

export const videosSelector = createSelector(
  homeStateSelector,
  homeState => homeState.videos
);
