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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { searchVideos } from './actions';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import Video from '../../components/Video';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { searchVideos } = this.props;
    return (
      <h1>
        <SearchBar searchVideos={searchVideos} />
        <SearchResults />
        <Video />
      </h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
