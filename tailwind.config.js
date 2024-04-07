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
        secondaryDark: '#1484F5',
        textDark: '#F5F5F5',
        gradient: {
          900: '#2B2B2B',
          700: '#1C1C1C',
        },
        borderDark: '#494949'
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}

