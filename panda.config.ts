import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#1a1a1a" },
          secondary: { value: "#f5f5f5" },
          accent: { value: "#8b5cf6" },
        },
        fonts: {
          body: { value: "Inter, system-ui, sans-serif" },
        },
      },
    },
  },
  outdir: "styled-system",
});
