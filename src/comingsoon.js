import React from 'react';
import Video123 from '../src/Reway - Made with Clipchamp (1) (1).mp4';

const ComingSoon = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Video element to display the video */}
      <video
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        autoPlay
        muted
        loop
      >
        <source src="Video123" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ComingSoon;
