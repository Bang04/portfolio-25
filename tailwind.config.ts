import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
     "./src/**/*.css", 
    ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
        gravitasOne: ['Gravitas One', 'cursive'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
