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
          background: {
            dark: { value: colorTheme.colors.background.dark },
            paper: { value: colorTheme.colors.background.paper },
            surface: { value: colorTheme.colors.background.surface },
          },
          primary: {
            main: { value: colorTheme.colors.primary.main },
            light: { value: colorTheme.colors.primary.light },
          },
          forest: {
            deep: { value: colorTheme.colors.forest.deep },
            olive: { value: colorTheme.colors.forest.olive },
          },
          accent: {
            fire: { value: colorTheme.colors.accent.fire },
            ember: { value: colorTheme.colors.accent.ember },
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
