import React, { useState, useRef } from 'react';
import '../MusicTherapy.css';
import study from './audio/study.mp3';
import suppot from './imgs/suppot.gif'
import hk from './imgs/hk.jpg';
import smMor from './imgs/smMor.jpg'
import { color } from '@chakra-ui/react';

import morningAFF from './audio/MoningAFF.mp3'
import dailyGratitute from './audio/dailyGratitute.mp3'
// Sample Data (categories with audio tracks inside them)
const audioCategories = {
  binauralBeats: [
    {
      title: "Study Beats",
      description: "Focus better with binaural beats designed for studying.",
      src: study, // Directly reference file path
      backgroundImage: suppot, // Background image for Study Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },

    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: './', // Background image for Meditation Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },
    {
      title: "Meditation Beats",
      description: "Relax with binaural beats for deep meditation.",
      src: "./audio/meditation.mp3",
      backgroundImage: "./images/meditation-bg.jpg", // Background image for Meditation Beats
    },
  ],
  asmr: [
    {
      title: "Rain Sounds",
      description: "Soothing rain sounds for relaxation.",
      src: "./audio/rain.mp3",
      backgroundImage: "./images/rain-bg.jpg", // Background image for Rain Sounds
    },
    {
      title: "Ocean Waves",
      description: "Gentle waves for peaceful sleep.",
      src: "./audio/ocean.mp3",
      backgroundImage: "./images/ocean-bg.jpg", // Background image for Ocean Waves
    },
  ],
  AFFIRMATIONS: [
    {
      title: "Radhe Radhe Govinda",
      description: "Relax with soft and soothing piano music.",
      src: dailyGratitute,
      backgroundImage: hk, // Background image for Calm Piano
    },
    {
      title: " Gratitude Affirmations",
      description: "By Sandeep Maheshwari",
      src: dailyGratitute,
      backgroundImage: smMor, // Background image for Calm Piano
    },
    {
      title: " DAILY MORNING AFFIRMATIONS",
      description: "By Sandeep Maheshwari",
      src: morningAFF,
      backgroundImage: smMor, // Background image for Forest Ambience
    },
  ],
};

function MusicTherapy() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const playPauseHandler = (audio) => {
    if (currentAudio === audio && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentAudio(audio);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCurrentAudio(null); // Reset the current audio when changing categories
    setIsPlaying(false); // Pause audio when changing categories
  };

  return (
    <div className="music-therapy">
      <h1>Music Therapy</h1>

      <div className="navbar">
        {Object.keys(audioCategories).map((category) => (
          <div
            key={category}
            className="navbar-item"
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </div>
        ))}
      </div>

      {currentCategory && (
        <div className="audio-list">
          {audioCategories[currentCategory].map((audio, index) => (
            <div key={index} className="audio-item" style={{ backgroundImage: `url(${audio.backgroundImage})` }}>
              <h3 >{audio.title}</h3>
              <p>{audio.description}</p>
              <div className="audio-controls">
                <button onClick={() => playPauseHandler(audio)}>
                  {currentAudio === audio && isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {currentAudio && (
        <audio
          ref={audioRef}
          src={currentAudio.src}
          onEnded={() => setIsPlaying(false)}
          preload="auto"
        />
      )}
    </div>
  );
}

export default MusicTherapy;
