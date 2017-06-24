import React from 'react';

export default function SearchResult({ video, selectVideo }) {
  return (
    <div className="search-result" onClick={() => selectVideo({ video })}>
      <div className="search-result-image">
        <img src={video.get('snippet').get('thumbnails').get('medium').get('url')} />
      </div>
      <div className="search-result-info">
        <div className="search-result-info-title">
          <strong>{video.get('snippet').get('title')}</strong>
        </div>
        <div className="search-result-info-description">
          {video.get('snippet').get('description')}
        </div>
      </div>
    </div>
  );
}
