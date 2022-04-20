module.exports = {
  purge: ["./src/components/.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-turquoise": "#09EFB8",
        "accent-purple": "#9520AD",
        "tag-blue": "#064663",
        accept: "#3D56B1",
        chat: "#3DB149",
        slate: "#131313",
      },
      fontSize: {
        tiny: "6px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
