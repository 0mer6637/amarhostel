/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Modern Warm Minimal Color Palette
        warm: {
          50: '#F7F5F0',    // Main background
          100: '#EEEAE2',   // Secondary background
        },
        charcoal: {
          700: '#3D3D3D',
          800: '#2B2B2B',   // Primary text
          900: '#1A1A1A',
        },
        accent: {
          green: '#4F6B57',  // Muted dark green (single accent)
        },
        // Legacy support (converted to new palette)
        cream: {
          50: '#F7F5F0',
          100: '#EEEAE2',
          200: '#E8E4DA',
        },
        white: '#FFFFFF',
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
        sm: '0 1px 2px 0 rgba(43, 43, 43, 0.04)',
        md: '0 2px 8px 0 rgba(43, 43, 43, 0.08)',
        lg: '0 8px 16px 0 rgba(43, 43, 43, 0.12)',
        xl: '0 12px 24px 0 rgba(43, 43, 43, 0.15)',
      },
    },
  },
  plugins: [],
};
