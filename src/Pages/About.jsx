
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import '../box.css';
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
      
        <div className="container"> <div ref={ballRef} className="ball"></div>
        
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

// import React, { useState, useRef, useEffect } from 'react';
// import '../box.css'; // Import the CSS file (provided below)
// import boxBreathingAudio from './audio/box.mp3'; // Add your audio file

// const BoxBreathing = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [phase, setPhase] = useState('inhale');
//   const [timeLeft, setTimeLeft] = useState(5); // 4 seconds per phase
//   const audioRef = useRef(null);

//   const phases = {
//     inhale: { duration: 5000, color: '#00b4d8', label: 'Inhale' },
//     holdIn: { duration: 5000, color: '#0077b6', label: 'Hold' },
//     exhale: { duration: 5000, color: '#023e8a', label: 'Exhale' },
//     holdOut: { duration: 5000, color: '#03045e', label: 'Hold' },
//   };

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev === 1) {
//             // Move to the next phase
//             const nextPhase = getNextPhase(phase);
//             setPhase(nextPhase);
//             setTimeLeft(5); // Reset timer for the next phase
//             return 5;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning, phase]);

//   useEffect(() => {
//     if (isRunning) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   }, [isRunning]);

//   const getNextPhase = (currentPhase) => {
//     const phaseOrder = ['inhale', 'holdIn', 'exhale', 'holdOut'];
//     const currentIndex = phaseOrder.indexOf(currentPhase);
//     return phaseOrder[(currentIndex + 1) % phaseOrder.length];
//   };

//   const handleStartStop = () => {
//     setIsRunning((prev) => !prev);
//     if (!isRunning) {
//       setPhase('inhale');
//       setTimeLeft(5);
//     }
//   };

//   return (
//     <div className="box-breathing-container">
//       <h1>Box Breathing Exercise</h1>
//       <div className="graph-container" style={{ backgroundColor: phases[phase].color }}>
//         <div className="ball" style={{ transform: `scale(${isRunning ? 1.5 : 1})` }} />
//         <div className="phase-label">{phases[phase].label}</div>
//         <div className="timer">{timeLeft}</div>
//       </div>
//       <button className="start-button" onClick={handleStartStop}>
//         {isRunning ? 'Stop' : 'Start'}
//       </button>
//       <audio ref={audioRef} src={boxBreathingAudio} loop />
//     </div>
//   );
// };

// export default BoxBreathing;
// // import React, { useState, useRef, useEffect } from 'react';
// // import '../box.css'; // Import the CSS file (provided below)
// // import boxBreathingAudio from './audio/box.mp3'; // Add your audio file

// // const BoxBreathing = () => {
// //   const [isRunning, setIsRunning] = useState(false);
// //   const [phase, setPhase] = useState('inhale');
// //   const [timeLeft, setTimeLeft] = useState(4); // 4 seconds per phase
// //   const audioRef = useRef(null);

// //   const phases = {
// //     inhale: { duration: 4000, color: '#00b4d8', label: 'Inhale', position: 'top' },
// //     holdIn: { duration: 4000, color: '#0077b6', label: 'Hold', position: 'right' },
// //     exhale: { duration: 4000, color: '#023e8a', label: 'Exhale', position: 'bottom' },
// //     holdOut: { duration: 4000, color: '#03045e', label: 'Hold', position: 'left' },
// //   };

// //   useEffect(() => {
// //     let interval;
// //     if (isRunning) {
// //       interval = setInterval(() => {
// //         setTimeLeft((prev) => {
// //           if (prev === 1) {
// //             // Move to the next phase
// //             const nextPhase = getNextPhase(phase);
// //             setPhase(nextPhase);
// //             setTimeLeft(4); // Reset timer for the next phase
// //             return 4;
// //           }
// //           return prev - 1;
// //         });
// //       }, 1000);
// //     }
// //     return () => clearInterval(interval);
// //   }, [isRunning, phase]);

// //   useEffect(() => {
// //     if (isRunning) {
// //       audioRef.current.play();
// //     } else {
// //       audioRef.current.pause();
// //       audioRef.current.currentTime = 0;
// //     }
// //   }, [isRunning]);

// //   const getNextPhase = (currentPhase) => {
// //     const phaseOrder = ['inhale', 'holdIn', 'exhale', 'holdOut'];
// //     const currentIndex = phaseOrder.indexOf(currentPhase);
// //     return phaseOrder[(currentIndex + 1) % phaseOrder.length];
// //   };

// //   const handleStartStop = () => {
// //     setIsRunning((prev) => !prev);
// //     if (!isRunning) {
// //       setPhase('inhale');
// //       setTimeLeft(4);
// //     }
// //   };

// //   return (
// //     <div className="box-breathing-container">
// //       <h1>Box Breathing Exercise</h1>
// //       <div className="box-container">
// //         <div className="box">
// //           <div
// //             className="ball"
// //             style={{
// //               backgroundColor: phases[phase].color,
// //               top: phases[phase].position === 'top' ? '0' : phases[phase].position === 'bottom' ? '90%' : '45%',
// //               left: phases[phase].position === 'left' ? '0' : phases[phase].position === 'right' ? '90%' : '45%',
// //               transition: 'all 1s ease',
// //             }}
// //           />
// //         </div>
// //         <div className="phase-label" style={{ color: phases[phase].color }}>
// //           {phases[phase].label}
// //         </div>
// //         <div className="timer">{timeLeft}</div>
// //       </div>
// //       <button className="start-button" onClick={handleStartStop}>
// //         {isRunning ? 'Stop' : 'Start'}
// //       </button>
// //       <audio ref={audioRef} src={boxBreathingAudio} loop />
// //     </div>
// //   );
// // };

// // export default BoxBreathing;
