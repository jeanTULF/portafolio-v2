/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',  
],
"darkMode": "class",
  theme: {
    extend: {
        colors: {
          primaryDark: '#212121',
          buttonDark: '#1484F5',
          buttonHoverDark: '#235B9C',
          textDark: '#F5F5F5',
          gradient: {
            900: '#2B2B2B',
            700: '#1C1C1C',
          },
          borderDark: '#494949',
          bgGradient: {
            primary: '#FCFDFE',
            secondary: '#F1F2F3'
          },
          titleAccent: '#395BC7',
          textAccent: '#3D63DD',
          buttonbgGradient: {
            primary: '#FCFDFE',
            secondary: '#EFF0F3',
          },
          cardGradient: {
            primary: '#FCFDFE',
            secondary: '#EAF2FF'
          },
          darkCardGradient: {
            primary: '#2B2B2B',
            secondary: '#1C1C1C'
          },
          borderColor: '#D8D9E0',
          borderOpacity: '#5a5c631a',
          formGradient: '#b9c3e11a',
          textLight: '#8B8D98'
        }
    },
  },
  plugins: [ require('flowbite/plugin')],
}

