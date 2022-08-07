import { createStitches } from "@stitches/react";
import { colors, fontSize, fontWeight } from "../styles/palette";

// You should exports all properties
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // See the [configuration guide](https://stitches.dev/docs/tokens)
  theme: {
    colors: {
      background: colors.background,
      primaryBlue: colors.blue,
      primaryDark: colors.dark,
      primaryGrey: colors.grey,
      primaryOrange: colors.orange,
      primaryWhite: colors.white,
    },
    fontWeights: {
      thin: fontWeight.thin,
      extraLight: fontWeight.extraLight,
      light: fontWeight.light,
      regular: fontWeight.regular,
      medium: fontWeight.medium,
      semiBold: fontWeight.semiBold,
      bold: fontWeight.bold,
      extraBold: fontWeight.extraBold,
      black: fontWeight.black,
    },
    fontSizes: {
      verySmall: fontSize.verySmall,
      small: fontSize.small,
      semiMedium: fontSize.semiMedium,
      medium: fontSize.medium,
      large: fontSize.large,
      veryLarge: fontSize.veryLarge,
      hero: fontSize.hero,
    },
  },
});
