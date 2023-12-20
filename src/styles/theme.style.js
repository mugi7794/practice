const COLORS = {
  primary: {
    100: "#9A031E", // red
    300: "#FB8B24", // gold
    200: "#E36414", // orange
    400: "#5F0F40", // Maroon
  },
  secondary: {
    100: "#161A30", // dark navy
    200: "#31304D", //navy
    300: "#B6BBC4", //gray
    400: "#F0ECE5", //winter
  },
  white: "#FFFFFF",
  black: "#333333",
};

const FONT_SIZE = {
  xsmall: "12px",
  small: "14px",
  medium: "18px",
  large: "20px",
  xlarge: "24px",
};

const FONT_WEIGHT = {
  thin: 300,
  regular: 500,
  bold: 800,
};

const lightTheme = {
  backgroundColor: "#F8f7f4",
  textColor: "#31302E",
  borderColor: "1px solid #eaeaea",
};

const darkTheme = {
  backgroundColor: "#121319",
  textColor: "#e6e9f3",
  borderColor: "1px solid #2c2d33",
  contentColor: "#2e313d",
  highlight: "#87cefa",
  hoverColor: "#d8dbe7",
};

const theme = {
  COLORS,
  FONT_WEIGHT,
  FONT_SIZE,
  lightTheme,
  darkTheme,
};

export default theme;
