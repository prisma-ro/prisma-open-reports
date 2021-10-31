const production = !process.env.ROLLUP_WATCH;

module.exports = {
  mode: "jit",
  purge: {
    enabled: production,
    content: ["./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      spacing: {
        '4/5-screen': 'calc(100vh - 5rem)',
      },
      colors: {
        "prisma-red": {
          50: "#ff8989",
          100: "#ff7f7f",
          200: "#ff7575",
          300: "#ff6b6b",
          400: "#ff6161",
          500: "#ff5757",
          600: "#f54d4d",
          700: "#eb4343",
          800: "#e13939",
          900: "#d72f2f",
        },
        "prisma-pink": {
          50: "#ffd8d0",
          100: "#ffcec6",
          200: "#ffc4bc",
          300: "#ffbab2",
          400: "#ffb0a8",
          500: "#ffa69e",
          600: "#f59c94",
          700: "#eb928a",
          800: "#e18880",
          900: "#d77e76",
        },
        "prisma-fuchsia": {
          50: "#dc7697",
          100: "#d26c8d",
          200: "#c86283",
          300: "#be5879",
          400: "#b44e6f",
          500: "#aa4465",
          600: "#a03a5b",
          700: "#963051",
          800: "#8c2647",
          900: "#821c3d",
        },
        "prisma-purple": {
          50: "#785487",
          100: "#6e4a7d",
          200: "#644073",
          300: "#5a3669",
          400: "#502c5f",
          500: "#462255",
          600: "#3c184b",
          700: "#320e41",
          800: "#280437",
          900: "#1e002d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
