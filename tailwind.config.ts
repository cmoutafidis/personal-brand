import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfaff',
          100: '#d6f1ff',
          200: '#b5e8ff',
          300: '#83daff',
          400: '#48c2ff',
          500: '#1ea6ff',
          600: '#0086ff',
          700: '#006add',
          800: '#0058b3',
          900: '#064b8f',
          950: '#042e5c',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#fff1e6',
          100: '#ffe2cc',
          200: '#ffc499',
          300: '#ff9f66',
          400: '#ff7733',
          500: '#ff5a00',
          600: '#cc4800',
          700: '#993600',
          800: '#662400',
          900: '#331200',
          950: '#1a0900',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config