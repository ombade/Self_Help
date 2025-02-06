import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Self-Help App</h1>
      <p className="home-subtitle">Your journey to mindfulness and self-improvement starts here.</p>
      
      <div className="modules-grid">
        <Link to="/box-breathing" className="module-card">
          <h2>Box Breathing</h2>
          <p>Calm your mind with guided breathing exercises.</p>
        </Link>
        <Link to="/music-therapy" className="module-card">
          <h2>Music Therapy</h2>
          <p>Relax with soothing music and nature sounds.</p>
        </Link>
        <Link to="/speed-drills" className="module-card">
          <h2>Speed Drills</h2>
          <p>Improve your reading speed and comprehension.</p>
        </Link>
        <Link to="/guided-meditation" className="module-card">
          <h2>Guided Meditation</h2>
          <p>Find peace with guided meditation sessions.</p>
        </Link>
        <Link to="/daily-journaling" className="module-card">
          <h2>Daily Journaling</h2>
          <p>Reflect on your day and track your progress.</p>
        </Link>
        <Link to="/gratitude-practice" className="module-card">
          <h2>Gratitude Practice</h2>
          <p>Focus on the positive things in your life.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;