/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#F4ECFB',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') ,  require('tailwind-scrollbar'),
  ],
};