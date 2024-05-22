/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': "#40c9ff",
        'secondary': "#44F987",
        "background":"#CFF0FD",
        'icon-light': "#334155",
        'text-dark': "#334155",
        'item-menu-bg': "#111111",
      },



    },

  },
  plugins: [],
}

