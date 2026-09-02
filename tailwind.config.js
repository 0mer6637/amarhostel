/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5EC',
          200: '#F4EBD9',
          300: '#EBDDBE',
          400: '#DCC9A0',
          500: '#C9B07E',
        },
        sand: {
          50: '#FAF6EF',
          100: '#F2E9D8',
          200: '#E8D8C0',
          300: '#D9C2A1',
          400: '#C5A87C',
        },
        charcoal: {
          700: '#3D352E',
          800: '#2A241F',
          900: '#1C1814',
        },
        olive: {
          50: '#F6F7EE',
          100: '#EAEED6',
          200: '#D3DBB0',
          300: '#B5C284',
          400: '#94A55E',
          500: '#768845',
          600: '#5D6D36',
          700: '#4A562E',
          800: '#3C4527',
          900: '#313A22',
        },
        terracotta: {
          400: '#C8856A',
          500: '#B36B4F',
          600: '#9E563D',
        },
        navy: {
          700: '#2C3E50',
          800: '#243240',
          900: '#1B2733',
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
    },
  },
  plugins: [],
};
