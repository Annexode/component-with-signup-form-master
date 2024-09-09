/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 100%, 74%)",
        secondary: "hsl(154, 59%, 51%)",
        ubururu: "hsl(248, 32%, 49%)",
      },
      fontSize: {
        eshanu: "0.5rem",
        esheshatu: "0.6rem",
      },
      borderWidth: {
        imwe: "1px",
      },
      width: {
        ubugari: "375px",
      },
      height: {
        uburebure: "885px",
      },
    },
  },
  variants: {},
  plugins: [],
};
