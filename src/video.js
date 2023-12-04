import React, { useRef } from 'react';
import '../src/video.css'; // Import CSS file for styling
import video from '../src/Glitched out..mp4'; // Import the video file
import playButton from '../src/R (1).png'; // Import the play button image file

const Video = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    const vid = videoRef.current;
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };

  const hideLogo = () => {
    const playButtonOverlay = document.getElementById('playButtonOverlay');
    playButtonOverlay.style.display = 'none';
  };

  return (
    <div className="video-container">
      
      <div className="video-wrapper">
      <h1 className='heading-video'>ONE STEP.<br/>ONE CHOICE.<br/>TO MEND <br/> THE PLANET!</h1>
        <video
          id="video"
          className="responsive-video"
          preload="metadata"
          ref={videoRef}
          onPlay={hideLogo}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="playButtonOverlay" className="play-button-overlay">
          <img
            src={playButton}
            alt="Play Button"
            className="play-button"
            onClick={handlePlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
