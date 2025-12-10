/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Pacifico"', 'cursive'],
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cosmic: {
          deep: '#050818',
          violet: '#1b1233',
          navy: '#05091f',
        },
        accent: {
          pink: '#ff4b9f',
          magenta: '#fb7185',
          gold: '#ffdfa9',
        },
      },
      boxShadow: {
        neon: '0 0 30px rgba(255,75,159,0.55)',
        'neon-soft': '0 0 18px rgba(255,223,169,0.4)',
      },
     animation: {
  float: 'float 14s ease-in-out infinite',
  // much slower, dreamy rotations
  orbitSlow: 'orbitSlow 90s linear infinite',
  orbitMedium: 'orbitMedium 70s linear infinite',
  orbitFast: 'orbitFast 55s linear infinite',
  twinkle: 'twinkle 3.4s ease-in-out infinite',
},

      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        orbitSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        orbitMedium: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        orbitFast: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.15, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
}
