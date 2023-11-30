import React from 'react';
import '../src/video.css'; // Import CSS file for styling
import video from '../src/Glitched out..mp4'; // Import the video file

const Video = () => {
  return (
    <div className="video-container">
      <h2>Glitched Out Video</h2>
      <div className="video-wrapper">
        <video controls  autoPlay className="responsive-video">
          <source src={video} type="video/mp4" /> {/* Use the imported video variable */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
