
import React from 'react';
import "../styles/Rain.css"
const Rain = () => {
    const numberOfDrops = 100; // Adjust as needed

    const raindrops = Array.from({ length: numberOfDrops }, (_, index) => (
      <div
        key={index}
        className="raindrop"
        style={{
          left: `${Math.random() * 100}vw`, // Random horizontal position
          animationDuration: `${Math.random() * 1 + 7}s`, // Random speed
        }}
      ></div>
    ));

  return (
    <div className="rain-container">
      {raindrops}
    </div>
  );
};

export default Rain;