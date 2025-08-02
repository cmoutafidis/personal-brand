import { useEffect } from 'react';

const PrerenderDetector: React.FC = () => {
  useEffect(() => {
    // Add prerender detection
    if (window.navigator.userAgent.includes('Prerender')) {
      // Add a class to body for prerender-specific styling if needed
      document.body.classList.add('prerender');
      
      // Ensure all images are loaded before prerender completes
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      
      Promise.all(imagePromises).then(() => {
        // Signal that the page is ready for prerendering
        window.prerenderReady = true;
      });
    }
  }, []);

  return null;
};

export default PrerenderDetector;