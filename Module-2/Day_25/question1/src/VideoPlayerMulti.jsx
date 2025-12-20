import React, { useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

function VideoPlayerMulti() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();
  const handleForward = () => (videoRef.current.currentTime += 5);
  const handleRewind = () => (videoRef.current.currentTime -= 5);

  const handleNext = () => {
    setCurrentVideoIndex((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Custom Video Player (Multiple Videos)</h2>
      <video
        ref={videoRef}
        width="600"
        src={videos[currentVideoIndex]}
        controls={false}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ Forward</button>
        <button onClick={handleRewind}>⏪ Rewind</button>
        <button onClick={handlePrevious}>⏮ Previous</button>
        <button onClick={handleNext}>⏭ Next</button>
      </div>
    </div>
  );
}

export default VideoPlayerMulti;