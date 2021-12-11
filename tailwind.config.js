module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
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
        heroMobile: 'url("/images/image-hero-mobile.jpg")',
        heroDesktop: 'url("/images/image-hero-desktop.jpg")',
      },
      backgroundSize: {
        half: "50vh",
      },
    },
  },
  plugins: [],
};
