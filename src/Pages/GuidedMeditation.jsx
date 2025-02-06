import React, { useState, useRef } from "react";
import "./GuidedMeditation.css";

const GuidedMeditation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const meditationAudio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Replace with your audio file

  const startMeditation = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      timerRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
  };

  const pauseMeditation = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      clearInterval(timerRef.current);
    }
  };

  const resetMeditation = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    clearInterval(timerRef.current);
    setTimeElapsed(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="meditation-container">
      <h1>Guided Meditation</h1>
      <p className="instructions">
        Sit comfortably, close your eyes, and focus on your breath. Let the audio guide you.
      </p>

      <div className="audio-controls">
        <audio ref={audioRef} src={meditationAudio} loop />
        <button
          onClick={isPlaying ? pauseMeditation : startMeditation}
          className={`control-button ${isPlaying ? "pause" : "play"}`}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={resetMeditation} className="reset-button">
          Reset
        </button>
      </div>

      <div className="timer">
        <h2>Time Elapsed: {formatTime(timeElapsed)}</h2>
      </div>

      <div className="meditation-tips">
        <h3>Tips for Effective Meditation</h3>
        <ul>
          <li>Find a quiet and comfortable place.</li>
          <li>Close your eyes and focus on your breath.</li>
          <li>Let go of any distracting thoughts.</li>
          <li>Follow the guidance in the audio.</li>
        </ul>
      </div>
    </div>
  );
};

export default GuidedMeditation;