import { defineConfig, defineTextStyles } from "@pandacss/dev";
import { colorTheme } from "./src/colors";

const textStyles = defineTextStyles({
  heading: {
    description: "Hero heading",
    value: {
      fontSize: { base: "2.25rem", md: "3.5rem", lg: "5rem" },
      lineHeight: "1",
    },
  },
  subheading: {
    description: "Hero subheading",
    value: {
      fontSize: { base: "1.25rem", md: "2rem", lg: "2.5rem" },
      lineHeight: "1.2",
    },
  },
  brand: {
    description: "Top navigation brand text",
    value: {
      fontSize: { base: "1.25rem", md: "1.5rem", lg: "2rem" },
      lineHeight: "1.1",
    },
  },
  body: {
    description: "Main page body copy",
    value: {
      fontSize: { base: "1rem", md: "1.125rem", lg: "1.25rem" },
      lineHeight: "1.5",
    },
  },
  highlight: {
    description: "Important short-form details",
    value: {
      fontSize: { base: "1.125rem", md: "1.25rem", lg: "1.5rem" },
      fontWeight: "bold",
      lineHeight: "1.3",
    },
  },
});

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            deepForestGreen: { value: colorTheme.colors.primary.deepForestGreen },
            mossGreen: { value: colorTheme.colors.primary.mossGreen },
            oakBarkBrown: { value: colorTheme.colors.primary.oakBarkBrown },
            emberGold: { value: colorTheme.colors.primary.emberGold },
            firelightAmber: { value: colorTheme.colors.primary.firelightAmber },
          },
          secondary: {
            mistGrey: { value: colorTheme.colors.secondary.mistGrey },
            parchmentCream: { value: colorTheme.colors.secondary.parchmentCream },
            blackberry: { value: colorTheme.colors.secondary.blackberry },
            weatheredCopper: { value: colorTheme.colors.secondary.weatheredCopper },
          },
          accent: {
            fern: { value: colorTheme.colors.accent.fern },
            candlelight: { value: colorTheme.colors.accent.candlelight },
            smoke: { value: colorTheme.colors.accent.smoke },
          },
        },
        fonts: {
          body: { value: "Inter, system-ui, sans-serif" },
        },
      },
      textStyles,
    },
  },
  outdir: "styled-system",
});
