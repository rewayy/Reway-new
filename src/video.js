import React, { useState } from 'react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/9vELvnN-9sU';

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <div className="play-button-overlay">
          {!isPlaying && (
            <img
              src="path/to/your-play-button-image.png"
              alt="Play Button"
              className="play-button"
              onClick={handlePlay}
            />
          )}
        </div>
        <div className="heading-video" style={{ paddingTop: '50px', color: '#FFD700' }}>
          <h1 className='video-heading'>
            ONE STEP.<br />
            ONE CHOICE.<br />
            TO MEND <br />
            THE PLANET!
          </h1>
        </div>

        <iframe
          title="YouTube Video"
          className={`responsive-video ${isPlaying ? 'playing' : ''}`}
          src={videoUrl}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
