import React, { Component } from 'react';
import SearchResult from '../SearchResult';

export default function SearchResults({ videos, selectedVideo, selectVideo }) {
  return (
    <div className={`search-results ${selectedVideo ? 'selected-video' : ''}`}>
      {videos.map(video => <SearchResult key={video.get('etag')} video={video} selectVideo={selectVideo} />)}
    </div>
  );
}
