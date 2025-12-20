import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null); // useRef to access <video>

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5; // skip 5 seconds
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5; // go back 5 seconds
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Custom Video Player (useRef)</h2>
      <video
        ref={videoRef}
        width="600"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls={false} // hide default controls
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ Forward</button>
        <button onClick={handleRewind}>⏪ Rewind</button>
      </div>
    </div>
  );
}

export default VideoPlayer;