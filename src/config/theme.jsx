import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import colors from "./colors";

const breakpointsValues = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

function createThemeConfig({
  backgroundColor,
  backgroundAlternativeColor,
  paperBackgroundColor,
  textPrimaryColor,
  textSecondaryColor,
  textAlternativeColor,
  buttonTextColor,
  textDisabledColor,
  textErrorColor,
  buttonBackgroundColor,
  buttonBackgroundDisabledColor,
  //contrastColor = colors.black,
}) {
  const breakpoints = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: breakpointsValues,
    up: (key) => `@media (min-width: ${breakpointsValues[key]}px)`,
    down: (key) => `@media (max-width: ${breakpointsValues[key] - 1}px)`,
  };
  return createTheme({
    breakpoints,
    palette: {
      primary: {
        main: backgroundColor,
        contrastText: textPrimaryColor,
      },
      secondary: {
        main: paperBackgroundColor,
        contrastText: textSecondaryColor,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,
        alternative: textAlternativeColor,
        disabled: textDisabledColor,
      },
      error: {
        main: textErrorColor,
        contrastText: textErrorColor,
      },
      button: {
        backgroundColor: buttonBackgroundColor,
        disabled: buttonBackgroundDisabledColor,
        contrastText: buttonTextColor,
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });
}
const Light = createThemeConfig({
  backgroundColor: colors.softWhite,
  backgroundAlternativeColor: colors.yellow,
  paperBackgroundColor: colors.white,
  textPrimaryColor: colors.black,
  textSecondaryColor: colors.white,
  textAlternativeColor: colors.blue,
  buttonTextColor: colors.white,
  textDisabledColor: colors.gray,
  textErrorColor: colors.red,
  buttonBackgroundColor: colors.blue,
  buttonBackgroundDisabledColor: colors.gray,
});
const Themes = {
  light: responsiveFontSizes(Light),
};
export default Themes;
