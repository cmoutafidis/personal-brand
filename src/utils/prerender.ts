// Prerender.io utility functions based on latest documentation

export const isPrerendering = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  // Enhanced bot detection based on Prerender.io recommendations
  const botPatterns = [
    // Search engines
    'googlebot', 'adsbot-google', 'apis-google', 'mediapartners-google', 
    'google-safety', 'feedfetcher-google', 'googleproducer', 'google-site-verification',
    'google-inspectiontool', 'bingbot', 'yandexbot', 'yabrowser', 'yahoo', 
    'baiduspider', 'naver', 'seznambot', 'sznprohlizec', 'qwantbot', 
    'ecosia', 'duckduckbot', 'duckassistbot', 'applebot',
    
    // Social media
    'facebookexternalhit', 'facebookcatalog', 'facebookbot', 'meta-externalagent',
    'instagram', 'twitterbot', 'linkedinbot', 'whatsapp', 'slackbot', 
    'pinterest', 'tiktok', 'tiktokspider', 'bytespider', 'discordbot',
    
    // SEO tools
    'semrushbot', 'ahrefsbot', 'chrome-lighthouse', 'screaming-frog',
    'oncrawlbot', 'botifybot', 'deepcrawl', 'lumar', 'rogerbot', 'dotbot',
    
    // AI bots
    'gptbot', 'chatgpt', 'oai-searchbot', 'chatgpt-user', 'claudebot',
    'google-extended', 'perplexitybot', 'perplexity-user', 'youbot',
    'amazonbot', 'anthropic-ai', 'claude-web', 'ccbot', 'mistralai-user',
    
    // Generic patterns
    'prerender', 'bot', 'crawler', 'spider', 'crawling'
  ];
  
  return botPatterns.some(pattern => userAgent.includes(pattern));
};

export const waitForPrerender = (timeout: number = 10000): Promise<void> => {
  return new Promise((resolve) => {
    if (!isPrerendering()) {
      resolve();
      return;
    }

    console.log('Prerender detected, waiting for content to load...');

    const checkReady = () => {
      // Wait for all images to load
      const images = document.querySelectorAll('img');
      const allImagesLoaded = Array.from(images).every(img => img.complete);
      
      // Wait for any async content to load
      const hasLoadingElements = document.querySelectorAll('[data-loading="true"]').length > 0;
      
      // Check if fonts are loaded
      const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
      
      Promise.resolve(fontsReady).then(() => {
        if (allImagesLoaded && !hasLoadingElements) {
          console.log('All content loaded, marking prerender as ready');
          // @ts-ignore
          window.prerenderReady = true;
          resolve();
        } else {
          setTimeout(checkReady, 100);
        }
      });
    };

    // Start checking after a brief delay to allow initial render
    setTimeout(checkReady, 500);
    
    // Fallback timeout - ensure we don't hang indefinitely
    setTimeout(() => {
      console.log('Prerender timeout reached, marking as ready');
      // @ts-ignore
      window.prerenderReady = true;
      resolve();
    }, timeout);
  });
};

export const markAsReady = (): void => {
  if (isPrerendering()) {
    console.log('Manually marking prerender as ready');
    // @ts-ignore
    window.prerenderReady = true;
  }
};

// Utility to verify if prerender is working
export const testPrerenderIntegration = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'googlebot'
      }
    });
    
    const html = await response.text();
    
    // Check if the response contains rendered content (not just the shell)
    const hasRenderedContent = html.includes('Fiji Solutions') && 
                              html.includes('We help your business grow online');
    
    console.log('Prerender test result:', hasRenderedContent ? 'PASS' : 'FAIL');
    return hasRenderedContent;
  } catch (error) {
    console.error('Prerender test failed:', error);
    return false;
  }
};