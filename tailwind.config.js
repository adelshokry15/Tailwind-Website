/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#67dbda",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeOut: {
          "0%": {
            opacity: "0",
            transform: "matrix(0.2, 0, 0, 0.2, 0, 0) rotate(0deg)",
          },
          "100%": {
            opacity: "1",
            transform: "matrix(1, 0, 0, 1, 0, 0) rotate(360deg)",
          },
        },
        fadeBox: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "80%": {
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        stayLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        stayRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
        fadeOut: "fadeOut 1.4s ease-in-out",
        fadeBox: "fadeBox 1.2s ease-in-out",
        stayLeft: "stayLeft 1.2s ease-in-out",
        stayRight: "stayRight 1.2s ease-in-out",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
