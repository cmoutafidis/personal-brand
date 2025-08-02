# Fiji Solutions Website

A modern, multilingual (English/Greek) business website built with React, TypeScript, and Tailwind CSS, optimized for SEO with Prerender.io integration.

## Features

- 🌐 **Multilingual Support**: English and Greek languages
- 🎨 **Modern Design**: Clean, professional design with dark mode support
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🚀 **Performance Optimized**: Fast loading with lazy loading and code splitting
- 🔍 **SEO Optimized**: Prerender.io integration for search engines and social media
- 🤖 **AI Integration**: Voice assistant powered by Vapi.ai
- 📊 **Analytics**: Vercel Analytics and Speed Insights integration

## SEO & Prerender.io Integration

This website uses Prerender.io to serve pre-rendered HTML to search engines and social media crawlers while maintaining the interactive React experience for users.

### Supported Bots

The implementation includes comprehensive bot detection for:

**Search Engines:**
- Google (googlebot, adsbot-google, google-inspectiontool, etc.)
- Bing (bingbot)
- Yandex (yandexbot)
- Yahoo, Baidu, Naver, DuckDuckGo, Apple, and more

**Social Media:**
- Facebook (facebookexternalhit, facebookbot)
- Twitter (twitterbot)
- LinkedIn (linkedinbot)
- Instagram, WhatsApp, Pinterest, TikTok, Discord

**SEO Tools:**
- SEMRush, Ahrefs, Chrome Lighthouse
- Screaming Frog, OnCrawl, Botify, Lumar, Moz

**AI Bots:**
- ChatGPT (gptbot, chatgpt, oai-searchbot)
- Claude (claudebot)
- Perplexity AI, Amazon, Anthropic, and more

### How It Works

1. **Bot Detection**: Incoming requests are analyzed by User-Agent
2. **Prerender Routing**: Bots are redirected to Prerender.io service
3. **Server-Side Rendering**: Prerender.io renders the React app server-side
4. **SEO-Friendly HTML**: Fully rendered HTML is served to bots
5. **User Experience**: Regular users get the interactive React app

### Testing Prerender Integration

You can test if prerender is working by:

```bash
# Test with curl (simulating Googlebot)
curl -A "googlebot" https://fijisolutions.net/en

# Or use the built-in test function
npm run test:prerender
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The website is configured for deployment on:
- **Netlify**: Uses `_redirects` and `_headers` files
- **Vercel**: Uses `vercel.json` configuration

Both platforms automatically handle the Prerender.io integration.

## Environment Variables

No environment variables are required for basic functionality. The Prerender.io token is embedded in the configuration files.

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components
├── context/            # React context providers
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component

public/
├── _redirects          # Netlify redirects for Prerender.io
├── _headers            # Netlify headers
└── sitemap.xml         # SEO sitemap
```

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **SEO**: React Helmet Async, Prerender.io
- **AI**: Vapi.ai for voice assistant
- **Analytics**: Vercel Analytics & Speed Insights
- **Build Tool**: Vite
- **Deployment**: Netlify/Vercel

## License

© 2025 Fiji Solutions. All rights reserved.