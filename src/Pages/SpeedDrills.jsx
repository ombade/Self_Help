import React, { useState, useRef } from "react";
import "./SpeedDrills.css";

const SpeedDrills = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(240); // 4 minutes in seconds
  const [currentRound, setCurrentRound] = useState(1);
  const timerRef = useRef(null);

  const startDrill = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  const resetDrill = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(240); // Reset to 4 minutes
    setCurrentRound(1);
  };

  const nextRound = () => {
    setCurrentRound((prev) => prev + 1);
    setTimeLeft(240 - 60 * (currentRound)); // Reduce time by 1 minute each round
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="speed-drills-container">
      <h1>Speed Drills</h1>
      <p className="instructions">
        Read the paragraph below. Start with 4 minutes, then try to read it faster in each round.
      </p>
      
      {/* <div className="paragraph">
        <p>
          "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet. 
          Reading it repeatedly will help improve your speed and comprehension. Focus on understanding the 
          meaning while increasing your pace."
        </p>
      </div> */}

      <div className="timer">
        <h2>Time Left: {formatTime(timeLeft)}</h2>
      </div>

      <div className="controls">
        {!isRunning ? (
          <button onClick={startDrill} className="start-button">
            Start Drill
          </button>
        ) : (
          <button onClick={resetDrill} className="reset-button">
            Reset Drill
          </button>
        )}
        {isRunning && timeLeft === 0 && (
          <button onClick={nextRound} className="next-button">
            Next Round ({4 - currentRound} min)
          </button>
        )}
      </div>

      <div className="round-info">
        <h3>Round: {currentRound}</h3>
        <p>Goal: Read the paragraph in {4 - currentRound} minutes.</p>
      </div>
    </div>
  );
};

export default SpeedDrills;