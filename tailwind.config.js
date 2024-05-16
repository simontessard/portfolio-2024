/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mori: ["PP Mori", "sans-serif"],
        sans: ["PP Right", "sans-serif"],
        marbry: ["Marbry", "sans-serif"],
      },
        colors: {
            'black-light': "#282828",
        },
    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [],
};
