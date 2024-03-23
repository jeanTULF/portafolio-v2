/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',  
],
  theme: {
    extend: {
      colors: {
        primaryDark: '#212121',
        secondaryDark: '#1484F5'
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}

