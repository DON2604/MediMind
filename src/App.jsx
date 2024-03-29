import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay muted>
          <source src="../public/Presentation1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <h1>Welcome to My Website</h1>
          <p>This is a sample React app with a video background.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
