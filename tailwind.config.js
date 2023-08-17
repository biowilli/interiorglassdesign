module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      fairpage: "#FFF2F2",
      fairgray: "#525252",
      fairblack: "#00000",
      fairblack: "#00000",
      fairwhite: "#ffffff",
      fairgray: "#fafafa",
      fairbrightgreen: "#c2d115",
      fairdarkgreen: "#82ad29",
      fairblue: "#7A0000",
      fairbrightblue: "#5365CA",
    },
  },
  plugins: [require("flowbite/plugin")],
};
