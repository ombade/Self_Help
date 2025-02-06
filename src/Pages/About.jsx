

// export default BoxBreathing;
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import '../MusicTherapy.css';
import box from './audio/box.mp3'

const BoxBreathing = () => {
  const ballRef = useRef(null);
  const audioRef = useRef(new Audio(box));
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState("Inhale");
  const [timeLeft, setTimeLeft] = useState(5);
  const animationRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    animationRef.current = anime.timeline({
      loop: true,
      autoplay: false,
    });

    animationRef.current
      .add({
        targets: ballRef.current,
        translateY: [200, 0], // Move Up
        duration: 5000,
        easing: "easeInOutSine",
        begin: () => updatePhase("Inhale"),
   
      })
      .add({
        targets: ballRef.current,
        translateX: [0, 200], // Move Right
        duration: 5000,
        easing: "easeInOutSine",
        begin: () => updatePhase("Hold (Top)"),
        
      })
      .add({
        targets: ballRef.current,
        translateY: [0, 200], // Move Down
        duration: 5000,
        easing: "easeInOutSine",
        begin: () => updatePhase("Exhale"),
      })
      .add({
        targets: ballRef.current,
        translateX: [200, 0], // Move Left
        duration: 5000,
        easing: "easeInOutSine",
        begin: () => updatePhase("Hold (Bottom)"),
        
         // Ensure the phase resets to Inhale
      });
  }, []);

  const updatePhase = (newPhase) => {
    console.log("Phase change ->" , newPhase);
    setPhase(newPhase);
    setTimeLeft(5);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 5));
    }, 1000);
  };

  const toggleAnimation = () => {
    if (isPlaying) {
      animationRef.current.pause();
      clearInterval(timerRef.current);
      audioRef.current.pause();
    } else {
      // animationRef.current.restart();
      animationRef.current.play();
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="breathing-container">
      <h1 className="title">Box Breathing</h1>
      <div className="graph-container">
        <div className="container"> <div ref={ballRef} className="ball"></div>
        </div>
        </div>
       
      <div className="timer-container">
        <p>Phase: <strong>{phase}</strong></p>
        <p>Time Left: <strong>{timeLeft}s</strong></p>
      </div>
      <button onClick={toggleAnimation} className="start-button">
        {isPlaying ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default BoxBreathing;
