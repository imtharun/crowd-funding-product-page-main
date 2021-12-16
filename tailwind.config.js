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
        408: "25.49rem",
        600: "37.5rem",
        700: "43.75rem",
      },
      height: {
        80: "80vh",
      },
      screens: {
        desk: "700px",
      },
      colors: {
        darkCyan: "hsl(176, 72%, 28%)",
        moderateCyan: "hsl(176, 50%, 47%)",
        darkGray: "hsl(0, 0%, 48%)",
        black: "hsl(0, 0%, 0%)",
        grayBookmark: "#B1B1B1",
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
