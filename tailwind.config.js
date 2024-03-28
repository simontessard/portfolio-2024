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
        sans: ["Sans", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
