/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry: ['zentry','sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-seri'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif']
      }
      colors: {
        blue:{
          50: '#DFDFF0',
          75: '#DFDFF2',

        }
      }
    },
  },
  plugins: [],
}
