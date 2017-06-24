import React, { Component } from 'react';

export default function SearchResult({ video, selectVideo }) {
  return (
    <div onClick={() => selectVideo({ video })}>
      {video.get('etag')}
    </div>
  );
}
