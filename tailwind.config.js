module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    minWidth: {
      320: "320px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      1.5: "1.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      inset: {
        "40%": "40%",
        "45%": "45%",
      },
      width: {
        600: "37.5rem",
        700: "43.75rem",
      },
      screens: {
        desk: "700px",
      },
      colors: {
        darkCyan: "hsl(176, 72%, 28%)",
        moderateCyan: "hsl(176, 50%, 47%)",
        darkGray: "hsl(0, 0%, 48%)",
        black: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        comm: ["Commissioner", "sans-serif"],
      },
      backgroundImage: {
        heroMobile: 'url("image-hero-mobile.jpg")',
        heroDesktop: 'url("image-hero-desktop.jpg")',
      },
      backgroundSize: {
        half: "50vh",
      },
    },
  },
  plugins: [],
};
