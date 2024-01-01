import { useEffect } from 'react';

const Zoom = () => {
  useEffect(() => {
    const handleResize = () => {
      const zoomLevel = window.innerWidth / window.outerWidth;
      if (zoomLevel !== 1) {
        // Adjust the scale to counteract zooming
        document.body.style.transform = `scale(${1 / zoomLevel})`;
      } else {
        // Reset the scale if not zoomed
        document.body.style.transform = 'scale(1)';
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}
export default Zoom;
