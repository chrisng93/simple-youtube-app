import React, { Component } from 'react';
import SearchResult from '../SearchResult';

export default class SearchResults extends Component {
  render() {
    const { videos, selectVideo } = this.props;
    return (
      <div>
        {videos.map(video => <SearchResult key={video.get('etag')} video={video} selectVideo={selectVideo} />)}
      </div>
    );
  }
}
