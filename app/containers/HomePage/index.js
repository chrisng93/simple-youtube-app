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

import React from 'react';
import { connect } from 'react-redux';
import { searchVideos, selectVideo } from './actions';
import { videosSelector, selectedVideoSelector } from './selectors';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import Video from '../../components/Video';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { videos, selectedVideo, searchVideos, selectVideo } = this.props;
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
}

const mapStateToProps = (state) => {
  return {
    videos: videosSelector(state),
    selectedVideo: selectedVideoSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: ({ query }) => dispatch(searchVideos({ query })),
    selectVideo: ({ video }) => dispatch(selectVideo({ video })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
