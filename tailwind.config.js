/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      fontFamily: {
        // sans: ["Instrument Sans", "sans-serif"], // Set Instrument Sans as default
        instrument: ["Instrument Sans", "sans-serif"], // Add Instrument Sans as a utility class
        sans: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
