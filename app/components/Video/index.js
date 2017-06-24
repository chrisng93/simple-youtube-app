import React, { Component } from "react";

export default function Video({ selectedVideo }) {
  if (selectedVideo && !selectedVideo.size) {
    return null;
  }
  return (
    <div className="video">
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`http://www.youtube.com/embed/${selectedVideo.get('id').get('videoId')}`} allowFullScreen />
        </div>
      </div>
      <div className="video-player-details">
        <h3>
          {}
        </h3>
        <div>
          {}
        </div>
      </div>
    </div>
  );
}
