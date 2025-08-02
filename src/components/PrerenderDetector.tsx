import { useEffect } from 'react';
import { isPrerendering, waitForPrerender } from '../utils/prerender';

const PrerenderDetector: React.FC = () => {
  useEffect(() => {
    if (!isPrerendering()) return;

    console.log('Prerender.io bot detected');
    
    // Add a class to body for prerender-specific styling if needed
    document.body.classList.add('prerender');
    
    // Enhanced prerender readiness detection
    const prepareForPrerender = async () => {
      try {
        // Wait for all critical content to load
        await waitForPrerender();
        
        // Additional checks for dynamic content
        const checkDynamicContent = () => {
          // Ensure contact form is rendered
          const contactForm = document.querySelector('form');
          const heroSection = document.querySelector('#hero');
          const navigationMenu = document.querySelector('nav');
          
          return contactForm && heroSection && navigationMenu;
        };
        
        // Wait a bit more for dynamic content
        let attempts = 0;
        const maxAttempts = 20;
        
        const waitForDynamicContent = () => {
          if (checkDynamicContent() || attempts >= maxAttempts) {
            console.log('Dynamic content ready or max attempts reached');
            // @ts-ignore
            window.prerenderReady = true;
            return;
          }
          
          attempts++;
          setTimeout(waitForDynamicContent, 250);
        };
        
        waitForDynamicContent();
        
      } catch (error) {
        console.error('Prerender preparation error:', error);
        // Fallback - mark as ready anyway
        // @ts-ignore
        window.prerenderReady = true;
      }
    };
    
    prepareForPrerender();
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('prerender');
    };
  }, []);

  return null;
};

export default PrerenderDetector;