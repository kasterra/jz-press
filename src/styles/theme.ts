const color = {
  red: "#ea5350",
  orange: "#f1bc2e",
  pale: "#f4f2f2",
  blue: "#427bbf",
  gray: "#4d4b4d",
  black: "#080404",
};

const font = {
  title: "S-Core Dream",
  main: "KoPubDotum",
};

const Theme = { color, font };

export type Color = keyof typeof color;
export type Font = keyof typeof font;
export default Theme;
