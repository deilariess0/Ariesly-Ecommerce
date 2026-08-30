/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#171717",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
