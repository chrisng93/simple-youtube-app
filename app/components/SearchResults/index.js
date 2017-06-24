import React, { PropTypes as T } from 'react';
import SearchResult from '../SearchResult';

const propTypes = {
  videos: T.array,
  selectedVideo: T.object,
  selectVideo: T.func,
};

export default function SearchResults({ videos, selectedVideo, selectVideo }) {
  return (
    <div className={`search-results ${selectedVideo ? 'selected-video' : ''}`}>
      {videos.map(video => <SearchResult key={video.get('etag')} video={video} selectVideo={selectVideo} />)}
    </div>
  );
}

SearchResults.propTypes = propTypes;
