import React, { useEffect, useRef } from 'react';

const Scale = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleZoom = (event) => {
      // Calculate the zoom level based on the wheel event
      const zoomLevel = 1 + event.deltaY * 0.01;

      // Apply the scale transformation
      elementRef.current.style.transform = `scale(${zoomLevel})`;
    };

    // Add event listener for the wheel event
    const element = elementRef.current;
    element.addEventListener('wheel', handleZoom);

    // Clean up the event listener on component unmount
    return () => {
      element.removeEventListener('wheel', handleZoom);
    };
  }, []);

  return (
    <div ref={elementRef} className="elementToScale">
      {/* Your content goes here */}
    </div>
  );
};

export default Scale;