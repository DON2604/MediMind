import React, { useState, useEffect } from 'react';

const GifComponent = ({ src }) => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowGif(false);
    }, 8000); // Change 3000 to the duration you want the GIF to play in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {showGif && <img src={src} alt="Animated GIF" />}
    </div>
  );
};

export default GifComponent;