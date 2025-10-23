/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'source-sans': ['var(--font-source-sans)', 'sans-serif'],
      },
      colors: {
        'plasencia': {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#faf0c4',
          300: '#f5e39d',
          400: '#f0d16a',
          500: '#eab308',
          600: '#a78b5b',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        'tobacco': {
          50: '#f7f3f0',
          100: '#ede4d8',
          200: '#d9c7b0',
          300: '#c4a882',
          400: '#b08d54',
          500: '#9c7226',
          600: '#8b5a1f',
          700: '#7a4218',
          800: '#692a11',
          900: '#58120a',
        }
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .8 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'elegant': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elegant-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
