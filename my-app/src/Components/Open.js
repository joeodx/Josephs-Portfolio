import React from 'react';

const Open = () => {
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <p>
        Click the link to open in a new tab:
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick('https://www.example.com')}>
          Visit Example.com
        </a>
      </p>
    </div>
  );
};

export default Open;
