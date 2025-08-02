// Prerender.io utility functions

export const isPrerendering = (): boolean => {
  return typeof window !== 'undefined' && 
         window.navigator.userAgent.includes('Prerender');
};

export const waitForPrerender = (timeout: number = 5000): Promise<void> => {
  return new Promise((resolve) => {
    if (!isPrerendering()) {
      resolve();
      return;
    }

    const checkReady = () => {
      // Wait for all images to load
      const images = document.querySelectorAll('img');
      const allImagesLoaded = Array.from(images).every(img => img.complete);
      
      // Wait for any async content to load
      const hasLoadingElements = document.querySelectorAll('[data-loading="true"]').length > 0;
      
      if (allImagesLoaded && !hasLoadingElements) {
        // @ts-ignore
        window.prerenderReady = true;
        resolve();
      } else {
        setTimeout(checkReady, 100);
      }
    };

    // Start checking
    setTimeout(checkReady, 100);
    
    // Fallback timeout
    setTimeout(() => {
      // @ts-ignore
      window.prerenderReady = true;
      resolve();
    }, timeout);
  });
};

export const markAsReady = (): void => {
  if (isPrerendering()) {
    // @ts-ignore
    window.prerenderReady = true;
  }
};