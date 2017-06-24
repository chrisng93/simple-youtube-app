/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { searchVideos, selectVideo } from './actions';
import { videosSelector, selectedVideoSelector } from './selectors';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import Video from '../../components/Video';

const propTypes = {
  videos: T.array,
  selectedVideo: T.object,
  searchVideos: T.func,
  selectVideo: T.func,
};

function HomePage({ videos, selectedVideo, searchVideos, selectVideo }) { // eslint-disable-line no-shadow
  return (
    <div className="home">
      <SearchBar searchVideos={searchVideos} />
      <div className="content-wrapper">
        <Video selectedVideo={selectedVideo} />
        <SearchResults videos={videos} selectedVideo={selectedVideo} selectVideo={selectVideo} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  videos: videosSelector(state),
  selectedVideo: selectedVideoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  searchVideos: ({ query }) => dispatch(searchVideos({ query })),
  selectVideo: ({ video }) => dispatch(selectVideo({ video })),
});

HomePage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
