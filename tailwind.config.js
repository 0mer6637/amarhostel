/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Complete Color System - ONLY 5 COLORS
        // Main Background
        primary: {
          bg: '#F7F3EC',      // Main Background - Warm cream/beige
        },
        // Secondary Background
        secondary: {
          bg: '#EDE6DA',      // Secondary Background - Light beige
        },
        // Primary Dark
        dark: {
          main: '#292722',    // Primary Dark - Dark charcoal/brown
        },
        // Accent
        accent: {
          main: '#586B57',    // Accent - Muted sage green
        },
        // White
        light: {
          bg: '#FFFFFF',      // White - For cards and text
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.3s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(41, 39, 34, 0.04)',
        md: '0 2px 8px 0 rgba(41, 39, 34, 0.08)',
        lg: '0 8px 16px 0 rgba(41, 39, 34, 0.12)',
        xl: '0 12px 24px 0 rgba(41, 39, 34, 0.15)',
      },
    },
  },
  plugins: [],
};
